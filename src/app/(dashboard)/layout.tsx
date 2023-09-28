'use client';

import React from 'react';

import Sidebar from '@Component/layout/dashboard/Sidebar';
import Navbar from '@Component/layout/dashboard/Navbar';
import Content from '@Component/layout/dashboard/Content';
import Loading from '@/components/Loading';
import Image from 'next/image';

import { Layout, Modal, Button } from 'antd';

import useCheckIsLogin from '@/hooks/useCheckIsLogin';
import CheckPersistor from '@/store/check';
import { useModalLogoutstore } from '@/store';

interface IDashboardLayout {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: IDashboardLayout) {
  const { isLoading, isLogin } = useCheckIsLogin();
  const { isModalOpen, handleCancel, handleOk } = useModalLogoutstore(
    (state) => state
  );

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && isLogin) {
    return (
      <div style={{ display: 'flex', minHeight: '100%', overflow: 'hidden' }}>
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
