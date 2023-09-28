'use client';
import { useEffect } from 'react';
import { useModalLogoutstore } from './modallogout';
import { getLogin } from '@/utils/sessions';
import { useAuthStore } from './auth';

export default function CheckPersistor() {
  const checklocalStorage = getLogin();
  const { showModal } = useModalLogoutstore((state) => state);
  const { isLogout } = useAuthStore((state) => state);

  console.log('MASOK>>>>', Object.keys(checklocalStorage).length, isLogout);

  useEffect(() => {
    let check = true;
    if (check) {
      if (Object.keys(checklocalStorage).length === 0 && isLogout) {
        showModal();
      }
    }
    return () => {
      check = false;
    };
  }, [checklocalStorage, isLogout, showModal]);
  return <></>;
}
