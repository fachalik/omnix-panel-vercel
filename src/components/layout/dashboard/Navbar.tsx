'use client';

import React from 'react';

import Sidebar from '@Component/layout/dashboard/Sidebar';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Button, theme } from 'antd';
import { usePathname } from 'next/navigation';

import { useOtherStore } from '@/store';

export default function Navbar() {
  const pathname = usePathname();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const {
    other: { sidebarCollapse },
    setSidebarCollapse,
  } = useOtherStore((state) => state);

  const actulPathname = pathname
    .split('/')[2]
    .split('-')
    .join(' ')
    .toUpperCase();

  return (
    <Layout.Header
      style={{
        padding: 0,
        position: 'sticky',
        top: 0,
        zIndex: 2,
        background: '#fff',
        overflowY: 'hidden',
        alignItems: 'center',
        display: 'flex',
        width: '100%',
      }}
    >
      <div
        style={{
          marginLeft: '1em',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Button
          type="text"
          icon={sidebarCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setSidebarCollapse()}
        />
        <p style={{ marginLeft: '1em', fontSize: 16, fontWeight: 600 }}>
          {actulPathname}
        </p>
      </div>
    </Layout.Header>
  );
}
