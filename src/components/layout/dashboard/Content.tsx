'use client';

import React from 'react';
import { Layout, theme } from 'antd';
import { relative } from 'path';
import { useOtherStore } from '@/store';
import useWindowSize from '@/hooks/useWindowSize';

interface IContent {
  children: React.ReactNode;
}

function Content({ children }: IContent) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const {
    other: { sidebarCollapse },
  } = useOtherStore((state) => state);

  const { width } = useWindowSize();

  return (
    <Layout.Content
      style={{
        // width: width - 250,
        margin: '24px 16px',
        padding: 24,
        minHeight: '100%',
        background: colorBgContainer,
        // position: 'fixed',
        // overflowY: 'scroll',
        // top: 60,
        // right: 0,
        // bottom: 0,
      }}
    >
      {children}
    </Layout.Content>
  );
}

export default Content;
