'use client';

import React from 'react';
import { Layout, theme } from 'antd';

interface IContent {
  children: React.ReactNode;
}

function Content({ children }: IContent) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout.Content
      style={{
        marginTop: 100,
        margin: '24px 16px',
        padding: 24,
        minHeight: '100vh',
        background: colorBgContainer,
        overflow: 'auto',
      }}
    >
      {children}
    </Layout.Content>
  );
}

export default Content;
