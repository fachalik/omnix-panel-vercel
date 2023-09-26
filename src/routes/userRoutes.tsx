'use client';
import {
  UploadOutlined,
  VideoCameraOutlined,
  HomeOutlined,
} from '@ant-design/icons';

const userRoutes: any = [
  {
    key: '/home',
    icon: <HomeOutlined />,
    label: 'Home',
  },
  {
    key: '/channel-subscription',
    icon: <VideoCameraOutlined />,
    label: 'Channel Subscription',
  },
  {
    key: '/product-activation',
    icon: <UploadOutlined />,
    label: 'Product Activation',
  },
];

export default userRoutes;
