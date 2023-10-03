'use client';
import React from 'react';

import { Divider, Button, Breadcrumb, Form, Input, Timeline } from 'antd';
import Image from 'next/image';

// import { settingWhatsapp, generateOauth } from '@/service/whatsapp';
// import thirdPartyLogin from '@/lib/third-party-login';

export default function Page() {
  type FieldType = {
    setting_name?: string;
  };

  const onFinish = async (values: any) => {
    // const payload = {
    //   ...values,
    //   callback_url:
    //     'https://omnixpanel-api.libra.studio/api/v1/setting-whatsapp/callback',
    //   stream_url:
    //     'https://omnixpanel-api.libra.studio/api/v1/setting-whatsapp/stream',
    //   redirect_url: 'https://omnix-panel-vercel.vercel.app/',
    // };
    // const setWA: any = await settingWhatsapp(payload);
    // const GOAuth = {
    //   config_id: setWA.config_id,
    //   callback_url:
    //     'https://omnixpanel-api.libra.studio/api/v1/setting-whatsapp/callback',
    //   stream_url:
    //     'https://omnixpanel-api.libra.studio/api/v1/setting-whatsapp/stream',
    //   redirect_url: 'https://omnix-panel-vercel.vercel.app/',
    // };
    // const auth = await generateOauth(GOAuth);
    // if (auth) {
    //   const subscribe = await thirdPartyLogin(auth.subscribe_url);
    // }
  };

  return (
    <div>
      <Breadcrumb
        separator=">"
        style={{ marginBottom: '1em' }}
        items={[
          {
            href: '/reseller/channel-subscription',
            title: 'Channel Subscription',
          },
          {
            href: '/reseller/channel-subscription/instagram',
            title: 'Instagram',
          },
          {
            title: 'Subscribe',
          },
        ]}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 10,
          marginBottom: 10,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 10,
            marginBottom: 10,
          }}
        >
          <Image
            src={'/icons/instagram.svg'}
            alt="omnix-instagram"
            width={30}
            height={30}
          />
          <div style={{ fontSize: 20, fontWeight: 'bold' }}>Instagram</div>
          <div>by Omnix</div>
        </div>
      </div>
      <Divider />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Timeline>
          <Timeline.Item>
            <div>
              <p style={{ fontSize: 14, fontWeight: 600 }}>Step 1</p>
              <p style={{ fontSize: 16, fontWeight: 700 }}>
                Masukkan setting name untuk instgram anda
              </p>
              <div
                style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 3 }}
              >
                Setting Name
              </div>
              <Form.Item<FieldType>
                style={{ marginTop: '1em' }}
                name="setting_name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your setting name!',
                  },
                ]}
              >
                <Input placeholder="please input your setting name" />
              </Form.Item>
            </div>
          </Timeline.Item>
          <Timeline.Item>
            <div>
              <p style={{ fontSize: 14, fontWeight: 600 }}>Step 2</p>
              <p style={{ fontSize: 16, fontWeight: 700 }}>
                Hubungkan akun bisnis Instagram Anda
              </p>
              <p style={{ fontSize: 14, fontWeight: 400 }}>
                Hubungkan akun bisnis Instagram Anda
              </p>
              <Form.Item style={{ marginTop: '1em' }}>
                <Button block type="primary" htmlType="submit">
                  Subscription Instagram by Omnix
                </Button>
              </Form.Item>
            </div>
          </Timeline.Item>
        </Timeline>
      </Form>
    </div>
  );
}
