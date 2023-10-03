'use client';

import React from 'react';

import { Card, Tabs } from 'antd';
import ResellerTenant from '@/components/pages/reseller/ResellerTenant';
import ResellerProduct from '@/components/pages/reseller/ResellerProduct';

export default function Page() {
  const dataChannel = [
    {
      icon: '/icons/whatsapp.svg',
      package_name: 'Whatsapp',
      package_type: 'Platform',
      channelName: 'OMNIX Official',
      totalAccount: 2,
      createdAt: new Date(),
    },
    {
      icon: '/icons/facebook.svg',
      package_name: 'Facebook',
      package_type: 'Platform',
      channelName: 'OMNIX Official',
      totalAccount: 2,
      createdAt: new Date(),
    },
    {
      icon: '/icons/instagram.svg',
      package_name: 'Instagram',
      package_type: 'Platform',
      channelName: 'OMNIX Official',
      totalAccount: 5,
      createdAt: new Date(),
    },
  ];

  return (
    <div>
      <Card>
        <Tabs
          items={[
            {
              label: 'Your Tenant',
              key: 'yout-tenant',
              children: <ResellerTenant />,
            },
            {
              label: 'Your Product',
              key: 'yout-product',
              children: <ResellerProduct />,
            },
          ]}
          tabBarStyle={{
            marginLeft: 10,
            marginRight: 10,
          }}
        ></Tabs>
      </Card>
    </div>
  );
}
