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
            title: 'Whatsapp',
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
            src={'/icons/whatsapp.svg'}
            alt="omnix-whatsapp"
            width={30}
            height={30}
          />
          <div style={{ fontSize: 20, fontWeight: 'bold' }}>Whatsapp</div>
          <div>by Omnix</div>
        </div>
        <Button
          type="primary"
          onClick={() => push('/channel-subscription/whatsapp/subscribe')}
        >
          Subscription Whatsapp
        </Button>
      </div>
      <div>
        Integrate your Whatsapp business account and manage all your Whatsapp
        conversations.
      </div>
      <Divider />
      <div>
        <p style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>
          Apa saja yang Anda perlukan
        </p>
        <p style={{ fontWeight: 'bold', fontSize: 14, marginBottom: 10 }}>
          Pra-instalasi
        </p>
        <p style={{ marginBottom: 20 }}>
          Sebelum Anda dapat melakukan subscribe WhatsApp, Anda harus memiliki:
        </p>
        <p style={{ marginBottom: 10 }}>1. Akses ke Manajer Bisnis Facebook</p>
        <p style={{ marginBottom: 10 }}>
          2. Nomor telepon yang layak untuk WhatsApp: ini bisa berupa nomor
          telepon Anda sendiri
        </p>
        <p style={{ marginBottom: 25 }}>
          3. Alamat resmi dan detail bisnis Anda
        </p>
      </div>
      <div>
        <p style={{ fontWeight: 'bold', fontSize: 14, marginBottom: 10 }}>
          Subscribe
        </p>
        <p style={{ marginBottom: 10 }}>
          Kami akan memandu Anda melalui proses subscribe, memastikan bahwa{' '}
          <br /> bisnis dan nomor Anda memenuhi kriteria WhatsApp dan
          memverifikasi akun <br /> Facebook Business dan nomor WhatsApp for
          Business Anda.
        </p>
      </div>
    </div>
  );
}
