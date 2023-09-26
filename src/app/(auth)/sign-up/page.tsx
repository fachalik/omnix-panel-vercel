'use client';
import React from 'react';

import { GoogleOutlined, UserOutlined, BankOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { Button, Divider, Card, Row, Col } from 'antd';

import FormSignUpUser from '@/components/SingUp/Form/FormSignUpUser';
import FormSignUpReseller from '@/components/SingUp/Form/FormSignUpReseller';
// import thirdPartyLogin from '@/lib/third-party-login';
import { palette } from '@/theme/themeConfig';

export default function Home() {
  const { push } = useRouter();
  const [user, setUser] = React.useState<string>('user');
  const googleLogin = async () => {
    push(
      `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&scope=openid%20email%20profile&redirect_uri=http://localhost:3000/google&service=lso&o2v=2&theme=glif&flowName=GeneralOAuthFlow`
    );
    // const req: any = await thirdPartyLogin(
    //   `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&scope=openid%20email%20profile&redirect_uri=http://localhost:3000/google&service=lso&o2v=2&theme=glif&flowName=GeneralOAuthFlow`
    // )!;
    // console.log(req);
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
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
        Create your free account
      </p>
      <p
        style={{
          fontSize: 12,
          fontWeight: 'bold',
          marginBottom: 3,
        }}
      >
        Register as
      </p>
      <Row gutter={[8, 16]}>
        <Col span={12}>
          <Card
            onClick={() => setUser('user')}
            style={{
              cursor: 'pointer',
              borderColor: user === 'user' ? palette.primary.main : '',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <UserOutlined
                style={{
                  fontSize: 22,
                  color: user === 'user' ? palette.primary.main : '',
                }}
              />
              <p>Regular</p>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            onClick={() => setUser('reseller')}
            style={{
              cursor: 'pointer',
              borderColor: user === 'reseller' ? palette.primary.main : '',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <BankOutlined
                style={{
                  fontSize: 22,
                  color: user === 'reseller' ? palette.primary.main : '',
                }}
              />
              <p>Reseller</p>
            </div>
          </Card>
        </Col>
      </Row>

      {user === 'user' && <FormSignUpUser />}
      {user === 'reseller' && <FormSignUpReseller />}

      <Divider plain>Atau melalui</Divider>
      <Button onClick={googleLogin} block>
        <GoogleOutlined />
        Sign up with google
      </Button>
      <div
        style={{
          marginTop: '1em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p style={{ marginRight: '1em' }}>Sudah punya akun?</p>
        <Button
          style={{
            float: 'left',
            fontSize: 12,
            textDecoration: 'underline',
          }}
          onClick={() => push('/')}
          // href="/"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}
