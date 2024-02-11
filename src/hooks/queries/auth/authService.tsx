import { getSignoutApi } from '@/api/auth/authApi';
import { LoginState } from '@/atom/LoginState';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';

export const getSignoutService = () => {
  const [, setIsLoggedIn] = useRecoilState(LoginState);

  const query = useQuery({
    queryKey: ['logout'],
    queryFn: () => getSignoutApi(),
    enabled: false,
  });

  if (query.isSuccess) setIsLoggedIn(false);

  return query;
};