'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { timeout } from '@/utils/utilitys';
import { useAuthStore } from '@/store';

const useCheckIsNotLogin = () => {
  const {
    auth: { User },
  } = useAuthStore((state) => state);
  const { push } = useRouter();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isNotLogin, setIsNotLogin] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsLoading(true);
    if (User !== null) {
      push('/dashboard');
      setIsNotLogin(false);
      // return;
    } else {
      setIsNotLogin(true);
    }

    timeout(3000);

    setIsNotLogin(true);
    setIsLoading(false);
  }, [User, push]);

  return { isLoading, isNotLogin };
};

export default useCheckIsNotLogin;
