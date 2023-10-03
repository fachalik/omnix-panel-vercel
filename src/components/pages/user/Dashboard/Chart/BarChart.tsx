'use client';

import React from 'react';
import dynamic from 'next/dynamic';
const Bar: any = dynamic(
  () => import('@ant-design/charts').then(({ Bar }) => Bar),
  {
    ssr: false,
  }
);

function BarChart() {
  const data = [
    {
      tenant: 'Telkom',
      value: 1000000,
      type: 'SMS',
    },
    {
      tenant: 'Telkom',
      value: 1000000,
      type: 'Whatsapp',
    },
    {
      tenant: 'Telkom',
      value: 1000000,
      type: 'Email',
    },
    {
      tenant: 'Allobank',
      value: 1000000,
      type: 'Whatsapp',
    },
    {
      tenant: 'Allobank',
      value: 1000000,
      type: 'SMS',
    },
  ];
  const config = {
    data: data.reverse(),
    isStack: true,
    xField: 'value',
    yField: 'tenant',
    seriesField: 'type',
    label: {
      position: 'middle',
      layout: [
        {
          type: 'interval-adjust-position',
        },
        {
          type: 'interval-hide-overlap',
        },
        {
          type: 'adjust-color',
        },
      ],
    },
  };
  return <Bar {...config} />;
}

export default BarChart;
