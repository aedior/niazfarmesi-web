"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, Typography, Space, Button } from "antd";
import { UserOutlined, TeamOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function SelectType() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-4xl shadow-lg">
        <div className="flex flex-col md:flex-row gap-6">
          <Image
            src="/Rectangle_4_KuUNmqr.png"
            alt="Rectangle 4"
            width={374}
            height={725}
            className="rounded-lg object-cover"
          />
          <div className="flex flex-col items-center justify-center w-full space-y-6">
            <Image
              src="/logo.png"
              alt="logo"
              width={140}
              height={140}
              className="object-contain"
            />
            <Space
              direction="vertical"
              align="center"
              className="w-full max-w-md text-center"
            >
              <Title level={3}>به نیازفارمسی خوش آمدید</Title>
              <Title level={2}>لطفا برای ایجاد آگهی، ثبت‌نام کنید</Title>
              <Title level={3}>ابتدا نقش خود را انتخاب کنید</Title>
              <Space size="large" className="my-6">
                <Link href="/auth/karjo">
                  <Button
                    type="default"
                    size="large"
                    icon={<UserOutlined />}
                    className="flex flex-col items-center justify-center w-40 h-40 text-lg hover:bg-blue-100"
                  >
                    کارجو
                  </Button>
                </Link>
                <Link href="/auth/karfarma">
                  <Button
                    type="default"
                    size="large"
                    icon={<TeamOutlined />}
                    className="flex flex-col items-center justify-center w-40 h-40 text-lg hover:bg-blue-100"
                  >
                    کارفرما
                  </Button>
                </Link>
              </Space>
            </Space>
          </div>
        </div>
      </Card>
    </div>
  );
}
