'use client';
import ArticleList from '@/components/List/ArticleList';
import LinkButton from '@/components/Button/LinkButton';
import Link from 'next/link';
import PaginationComponent from '@/components/Pagination/PaginationComponent';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { writeInitState, writeState, writingInfoInitState, writingInfoState } from '@/atom/write';
import { useGetBoardAllService } from '@/hooks/queries/board/boardServie';
import { BOARD_CATEGORY } from '@/constants/board';
import SubBanner from 'public/images/subscriptionBanner.png';
import Image from 'next/image';
import HorizontalLinkList from '@/components/List/HorizontalLinkList';
import InputElements from '@/containers/events/InputElements';

const AllPage = () => {
  const [, setWriteValue] = useRecoilState(writeState);
  const [, setWritingInfoValue] = useRecoilState(writingInfoState);

  const [page, setPage] = useState(1);

  const { data: boardAllData, isLoading } = useGetBoardAllService();

  const postPerPage = 10;
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const pageChange = (page: number) => {
    setPage(page);
  };

  if (isLoading) return <></>;
  console.log(boardAllData);

  return (
    <div className="flex w-full flex-col gap-[40px] px-2 md:gap-[60px] md:px-0">
      <Image src={SubBanner} alt="구독 배너" className="h-auto w-screen" priority />
      <HorizontalLinkList category={BOARD_CATEGORY} />
      <InputElements />
      <div className="flex flex-col gap-4">
        {boardAllData && (
          <div>
            {boardAllData.content.slice(indexOfFirstPost, indexOfLastPost).map((articleItem) => {
              const categoryId = () => {
                switch (articleItem.category) {
                  case '자유':
                    return 'free';
                  case '홍보':
                    return 'events';
                  case '거래':
                    return 'trade';
                  case '친목':
                    return 'friendship';
                  case '주최관련':
                    return 'organizing';
                }
              };
              return <ArticleList key={articleItem.id} articleContent={articleItem} path={`/board/${categoryId()}`} />;
            })}
          </div>
        )}
        {boardAllData && (
          <PaginationComponent
            countPerPage={postPerPage}
            page={page}
            totalItemsCount={boardAllData?.totalElements}
            pageChange={pageChange}
          />
        )}

        <div className="flex justify-end">
          <Link href="/board/write" passHref legacyBehavior>
            <LinkButton
              label="글쓰기"
              href="#"
              className="prose-btn-M rounded-2xl bg-orange2 px-5 py-3 text-white md:prose-btn-L hover:bg-orange1 focus:outline-none disabled:bg-gray6 md:px-6 md:py-4"
              onClick={() => {
                setWriteValue(writeInitState);
                setWritingInfoValue(writingInfoInitState);
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllPage;
