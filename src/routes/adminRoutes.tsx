'use client';

import Home from '@/assets/icons/Home.svg';
import Channel from '@/assets/icons/Channel.svg';
import Planet from '@/assets/icons/Planet.svg';
import Windows from '@/assets/icons/Windows.svg';

const adminRoutes: any = [
  {
    key: '/dashboard',
    icon: Home,
    label: 'Home',
  },
  {
    key: '/manage-tenant',
    icon: Channel,
    label: 'Manage Tenant',
  },
];

export default adminRoutes;
