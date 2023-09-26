'use client';
import styles from './page.module.css';
import { GoogleOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { Row, Col, Card, Button, Divider } from 'antd';

import FormForgetPassword from '@/components/ForgetPassword/Form/FormForgetPassword';
import thirdPartyLogin from '@/lib/third-party-login';
import useIsMobile from '@/hooks/useIsMobile';
import { palette } from '@/theme/themeConfig';

export default function page() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <p
        style={{
          fontSize: '20px',
          fontWeight: '700',
          marginBottom: '1em',
        }}
      >
        Atur Ulang Kata Sandi
      </p>

      <FormForgetPassword />

      <div
        style={{
          marginTop: '1em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          style={{
            float: 'left',
            fontSize: 12,
            textDecoration: 'underline',
          }}
          href="/"
        >
          Kembali ke halamanm login
        </Button>
      </div>
    </div>
  );
}
