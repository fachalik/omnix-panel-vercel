'use client';
import { useEffect } from 'react';
import { useModalLogoutstore } from './modallogout';
import { getLogin } from '@/utils/sessions';
import { useAuthStore } from './auth';

export default function CheckPersistor() {
  const checklocalStorage = getLogin();
  const { showModal } = useModalLogoutstore((state) => state);
  const { isLogout, setIsLogout } = useAuthStore((state) => state);

  useEffect(() => {
    let check = true;

    console.log('FUCKING HERE', checklocalStorage);
    console.log(window.location.pathname);

    if (check) {
      if (!checklocalStorage && window.location.pathname !== '/') {
        console.log('FUCK FUCK FUCK');
        setIsLogout(true);
      }

      if (!checklocalStorage && window.location.pathname === '/') {
        setIsLogout(false);
      }

      if (!checklocalStorage && isLogout) {
        showModal();
      }
    }
    return () => {
      check = false;
    };
  }, [isLogout, checklocalStorage]);
  return <></>;
}
