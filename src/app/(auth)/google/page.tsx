'use client';

import React from 'react';
import styles from './page.module.css';
import { useSearchParams } from 'next/navigation';
import { Button } from 'antd';
import axios from 'axios';
import { postLoginGoogle } from '@/service/auth';

export default function Home() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  console.log(searchParams, code);

  const getToken = async () => {
    const userInfo = await axios
      .post(
        `https://oauth2.googleapis.com/token?code=${code}&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET}&redirect_uri=http://localhost:3000/google&grant_type=authorization_code`,
        {
          headers: {},
        }
      )
      .then((res) => res.data);

    if (Object.keys(userInfo).length !== 0) {
      const response = await postLoginGoogle({
        idToken: userInfo.id_token,
      });
      console.log('RESPONSE HERE >>>>', response);
    }
  };

  React.useEffect(() => {
    let isfetch = true;
    if (isfetch && code) {
      getToken();
    }
    return () => {
      isfetch = false;
    };
  }, [code]);

  return (
    <main className={styles.main}>
      <p>contact sales</p>
      {/* <Button type="primary" onClick={() => login()}>
        Google hehe
      </Button> */}
      {/* <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
