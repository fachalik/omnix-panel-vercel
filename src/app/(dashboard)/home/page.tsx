'use client';

import React from 'react';
import Image from 'next/image';

import { useRouter } from 'next/navigation';

import { ArrowRightOutlined } from '@ant-design/icons';

import { Button, Card, Row, Col } from 'antd';
import { useAuthStore } from '@/store';

export default function Page() {
  const { push } = useRouter();
  const { user } = useAuthStore((state) => state);
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
        <span style={{ fontSize: 20, fontWeight: 'bold' }}>
          {`Welcome to Omnix, ${user?.firstName}`}
        </span>
        <div style={{ marginLeft: 'auto' }}>
          <Button type="primary" ghost>
            Contact Sales
          </Button>
        </div>
      </div>
      <Card bodyStyle={{ padding: 60 }} style={{ marginBottom: 20 }}>
        <Row gutter={[12, 12]} align="middle">
          <Col xs={24} sm={24} md={24} lg={10}>
            <div style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
              Get Started with Channels
            </div>
            <div style={{ fontSize: 14, color: '#5B7083', marginBottom: 20 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Button type="default">Read Documentation</Button>
              <Button
                type="primary"
                onClick={() => push('/channel-subscription')}
              >
                Explore Channel <ArrowRightOutlined />
              </Button>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={14}>
            <div style={{ display: 'flex' }}>
              <Image
                src={'/image/home-illustration-1.svg'}
                alt="home-illustration-1"
                width={200}
                height={200}
                style={{ margin: 'auto' }}
              />
            </div>
          </Col>
        </Row>
      </Card>
      <Card bodyStyle={{ padding: 60 }} style={{ marginBottom: 20 }}>
        <Row gutter={[12, 12]} align="middle">
          <Col xs={24} sm={24} md={24} lg={10}>
            <div style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
              Activate Product
            </div>
            <div style={{ fontSize: 14, color: '#5B7083', marginBottom: 20 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Button type="default">Read Documentation</Button>
              <Button
                type="primary"
                onClick={() => push('/product-activation')}
              >
                Explore Product <ArrowRightOutlined />
              </Button>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={14}>
            <div style={{ display: 'flex' }}>
              <Image
                src={'/image/home-illustration-2.svg'}
                alt="home-illustration-2"
                width={200}
                height={200}
                style={{ margin: 'auto' }}
              />
              {/* <img src={illustration} style={{ margin: 'auto' }} /> */}
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
