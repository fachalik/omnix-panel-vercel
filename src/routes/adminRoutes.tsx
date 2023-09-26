'use client';
import { VideoCameraOutlined, HomeOutlined } from '@ant-design/icons';

const adminRoutes: any = [
  {
    key: '/dashboard',
    icon: <HomeOutlined />,
    label: 'Home',
  },
  {
    key: '/manage-tenant',
    icon: <VideoCameraOutlined />,
    label: 'Manage Tenant',
  },
];

export default adminRoutes;
