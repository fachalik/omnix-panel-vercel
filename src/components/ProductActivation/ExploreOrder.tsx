'use client';

import React from 'react';

import { useGetOrder } from './Hooks/useGetOrder';
// import { useAuthStore } from '@/store';
import { getLogin } from '@/utils/sessions';
import Loading from '../Loading';
import CardItemOrder from '@/components/AllCard/CardItemOrder';

export default function ExploreOrder() {
  const { data, isLoading, isSuccess } = useGetOrder({
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
          <CardItemOrder item={item.package} key={idx} />
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
