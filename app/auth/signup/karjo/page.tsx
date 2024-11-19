"use client";

import React, { useState } from "react";
import {
  Form,
  Input,
  Select,
  DatePicker,
  Upload,
  Button,
  ConfigProvider,
  Row,
  Col,
  message,
} from "antd";
import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import locale from "antd/lib/locale/fa_IR";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

const { Option } = Select;

export default function Signup() {
  const [form] = Form.useForm();
  const [workExperience, setWorkExperience] = useState<string>("");
  const [militaryService, setMilitaryService] = useState<string>("");
  const [education, setEducation] = useState<string>("");

  const onFinish = (values: any) => {
    console.log("Form values:", values);
  };

  const handleFileUpload = (info: any) => {
    const { status } = info.file;
    if (status === "done") {
      message.success(`${info.file.name} فایل با موفقیت آپلود شد.`);
    } else if (status === "error") {
      message.error(`${info.file.name} خطا در آپلود فایل.`);
    }
  };

  return (
    <ConfigProvider locale={locale} direction="rtl">
      <div className="min-h-screen bg-gray-100 p-4">
        <Row
          gutter={[32, 32]}
          justify="center"
          align="middle"
          className="min-h-screen"
        >
          <Col xs={24} lg={12} xl={10} className="order-2 lg:order-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex justify-center mb-8">
                <Image src="/logo.png" alt="Logo" width={112} height={112} />
              </div>
              <Form form={form} layout="vertical" onFinish={onFinish}>
                <Row gutter={16}>
                  <Col span={24}>
                    <Form.Item name="profilePicture" label="عکس پروفایل">
                      <Upload onChange={handleFileUpload}>
                        <Button icon={<UploadOutlined />}>آپلود عکس</Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="jobTitle"
                      label="عنوان شغلی"
                      rules={[{ required: true }]}
                    >
                      <Select placeholder="انتخاب کنید">
                        <Option value="developer">توسعه دهنده</Option>
                        <Option value="designer">طراح</Option>
                        <Option value="manager">مدیر</Option>
                        <Option value="analyst">تحلیلگر</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="firstName"
                      label="نام"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="lastName"
                      label="نام خانوادگی"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="birthDate"
                      label="تاریخ تولد"
                      rules={[{ required: true }]}
                    >
                      <DatePicker className="w-full" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="gender"
                      label="جنسیت"
                      rules={[{ required: true }]}
                    >
                      <Select placeholder="انتخاب کنید">
                        <Option value="male">مرد</Option>
                        <Option value="female">زن</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="location"
                      label="محل سکونت"
                      rules={[{ required: true }]}
                    >
                      <Input
                        prefix={<FaMapMarkerAlt />}
                        placeholder="انتخاب روی نقشه"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="education"
                      label="وضعیت تحصیلات"
                      rules={[{ required: true }]}
                    >
                      <Select
                        placeholder="انتخاب کنید"
                        onChange={(value) => setEducation(value)}
                      >
                        <Option value="student">دانشجو</Option>
                        <Option value="diploma">دیپلم</Option>
                        <Option value="bachelor">کارشناسی</Option>
                        <Option value="master">ارشد</Option>
                        <Option value="phd">دکتری</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="workExperience"
                      label="سابقه کار"
                      rules={[{ required: true }]}
                    >
                      <Select
                        placeholder="انتخاب کنید"
                        onChange={(value) => setWorkExperience(value)}
                      >
                        <Option value="yes">بله</Option>
                        <Option value="no">خیر</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="militaryService"
                      label="وضعیت نظام وظیفه"
                      rules={[{ required: true }]}
                    >
                      <Select
                        placeholder="انتخاب کنید"
                        onChange={(value) => setMilitaryService(value)}
                      >
                        <Option value="exempt">معاف</Option>
                        <Option value="included">مشمول</Option>
                        <Option value="completed">پایان خدمت</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="nationalId"
                      label="شماره ملی / شماره اختصاصی"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item name="referralCode" label="کد معرف">
                      <Input />
                    </Form.Item>
                  </Col>
                  {education && education !== "student" && (
                    <Col span={24}>
                      <Form.Item name="educationFile" label="آپلود مدرک تحصیلی">
                        <Upload onChange={handleFileUpload}>
                          <Button icon={<UploadOutlined />}>
                            آپلود مدرک تحصیلی
                          </Button>
                        </Upload>
                      </Form.Item>
                    </Col>
                  )}
                  {workExperience === "yes" && (
                    <Col span={24}>
                      <Form.Item
                        name="workExperienceFile"
                        label="آپلود سوابق کاری"
                      >
                        <Upload onChange={handleFileUpload}>
                          <Button icon={<UploadOutlined />}>
                            آپلود سوابق کاری
                          </Button>
                        </Upload>
                      </Form.Item>
                    </Col>
                  )}
                  {militaryService === "completed" && (
                    <Col span={24}>
                      <Form.Item
                        name="militaryServiceFile"
                        label="آپلود کارت پایان خدمت"
                      >
                        <Upload onChange={handleFileUpload}>
                          <Button icon={<UploadOutlined />}>
                            آپلود کارت پایان خدمت
                          </Button>
                        </Upload>
                      </Form.Item>
                    </Col>
                  )}
                </Row>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="w-full">
                    مرحله بعد
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
          <Col xs={24} lg={12} xl={10} className="order-1 lg:order-1">
            <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Signup Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
}
