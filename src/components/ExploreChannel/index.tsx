'use client';

import React from 'react';
import { Input, Button, Row, Col, Card, Avatar } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default function ExploreChannel() {
  const [search, setSearch] = React.useState<string>('');
  const test: any = {
    image: '/icons/logo1.svg',
    name: 'Omnix Service',
    descrption:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Campaign..."
          style={{ width: '30em' }}
        />
        <Button
          type="primary"
          icon={<SearchOutlined />}
          style={{ marginLeft: '1em' }}
        >
          Search
        </Button>
      </div>
      <div style={{ marginTop: '1.5em', marginBottom: '1.5em' }}>
        <p style={{ fontSize: 14, fontWeight: 600, marginBottom: '1em' }}>
          Platform
        </p>
        <Row gutter={[16, 16]}>
          {Array(5)
            .fill(2)
            .map((_, key) => (
              <Col span={8} key={key}>
                <Card>
                  <Avatar
                    style={{ marginBottom: '1em' }}
                    src={'/icons/logo2.svg'}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p style={{ fontSize: 14, fontWeight: 600 }}>
                      Omnix Service
                    </p>
                    <p style={{ fontSize: 14, fontWeight: 400 }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Button style={{ marginTop: '1em' }} type="primary">
                      Active now
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
      <div style={{ marginTop: '1.5em', marginBottom: '1.5em' }}>
        <p style={{ fontSize: 14, fontWeight: 600, marginBottom: '1em' }}>
          Non Platform
        </p>
        <Row gutter={[16, 16]}>
          {Array(6)
            .fill(2)
            .map((_, key) => (
              <Col span={8} key={key}>
                <Card>
                  <Avatar
                    style={{ marginBottom: '1em' }}
                    src={'/icons/logo1.svg'}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p style={{ fontSize: 14, fontWeight: 600 }}>
                      Omnix Service
                    </p>
                    <p style={{ fontSize: 14, fontWeight: 400 }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Button style={{ marginTop: '1em' }} type="primary">
                      Active now
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}
