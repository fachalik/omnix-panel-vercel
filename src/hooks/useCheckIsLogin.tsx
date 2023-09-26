'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { timeout } from '@/utils/utilitys';
import { useAuthStore } from '@/store';

const useCheckIsLogin = () => {
  const {
    auth: { User },
  } = useAuthStore((state) => state);
  const { push } = useRouter();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isLogin, setIsLogin] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsLoading(true);
    if (User === null) {
      push('/');
      // return;
    } else {
      setIsLogin(true);
    }

    timeout(3000);

    setIsLogin(true);
    setIsLoading(false);
  }, [User, push]);

  return { isLoading, isLogin };
};

export default useCheckIsLogin;
