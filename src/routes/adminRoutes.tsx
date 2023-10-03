'use client';

import Home from '@/assets/icons/Home.svg';
import Channel from '@/assets/icons/Channel.svg';
import Planet from '@/assets/icons/Planet.svg';
import Windows from '@/assets/icons/Windows.svg';
import Dashboard from '@/assets/icons/Dashboard.svg';

const path = '/admin';

const adminRoutes: any = [
  {
    key: `${path}/home`,
    icon: Home,
    label: 'Home',
  },
  {
    key: `${path}/manage-tenant`,
    icon: Channel,
    label: 'Manage Tenant',
  },
];

export default adminRoutes;
