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

    if (check) {
      if (checklocalStorage === undefined && window.location.pathname !== '/') {
        setIsLogout(true);
      } else {
        setIsLogout(false);
      }
      if (checklocalStorage === undefined && isLogout) {
        showModal();
      }
    }
    return () => {
      check = false;
    };
  }, [isLogout]);
  return <></>;
}
