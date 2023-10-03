'use client';

import dynamic from 'next/dynamic';

const HomeComponent = dynamic(
  () => import('@/components/pages/reseller/HomeComponent'),
  {
    ssr: false,
  }
);

export default function Page() {
  return <HomeComponent />;
}
