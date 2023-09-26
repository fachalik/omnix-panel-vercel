'use client';

import React from 'react';
import {
  MailOutlined,
  ExclamationCircleOutlined,
  CheckOutlined,
} from '@ant-design/icons';
import { palette } from '@/theme/themeConfig';
import { Button } from 'antd';
import { useSearchParams, useRouter } from 'next/navigation';
import { confirmEmail } from '@/service/auth';
import FormResetPassword from '@/components/ForgetPassword/Form/FormResetPassword';

function Page() {
  const [isSuccess, setIsSuccess] = React.useState<any>(null);
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const hash = searchParams.get('hash');

  const emailConfirm = async () => {
    const payload = {
      hash,
    };
    await confirmEmail(payload)
      .then(() => {
        setIsSuccess(true);
      })
      .catch((err) => {
        setIsSuccess(false);
      });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
      <FormResetPassword />
    </div>
  );
}

export default Page;
