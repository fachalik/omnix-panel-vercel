'use client';

import React from 'react';

import { Row, Col, Card, Avatar, Button } from 'antd';

import { getLogin } from '@/utils/sessions';
import { useRouter } from 'next/navigation';

export default function ExploreProduct() {
  // console.log('test', getLogin());
  const { push } = useRouter();
  return (
    <div>
      <div style={{ marginBottom: '1em' }}>
        <Button>Platform</Button>
        <Button style={{ marginLeft: '1em' }}>Non Platform</Button>
      </div>
      <Row gutter={[16, 16]}>
        {Array(5)
          .fill(2)
          .map((_, idx) => (
            <Col span={8} key={idx}>
              <Card>
                <Avatar
                  style={{ marginBottom: '1em' }}
                  src={'/icons/logo1.svg'}
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontSize: 14, fontWeight: 600 }}>Omnix Service</p>
                  <p style={{ fontSize: 14, fontWeight: 400 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Button
                    style={{ marginTop: '1em' }}
                    type="primary"
                    onClick={() => push('active-product')}
                  >
                    Active now
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}
