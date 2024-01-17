'use client';
import StepProgressBar from '@/components/Bar/StepProgressBar';
import WritingStep from '@/containers/write/WritingStep';
import React, { useState } from 'react';
import BoardWritingInfoStep from '@/containers/write/BoardWritingInfoStep';
import PreviewWritingStep from '@/containers/write/PreviewWritingStep';
import StyledButton from '@/components/Button/StyledButton';
import { useRecoilState } from 'recoil';
import { writeState, writingInfoState } from '@/atom/write';

const WritePage = () => {
  const [step, setStep] = useState<number>(1);

  const [writeValue] = useRecoilState(writeState);
  const { articleTitle, editValue, category } = writeValue;

  const [writingInfoValue] = useRecoilState(writingInfoState);
  const { hashtag, thumbnailImage, eventAddress } = writingInfoValue;

  const onDisable = () => {
    if (step === 1) {
      if (category === '카테고리|' || !articleTitle || !editValue) return true;
    }
    if (step === 2) {
      if (category === '거래/교환/양도') {
        if (!hashtag || !thumbnailImage.imageUrl) return true;
      } else if (category === '이벤트/홍보') {
        if (!hashtag || !thumbnailImage.imageUrl || !eventAddress.address) return true;
      } else {
        if (!hashtag) return true;
      }
    }
  };
  return (
    <section className="mx-auto flex h-full w-full flex-col items-center justify-center gap-4 md:max-w-[996px]">
      <StepProgressBar step={step} />
      <div className="flex w-full items-baseline justify-between">
        <StyledButton
          className="prose-btn-M rounded-2xl bg-[#E85ECF] px-5 py-3 text-white md:prose-btn-L hover:bg-pink2 focus:outline-none disabled:bg-gray6 md:px-6 md:py-4"
          label="이전"
          disabled={step <= 1}
          onClick={() => setStep(step - 1)}
        />
        <p className="flex items-baseline gap-3">
          <span className="rounded-xl bg-orange2 p-1 text-white">Step.{step}</span>
          {step === 1 && <span>글쓰기</span>}
          {step === 2 && <span>글정보등록</span>}
          {step === 3 && <span>미리보기</span>}
        </p>
        <StyledButton
          className="prose-btn-M rounded-2xl bg-[#E85ECF] px-5 py-3 text-white md:prose-btn-L hover:bg-pink2 focus:outline-none disabled:bg-gray6 md:px-6 md:py-4"
          label={step === 3 ? '완료' : '다음'}
          disabled={onDisable()}
          onClick={() => {
            if (step === 3) {
              alert('글 작성이 완료되었습니다');
            } else setStep(step + 1);
          }}
        />
      </div>
      {step === 1 && <WritingStep />}
      {step === 2 && <BoardWritingInfoStep />}
      {step === 3 && <PreviewWritingStep />}
    </section>
  );
};

export default WritePage;
