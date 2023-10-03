'use client';

import Home from '@/assets/icons/Home.svg';
import Channel from '@/assets/icons/Channel.svg';
import Planet from '@/assets/icons/Planet.svg';
import Windows from '@/assets/icons/Windows.svg';

const path = '/reseller';

const resellerRoutes: any = [
  {
    key: `${path}/home`,
    icon: Home,
    label: 'Home',
  },
  {
    key: `${path}/dashboard`,
    icon: Channel,
    label: 'Dashboard',
  },
  // {
  //   key: `${path}/product-activation`,
  //   icon: Planet,
  //   label: 'Product Activation',
  // },
  {
    key: `${path}/manage-tenant`,
    icon: Windows,
    label: 'Manage Tenant',
  },
];

export default resellerRoutes;
