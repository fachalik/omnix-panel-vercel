'use client';

import { Button } from 'antd';
import { useRouter } from 'next/navigation';

import FormForgetPassword from '@/components/ForgetPassword/Form/FormForgetPassword';

export default function Page() {
  const { push } = useRouter();
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
          onClick={() => push('/')}
        >
          Kembali ke halamanm login
        </Button>
      </div>
    </div>
  );
}
