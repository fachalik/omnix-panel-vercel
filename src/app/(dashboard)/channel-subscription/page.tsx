'use client';

import React from 'react';

import { Card, Tabs } from 'antd';

import YourChannel from '@/components/YourChannel';

export default function Page() {
  return (
    <div>
      <Card>
        <Tabs
          items={[
            {
              label: 'Your Channel',
              key: 'channel',
              children: <YourChannel />,
            },
            {
              label: 'Explore Channel',
              key: 'explore',
              children: <p>Hello World</p>,
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
