'use client';

import React from 'react';

import { useGetProduct } from './Hooks/useGetProduct';
// import { useAuthStore } from '@/store';
import { getLogin } from '@/utils/sessions';
import Loading from '../Loading';
import CardItemActive from '@/components/AllCard/CardItemActive';
import { Empty } from 'antd';

export default function ActiveProduct() {
  const { data, isLoading, isSuccess } = useGetProduct({
    token: getLogin().token ?? '',
    limit: 100,
    page: 1,
  });

  if (isLoading) {
    return <Loading />;
  }

  console.log(isLoading, isSuccess);

  if (!isLoading && isSuccess) {
    return (
      <div>
        {data.data?.map((item: any, idx: number) => (
          <CardItemActive item={item.package} key={idx} />
        ))}
        {data.data.length === 0 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Empty />
            <p>asd</p>
          </div>
        )}
      </div>
    );
  }

  return <></>;
}
