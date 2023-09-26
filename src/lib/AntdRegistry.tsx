'use client';

import React from 'react';
import { ConfigProvider } from 'antd';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import type Entity from '@ant-design/cssinjs/es/Cache';
import { useServerInsertedHTML } from 'next/navigation';

import { theme } from '@/theme/themeConfig';

export const StyledComponentsRegistry = ({
  children,
}: React.PropsWithChildren) => {
  const cache = React.useMemo<Entity>(() => createCache(), []);
  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    />
  ));
  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};
export const AntdProvider = ({ children }: { children: React.ReactNode }) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};
