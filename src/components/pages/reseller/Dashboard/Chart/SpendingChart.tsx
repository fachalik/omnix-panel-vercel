'use client';

import React from 'react';
import dynamic from 'next/dynamic';
const Line = dynamic(
  () => import('@ant-design/charts').then(({ Line }) => Line),
  { ssr: false }
);

function SpendingChart() {
  const [data, setData] = React.useState([]);

  // React.useEffect(() => {
  //   asyncFetch();x
  // }, []);

  // const asyncFetch = () => {
  //   fetch(
  //     'https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json'
  //   )
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => {
  //       console.log('fetch data failed', error);
  //     });
  // };
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    xAxis: {
      type: 'time',
    },
    yAxis: {
      label: {
        formatter: (v: any) =>
          `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
  };

  return <Line {...config} />;
}

export default SpendingChart;
