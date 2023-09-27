'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { postLoginGoogle } from '@/service/auth';
import Loading from '@/components/Loading';
import { useAuthStore } from '@/store';
import { useRouter } from 'next/navigation';
import useHasHydrated from '@/hooks/useHydrate';

export default function Home() {
  const hasHydrated = useHasHydrated();
  const { push } = useRouter();
  const { setAuth } = useAuthStore((state) => state);
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const getToken = async () => {
    const redirect =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/google'
        : 'https://omnix-panel-vercel.vercel.app/google';
    const userInfo = await axios
      .post(
        `https://oauth2.googleapis.com/token?code=${code}&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET}&redirect_uri=${redirect}&grant_type=authorization_code`,
        {
          headers: {},
        }
      )
      .then(async (res) => {
        // res.data
        const response = await postLoginGoogle({
          idToken: res.data.id_token,
        });
        await setAuth(response);
      })
      .catch((error) => {
        console.log(error);
        push('/');
      });
  };

  React.useEffect(() => {
    let isfetch = true;
    if (isfetch && code && hasHydrated) {
      getToken();
    }
    return () => {
      isfetch = false;
    };
  }, [hasHydrated, code]);

  return <Loading />;
}
