'use client';
import AuthInput from '@/components/Auth/AuthInput';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';

const SignIn = () => {
  const inputPlaceHolder = [
    { label: '', type: 'string', name: 'id', icon: AiOutlineUser, content: 'example@happiday.com' },
    { label: '', type: 'string', name: 'pw', icon: AiOutlineLock, content: '비밀번호' },
  ];

  return (
    <>
      <div className="m-auto flex w-[360px] flex-col items-center gap-[37px] px-2 pb-[130px] pt-20 md:gap-10 md:py-[120px]">
        <div className="prose-h4 text-gray1 md:prose-h3">로그인</div>
        <AuthInput inputPlaceHolder={inputPlaceHolder} />
        <div className="flex flex-col items-center gap-[33px] self-stretch md:gap-10">
          <div className="prose-body-XS flex items-center gap-3 text-gray1">
            <div>이메일 찾기</div>
            <div>|</div>
            <div>비밀번호 찾기</div>
            <div>|</div>
            <div>회원가입</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignIn;
