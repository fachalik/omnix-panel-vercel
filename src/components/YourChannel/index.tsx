'use client';
import React from 'react';

import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Card, Row, Col, Tabs, Avatar, Tag } from 'antd';

export default function YourChannel() {
  return (
    <Card
      bodyStyle={{
        padding: 20,
        boxShadow: '0 0 2px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.14)',
      }}
      style={{
        width: 'calc(100% - 20px)',
        margin: 10,
        alignItems: 'center',
        border: 'unset',
      }}
    >
      <Row
        gutter={[12, 12]}
        style={{
          width: '100%',

          alignItems: 'center',
        }}
      >
        <Col xs={24} sm={24} md={24} lg={1} xl={1}>
          <Avatar
            size={'large'}
            // src={`${
            //   window.ASSET_URL
            // }/images/whatsapp_color.svg?time=${new Date().getMilliseconds()}`}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={7} xl={7}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: 5,
            }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: '#2D2D2D',
              }}
            >
              Whatsapp
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={3} xl={3}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: 5,
            }}
          >
            <div
              style={{
                color: '#18181B',
                fontSize: 12,
                fontWeight: 'bold',
              }}
            >
              Channel Name
            </div>
            <div
              style={{
                fontSize: 12,
                color: '#71717A',
              }}
            >
              OMNIX Official
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={3} xl={3}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: 5,
            }}
          >
            <div
              style={{
                color: '#18181B',
                fontSize: 12,
                fontWeight: 'bold',
              }}
            >
              Account
            </div>
            <div
              style={{
                fontSize: 12,
                color: '#71717A',
              }}
            >
              3 Account
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={3} xl={3}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: 5,
            }}
          >
            <div
              style={{
                color: '#18181B',
                fontSize: 12,
                fontWeight: 'bold',
              }}
            >
              Tipe
            </div>
            <div
              style={{
                fontSize: 12,
                color: '#71717A',
              }}
            >
              Platform
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={3} xl={3}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: 5,
            }}
          >
            <div
              style={{
                color: '#18181B',
                fontSize: 12,
                fontWeight: 'bold',
              }}
            >
              Tanggal
            </div>
            <div
              style={{
                fontSize: 12,
                color: '#71717A',
              }}
            >
              Jan 17,2022
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={2} xl={2}>
          <Tag color={'success'}>Subscribed</Tag>
        </Col>
        <Col xs={24} sm={24} md={24} lg={2} xl={2}>
          <Button
            block
            type="text"
            icon={<EllipsisOutlined style={{ fontSize: 20 }} />}
          ></Button>
        </Col>
      </Row>
    </Card>
  );
}
