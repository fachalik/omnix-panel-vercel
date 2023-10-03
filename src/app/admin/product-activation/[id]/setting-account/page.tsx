'use client';
// const {  } = window.AntdIcon;
import {
  Popconfirm,
  Button,
  Card,
  Breadcrumb,
  Avatar,
  Divider,
  Table,
} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export default function Page() {
  const columns: any = () => [
    {
      title: 'Account Name',
      dataIndex: 'account',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
    },
    {
      title: 'WA Business ID',
      dataIndex: 'waba_id',
    },
    {
      title: '#',
      width: '10%',
      align: 'center',
      dataIndex: 'action',
      render: (text: any, record: any) => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
            }}
          >
            <Popconfirm
              placement="left"
              title="Are you sure want delete?"
              onConfirm={() => {
                console.log('YES DELETED!');
              }}
              okText="Yes"
              cancelText="No"
            >
              <Button
                type="text"
                danger
                key="/delete"
                icon={<DeleteOutlined />}
              ></Button>
            </Popconfirm>
          </div>
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      account: 'Whatsapp OMNIX',
      phone: '+628190242055',
      waba_id: 'Whatsapp OMNIX',
    },
    {
      id: 2,
      account: 'Whatsapp OMNIX',
      phone: '+628190242055',
      waba_id: 'Whatsapp OMNIX',
    },
    {
      id: 3,
      account: 'Whatsapp OMNIX',
      phone: '+628190242055',
      waba_id: 'Whatsapp OMNIX',
    },
  ];
  return (
    <Card>
      <Breadcrumb
        separator=""
        items={[
          {
            href: '',
            title: 'Product Activation',
          },
          {
            type: 'separator',
            separator: '>',
          },
          {
            href: '',
            title: 'OMNIX Marketer',
          },
          {
            type: 'separator',
            separator: '>',
          },
          {
            title: 'Setting Account',
          },
        ]}
      />
      <div
        style={{
          display: 'flex',
          marginTop: 20,
          alignItems: 'center',
          gap: 10,
        }}
      >
        <Avatar size={'large'} src={`/icons/whatsapp.svg`} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 17, fontWeight: 'bold', color: '#2d2d2d' }}>
            Whatsapp
          </div>
          <div style={{ fontSize: 12, color: '#595959' }}>
            Select which channel account you will use
          </div>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <Button type="primary">Add Account</Button>
        </div>
      </div>
      <Divider />
      <Table
        columns={columns()}
        rowKey={(record) => record.id}
        dataSource={data}
        pagination={false}
      />
    </Card>
  );
}
