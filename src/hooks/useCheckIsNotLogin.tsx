'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { timeout } from '@/utils/utilitys';
import { useAuthStore } from '@/store';
import { adminRoutes, userRoutes } from '@/routes';

const useCheckIsNotLogin = () => {
  const { user } = useAuthStore((state) => state);
  const { replace } = useRouter();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isNotLogin, setIsNotLogin] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsLoading(true);
    if (user !== null) {
      if (user.role.name.toLowerCase() === 'user') {
        replace(userRoutes[0].key);
      } else {
        replace(adminRoutes[0].key);
      }
      setIsNotLogin(false);
      // return;
    } else {
      setIsNotLogin(true);
    }

    timeout(3000);

    setIsNotLogin(true);
    setIsLoading(false);
  }, [user]);

  return { isLoading, isNotLogin };
};

export default useCheckIsNotLogin;
