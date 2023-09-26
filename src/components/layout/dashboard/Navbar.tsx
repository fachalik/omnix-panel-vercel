'use client';

import React from 'react';

import Sidebar from '@Component/layout/dashboard/Sidebar';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Button, theme } from 'antd';

import { useOtherStore } from '@/store';

export default function Navbar() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const {
    other: { sidebarCollapse },
    setSidebarCollapse,
  } = useOtherStore((state) => state);

  return (
    <Layout.Header style={{ padding: 0, background: colorBgContainer }}>
      <Button
        type="text"
        icon={sidebarCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setSidebarCollapse()}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
    </Layout.Header>
  );
}
