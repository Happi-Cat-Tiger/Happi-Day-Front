'use client';
import React, { ChangeEvent, KeyboardEvent } from 'react';
import { salesSearchState } from '@/atom/salesAtom';
import { useRecoilState } from 'recoil';

const SalesInputElements = () => {
  const [salesSearch, setSalesSearch] = useRecoilState<string>(salesSearchState);

  const getEventSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSalesSearch(e.target.value);
  };
  const handleEnter = (e: ChangeEvent<HTMLInputElement> & KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      console.log('enter', salesSearch);
      getEventSearch(e);
    }
  };

  return (
    <div className="my-[60px] flex justify-between sm:flex-col sm:gap-[16px] md:flex-row md:items-center md:gap-[0]">
      <div className="flex items-center sm:justify-between md:gap-[24px]">
        <div>
          <select className="cursor-pointer rounded-[16px] bg-[#F0F5F9] px-[16px] py-[8px] outline-none sm:prose-btn-S md:prose-btn-M">
            <option>최신순</option>
            <option>오래된순</option>
          </select>
        </div>
        <div className="flex flex-col items-start gap-1">
          <div className="flex justify-center gap-2">
            <input id="subscribe" type="checkbox" />
            <label htmlFor="subscribe" className="sm:prose-body-XS md:prose-body-M">
              내가 구독한 아티스트만 보기
            </label>
          </div>
          <div className="flex justify-center gap-2">
            <input id="ongoing" type="checkbox" />
            <label htmlFor="ongoing" className="sm:prose-body-XS md:prose-body-M">
              진행중인 굿즈만 보기
            </label>
          </div>
        </div>
      </div>
      <div>
        <input
          type="search"
          placeholder="Search"
          onKeyDown={handleEnter}
          className="prose-subtitle-S rounded-[8px] bg-[#F0F5F9] px-4 py-2 outline-none placeholder:text-black sm:w-full md:w-[264px]"
        />
      </div>
    </div>
  );
};

export default SalesInputElements;