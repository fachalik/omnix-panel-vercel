'use client';

import Home from '@/assets/icons/Home.svg';
import Channel from '@/assets/icons/Channel.svg';
import Planet from '@/assets/icons/Planet.svg';

const path = '/user';

const userRoutes: any = [
  {
    key: `${path}/home`,
    icon: Home,
    label: 'Home',
  },
  {
    key: `${path}/channel-subscription`,
    icon: Channel,
    label: 'Channel Subscription',
  },
  {
    key: `${path}/product-activation`,
    icon: Planet,
    label: 'Product Activation',
  },
];

export default userRoutes;
