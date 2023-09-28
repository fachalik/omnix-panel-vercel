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
    .split('/')[1]
    .split('-')
    .join(' ')
    .toUpperCase();

  return (
    <Layout.Header
      style={{
        padding: 0,
        background: colorBgContainer,
        zIndex: 99,
        marginLeft: 65,
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0,
      }}
    >
      <p style={{ marginLeft: '1em', fontSize: 16, fontWeight: 600 }}>
        {actulPathname}
      </p>
      {/* <Button
        type="text"
        icon={sidebarCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setSidebarCollapse()}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      /> */}
    </Layout.Header>
  );
}
