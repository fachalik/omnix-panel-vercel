'use client';

import React from 'react';

import Sidebar from '@Component/layout/dashboard/Sidebar';
import Navbar from '@Component/layout/dashboard/Navbar';
import Content from '@Component/layout/dashboard/Content';
import Loading from '@/components/Loading';

import { Layout } from 'antd';

import useCheckIsLogin from '@/hooks/useCheckIsLogin';

interface IDashboardLayout {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: IDashboardLayout) {
  const { isLoading, isLogin } = useCheckIsLogin();

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && isLogin) {
    return (
      <div style={{ display: 'flex', minHeight: '100%', overflow: 'hidden' }}>
        <Layout hasSider style={{ overflow: 'hidden' }}>
          <Sidebar />
          <Layout style={{ overflow: 'hidden', marginLeft: 60 }}>
            <Navbar />
            <div
              className="site-layout"
              style={{ overflow: 'hidden', marginTop: 60 }}
            >
              <Content>{children}</Content>
            </div>
          </Layout>
        </Layout>
      </div>
    );
  }

  return <></>;
}
