'use client';

import Home from '@/assets/icons/Home.svg';
import Channel from '@/assets/icons/Channel.svg';
import Planet from '@/assets/icons/Planet.svg';
import Windows from '@/assets/icons/Windows.svg';

const userRoutes: any = [
  {
    key: '/home',
    icon: Home,
    label: 'Home',
  },
  {
    key: '/channel-subscription',
    icon: Channel,
    label: 'Channel Subscription',
  },
  {
    key: '/product-activation',
    icon: Planet,
    label: 'Product Activation',
  },
];

export default userRoutes;
