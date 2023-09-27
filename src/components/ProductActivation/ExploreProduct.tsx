'use client';

import React from 'react';

import { useGetPackage } from './Hooks/useGetPackage';
// import { useAuthStore } from '@/store';
import { getLogin } from '@/utils/sessions';
import Loading from '../Loading';
import CardItem from '@/components/AllCard/CardItem';

export default function ExploreProduct() {
  // const { auth } = useAuthStore((state) => state);
  const { data, isLoading, isSuccess } = useGetPackage({
    token: getLogin()?.token ?? '',
    limit: 100,
    page: 1,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && isSuccess) {
    return (
      <div>
        {data.data?.map((item: any, idx: number) => (
          <CardItem item={item} key={idx} />
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
