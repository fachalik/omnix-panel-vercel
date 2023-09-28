'use client';

import Loading from '@/components/Loading';
import useCheckIsNotLogin from '@/hooks/useCheckIsNotLogin';

interface ILayoutForgetPassword {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutForgetPassword) {
  const { isLoading, isNotLogin } = useCheckIsNotLogin();
  if (isLoading) {
    <Loading />;
  }

  if (isLoading && isNotLogin) {
    return;
  }

  return <>{children}</>;
}
