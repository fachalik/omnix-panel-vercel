'use client';

import React from 'react';
import { MailOutlined } from '@ant-design/icons';
import { palette } from '@/theme/themeConfig';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';

function Page() {
  const { push } = useRouter();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <MailOutlined style={{ fontSize: '64px', color: palette.primary.main }} />
      <p style={{ fontWeight: 700, fontSize: 20, marginBottom: '1em' }}>
        Please verify your email
      </p>
      <p style={{ fontWeight: 600, fontSize: 14, textAlign: 'center' }}>
        {`We sent an email.`}
        <br />
        {`Please check your email.`}
      </p>
      <Button
        onClick={() => push('/')}
        type="primary"
        style={{ marginTop: '1em' }}
        block
      >
        Back to login
      </Button>
    </div>
  );
}

export default Page;
