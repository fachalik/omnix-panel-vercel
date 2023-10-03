import React from 'react';
import { Divider, Button, Steps, Input } from 'antd';
import Image from 'next/image';

export default function Page() {
  return (
    <div>
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
      </div>
      <Divider />
      <div>
        <Steps
          progressDot
          current={1}
          direction="vertical"
          items={[
            {
              title: 'Step 1',
              description: (
                <div>
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      marginBottom: 20,
                    }}
                  >
                    Hubungkan akun bisnis WhatsApp Anda
                  </p>
                  <p style={{ fontSize: 12, marginBottom: 20 }}>
                    Klik tombol di bawah untuk memulai alur subscribe WhatsApp.
                  </p>
                  <Button>Click here to continue</Button>
                </div>
              ),
            },
            {
              title: 'Step 2',
              description: (
                <div>
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      marginBottom: 20,
                    }}
                  >
                    Nama Channel
                  </p>
                  <p style={{ fontSize: 12, marginBottom: 20 }}>
                    Nama channel Anda akan ditampilkan dalam laporan dan
                    pengaturan. <br /> Harap pastikan untuk memilih sesuatu yang
                    mudah Anda kenali dan rujuk.
                  </p>
                  <div>
                    <Input
                      placeholder="Whatsapp Official"
                      style={{ width: 400, marginBottom: 10 }}
                    />
                  </div>
                  <Button>Click here to continue</Button>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
