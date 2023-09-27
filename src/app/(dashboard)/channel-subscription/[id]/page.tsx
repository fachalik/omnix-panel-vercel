"use client";

import React from "react";
import { Card, Table, Button, Drawer, Modal } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Image from "next/image";
import type { ColumnsType } from "antd/es/table";
import FormAccount from "./FormAccount";

function page() {
  const [openAccount, setOpenAccount] = React.useState<any>(false);
  const [isModalOpen, setIsModalOpen] = React.useState<any>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  interface DataType {
    key: string;
    name: string;
    phone: string;
    businness: string;
    action: string[];
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Account Name",
      dataIndex: "name",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
    },
    {
      title: "WA Businness ID",
      dataIndex: "businness",
    },
    {
      key: "val",
      title: "Action",
      dataIndex: "action",
      render: (_, { val }: any) => (
        <div>
          <Button type="text" icon={<EditOutlined />} onClick={() => setOpenAccount(true)}></Button>
          <Button type="text" icon={<DeleteOutlined />} danger onClick={() => setIsModalOpen(true)}></Button>
        </div>
      ),
    },
  ];
  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      phone: "08123456",
      businness: "bisnis",
      action: ["1"],
    },
  ];

  const onClose = () => {
    setOpenAccount(false);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
          marginBottom: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
            marginBottom: 10,
          }}
        >
          <Image
            src={"/icons/whatsapp.svg"}
            alt="omnix-whatsapp"
            width={30}
            height={30}
          />
          <div style={{ fontSize: 20, fontWeight: "bold" }}>Whatsapp</div>
          <div>by Omnix</div>
        </div>
        <Button type="primary" onClick={() => setOpenAccount(true)}>
          Add Account
        </Button>
      </div>
      <Card>
        <Table
          style={{ marginTop: 10, paddingBottom: 20 }}
          columns={columns}
          dataSource={data}
        />
      </Card>
      <Drawer
        title="Add Account Whatsapp"
        placement="right"
        onClose={onClose}
        open={openAccount}
      >
        <FormAccount />
      </Drawer>
      <Modal centered title="Remove Account" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Are you sure would like to remove this account?</p>
      </Modal>
    </div>
  );
}

export default page;
