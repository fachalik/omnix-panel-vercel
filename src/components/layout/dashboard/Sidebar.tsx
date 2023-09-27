'use client';

import React from 'react';
import Image from 'next/image';

import { adminRoutes, userRoutes } from '@/routes';

import { LogoutOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Layout, Menu, Avatar, Dropdown, Modal, Badge, Tooltip } from 'antd';
import type { MenuProps } from 'antd';
import { useRouter, usePathname } from 'next/navigation';

import { palette } from '@/theme/themeConfig';
import { useOtherStore, useAuthStore } from '@/store';
import useIsMobile from '@/hooks/useIsMobile';

//**--------------------------------------------------------------

export default function Sidebar() {
  const pathname = usePathname();

  const { push } = useRouter();
  const { Sider } = Layout;
  const {
    other: { sidebarCollapse },
  } = useOtherStore((state) => state);

  const { user, logoutAuth } = useAuthStore((state) => state);

  const isMobile = useIsMobile();

  const route = () => {
    switch (user?.role.name.toLocaleLowerCase()) {
      case 'admin':
        return adminRoutes;

      case 'user':
        return userRoutes;
      default:
        return [];
    }
  };

  const items: MenuProps['items'] = [
    {
      key: '/logout',
      icon: <LogoutOutlined />,
      label: (
        <p
          onClick={() => {
            Modal.confirm({
              title: 'Logout',
              icon: <ExclamationCircleOutlined />,
              content: (
                <div style={{ borderTop: '1px solid #d4d4d4' }}>
                  <div style={{ marginTop: 5 }}>Are you sure want logout?</div>
                </div>
              ),
              okText: 'Yes',
              cancelText: 'No',
              okButtonProps: {
                type: 'primary',
                style: {
                  background: palette.primary.main,
                  color: '#fff',
                  float: 'left',
                  border: '1px solid ' + palette.primary.main,
                },
              },
              cancelButtonProps: {
                type: 'default',
                style: {
                  color: palette.primary.main,
                  float: 'left',
                  marginLeft: '34px',
                  border: '1px solid ' + palette.primary.main,
                },
              },
              onOk: async () => {
                await logoutAuth();
                // logout().then((res) => {
                //   logoutAuth();
                // });
              },
            });
          }}
        >
          Logout
        </p>
      ),

      title: '',
      style: {
        fontSize: 12,
        borderTop: '1px solid #f0f0f0',
      },
    },
  ];

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={sidebarCollapse}
      collapsedWidth={isMobile ? 0 : '4rem'}
      breakpoint="lg"
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        background: palette.primary.dark,
      }}
      // style={{
      //   height: '100vh',
      //   overflow: 'hidden',
      //   background: palette.primary.dark,
      //   position: 'relative',
      // }}
      theme="dark"
      className="sidebar"
    >
      <div
        style={{
          height: 50,
          backgroundColor: palette.primary.light,
        }}
      >
        <Image
          src={
            sidebarCollapse ? '/omnix-icon-white.png' : '/omnix_white_v2.png'
          }
          alt="Vercel Logo"
          width={100}
          height={24}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            margin: 'auto',
            borderRadius: 10,
            backgroundColor: palette.primary.light,
            padding: 5,
          }}
          priority
        />
      </div>

      <Menu
        style={{
          padding: 5,
          marginTop: 20,
          overflow: 'hidden',
          height: window.innerHeight - 150,
          position: 'relative',
          backgroundColor: palette.primary.dark,
        }}
        theme="dark"
        mode="inline"
        onClick={(e) => {
          push(e.key);
        }}
        defaultSelectedKeys={[pathname]}
        defaultOpenKeys={[pathname]}
        selectedKeys={[pathname]}
        items={(user?.role.name.toLocaleLowerCase() === 'admin'
          ? adminRoutes
          : userRoutes
        ).map((val, idx) => {
          return {
            key: val.key,
            icon: (
              <Tooltip placement="left">
                <Image
                  src={val.icon}
                  style={{
                    width: '18px',
                    height: '18px',
                    backgroundColor: val[idx] ? '#eeeeee' : '',
                  }}
                />
                {/* <img
                  src={`${window.ASSET_URL}/images/${
                    val.name + '_white'
                  }.svg?r=${new Date().getMilliseconds()}`}
                  style={{
                    width: '18px',
                    height: '18px',
                    backgroundColor: val[idx] ? '#eeeeee' : '',
                  }}
                  alt="Menu"
                /> */}
              </Tooltip>
            ),
            label: val.name,
          };
        })}
      />
      <Dropdown menu={{ items }} placement="topRight" trigger={['click']}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Avatar
            style={{
              background: palette.primary.main,
              color: '#fff',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
            size={'large'}
          >
            {user?.firstName.charAt(0)}
          </Avatar>
        </div>
      </Dropdown>
    </Sider>
  );
}
