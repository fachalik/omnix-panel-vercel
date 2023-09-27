'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { LeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import DetailOrder from '@/components/DetailOrder';
import FormDetailOrder from '@/components/DetailOrder/Form/FormDetailOrder';

function Page() {
  const params: any = useParams();
  const { push } = useRouter();
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'start',
          flexDirection: 'column',
        }}
      >
        <Button type="primary" onClick={() => push('/product-activation')}>
          <LeftOutlined />
          Back
        </Button>
        <DetailOrder id_product={params.id} />
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FormDetailOrder id={params.id} />
        </div>
      </div>
    </div>
  );
}

export default Page;
