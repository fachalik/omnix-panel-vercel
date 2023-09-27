'use client';
import React from 'react';
import Image from 'next/image';
import { Card, Button } from 'antd';
import { useRouter } from 'next/navigation';

function Step3() {
  const { push } = useRouter();

  return (
    <div style={{ marginTop: '5em' }}>
      <Card style={{ width: '41em', padding: '2em' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src={'/image/moneyState.png'}
            alt="omnix-white"
            width={300}
            height={300}
            style={{
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top',
            }}
          />
          <p style={{ textAlign: 'center', fontSize: 14, fontWeight: 600 }}>
            Waiting for payment! Please complete the
            <br /> payment to immediately use the product
          </p>
        </div>
      </Card>
      <Button
        style={{ marginTop: '1.5em' }}
        block
        type="primary"
        onClick={() => push('product-activation')}
      >
        Back to Product Activation
      </Button>
    </div>
  );
}

export default Step3;
