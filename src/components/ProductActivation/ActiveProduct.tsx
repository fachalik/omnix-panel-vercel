'use client';

import React from 'react';

import { useGetProduct } from './Hooks/useGetProduct';
// import { useAuthStore } from '@/store';
import { getLogin } from '@/utils/sessions';
import Loading from '../Loading';
import CardItemActive from '@/components/AllCard/CardItemActive';

export default function ActiveProduct() {
  // const { auth } = useAuthStore((state) => state);
  const { data, isLoading, isSuccess } = useGetProduct({
    token: getLogin().token ?? '',
    limit: 100,
    page: 1,
  });

  console.log('asd', getLogin().token);

  if (isLoading) {
    return <Loading />;
  }

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
            <p style={{ fontWeight: 400, fontSize: 16 }}>No Data</p>
          </div>
        )}
      </div>
    );
  }

  return <></>;
}
