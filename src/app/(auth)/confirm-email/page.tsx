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

  console.log('isSuccess', isSuccess);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {hash && isSuccess === null && (
        <>
          <MailOutlined
            style={{ fontSize: '64px', color: palette.primary.main }}
          />
          <p style={{ fontWeight: 700, fontSize: 20, marginBottom: '1em' }}>
            Please verify your email
          </p>
          <p style={{ fontWeight: 600, fontSize: 14, textAlign: 'center' }}>
            {`Click button below to verify your email`}
          </p>
          <Button
            onClick={() => emailConfirm()}
            type="primary"
            style={{ marginTop: '1em' }}
            block
          >
            Confirm Email
          </Button>
        </>
      )}
      {isSuccess === false && (
        <>
          <ExclamationCircleOutlined
            style={{ fontSize: '64px', color: 'red' }}
          />
          <p style={{ fontWeight: 700, fontSize: 20, marginBottom: '1em' }}>
            Email unsuccess verify
          </p>
          <p style={{ fontWeight: 600, fontSize: 14, textAlign: 'center' }}>
            {`your email has been verified previously`}
          </p>
          <Button
            onClick={() => push('/')}
            type="primary"
            style={{ marginTop: '1em' }}
            block
          >
            Back to login
          </Button>
        </>
      )}

      {isSuccess === true && (
        <>
          <CheckOutlined style={{ fontSize: '64px', color: 'green' }} />
          <p style={{ fontWeight: 700, fontSize: 20, marginBottom: '1em' }}>
            Email success verify
          </p>
          <p style={{ fontWeight: 600, fontSize: 14, textAlign: 'center' }}>
            {`your email has been verified`}
          </p>
          <Button
            onClick={() => push('/')}
            type="primary"
            style={{ marginTop: '1em' }}
            block
          >
            Back to login
          </Button>
        </>
      )}
      <div></div>
    </div>
  );
}

export default Page;
