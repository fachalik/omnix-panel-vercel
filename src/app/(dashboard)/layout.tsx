'use client';

import React from 'react';

// import Sidebar from '@Component/layout/dashboard/Sidebar';
import Navbar from '@Component/layout/dashboard/Navbar';
import Content from '@Component/layout/dashboard/Content';
import Loading from '@/components/Loading';
import Image from 'next/image';

import { Layout, Modal, Button } from 'antd';

import useCheckIsLogin from '@/hooks/useCheckIsLogin';
import CheckPersistor from '@/store/check';
import { useModalLogoutstore, useOtherStore } from '@/store';
import useWindowSize from '@/hooks/useWindowSize';

interface IDashboardLayout {
  children: React.ReactNode;
}

import dynamic from 'next/dynamic';

const Sidebar = dynamic(() => import('@Component/layout/dashboard/Sidebar'), {
  ssr: false,
});

export default function DashboardLayout({ children }: IDashboardLayout) {
  const { isLoading, isLogin } = useCheckIsLogin();
  const { isModalOpen, handleOk } = useModalLogoutstore((state) => state);
  const {
    other: { sidebarCollapse },
  } = useOtherStore((state) => state);
  const { width } = useWindowSize();

  if (isLoading) {
    return <Loading />;
  }

  if (isLoading && !isLogin) {
    return;
  }

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <CheckPersistor />
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        footer={(_) => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button block type="primary" onClick={() => handleOk()}>
              Refresh
            </Button>
          </div>
        )}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Image
            src={'/icons/illustrationlogout.svg'}
            width={200}
            height={200}
            alt={'illustration-logout'}
          />
          <p style={{ fontSize: 24, fontWeight: 700, marginBottom: '0.5em' }}>
            Your session has expired
          </p>
          <p style={{ textAlign: 'center', marginBottom: '1em' }}>
            {`Please refresh the page. Don't worry, we kept all of `}
            <br />
            {`you filters and breakdown in place.`}
          </p>
        </div>
      </Modal>
      <Layout hasSider>
        <Sidebar />
        <Layout>
          <Navbar />
          <div
            style={{
              width: width - (sidebarCollapse ? 64 : 200),
              position: 'fixed',
              overflowY: 'scroll',
              top: 60,
              right: 0,
              bottom: 0,
            }}
          >
            <Content>{children}</Content>
          </div>
        </Layout>
      </Layout>
    </div>
  );
}
