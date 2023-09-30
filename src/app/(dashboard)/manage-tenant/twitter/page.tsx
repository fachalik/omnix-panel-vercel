'use client';
import React from 'react';

import { Divider, Button, Breadcrumb } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Page() {
  const { push } = useRouter();
  return (
    <div>
      <Breadcrumb
        separator=">"
        style={{ marginBottom: '1em' }}
        items={[
          {
            href: '/channel-subscription',
            title: 'Channel Subscription',
          },
          {
            title: 'Twitter',
          },
        ]}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 10,
          marginBottom: 10,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 10,
            marginBottom: 10,
          }}
        >
          <Image
            src={'/icons/twitter.svg'}
            alt="omnix-twitter"
            width={30}
            height={30}
          />
          <div style={{ fontSize: 20, fontWeight: 'bold' }}>
            Twitter Messaging
          </div>
          <div>by Omnix</div>
        </div>
        <Button
          type="primary"
          onClick={() => push('/channel-subscription/twitter/subscribe')}
        >
          Subscription Twitter
        </Button>
      </div>
      <div>A storefront to billions of business opportunities</div>
      <Divider />
      <div>
        <p style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>
          Apa saja yang Anda perlukan
        </p>
        <p style={{ fontWeight: 'bold', fontSize: 14, marginBottom: 10 }}>
          Pra-instalasi
        </p>
        <p style={{ marginBottom: 20 }}>
          Sebelum Anda dapat melakukan subscribe Twitter, Anda harus memiliki:
        </p>
        <p style={{ marginBottom: 10 }}>1. Profil Twitter</p>
        <p style={{ marginBottom: 10 }}>
          2. Halaman Twitter dengan akses admin
        </p>
        <p style={{ marginBottom: 10 }}>3. Izin perpesanan diaktifkan</p>
      </div>
      <div>
        <p style={{ fontWeight: 'bold', fontSize: 14, marginBottom: 10 }}>
          Perizinan
        </p>
        <p style={{ marginBottom: 10 }}>
          Sebagai bagian dari proses subscribe, kami akan meminta izin untuk
          <br />
          mengakses percakapan halaman dan menampilkan daftar semua halaman
          <br /> yang Anda kelola.
        </p>
      </div>
      <div>
        <p style={{ fontWeight: 'bold', fontSize: 14, marginBottom: 10 }}>
          Subscribe
        </p>
        <p style={{ marginBottom: 10 }}>
          Kami akan memandu Anda melalui proses subscribe, termasuk <br />
          menghubungkan akun Twitter Business dan Halaman Twitter Anda
        </p>
      </div>
    </div>
  );
}
