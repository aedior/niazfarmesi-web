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
import { UploadOutlined } from "@ant-design/icons";
import locale from "antd/lib/locale/fa_IR";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RcFile } from "antd/es/upload";
import {
  KarjoEnum,
  GenderType,
  KnowType,
  EducationType,
  HaveType,
  NezamType,
  ProgramType,
  KarjoType,
} from "@/store/user/slice";
import { submitKarjoSignup } from "@/store/user/thunk";
import { useAppDispatch, useAppSelector } from "@/store/HOCs";
import { redirect } from "next/navigation";

const { Option } = Select;

export default function KarjoSignup() {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: KarjoType) => {
    try {
      await dispatch(submitKarjoSignup(values)).unwrap();
      message.success("فرم با موفقیت ارسال شد");
      form.resetFields();
      redirect("/auth/call-with-you");
    } catch (error) {
      message.error("خطا در ارسال فرم");
    }
  };

  const handleFileUpload = (info: any) => {
    const { status } = info.file;
    if (status === "done") {
      message.success(`${info.file.name} فایل با موفقیت آپلود شد.`);
    } else if (status === "error") {
      message.error(`${info.file.name} خطا در آپلود فایل.`);
    }
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
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
                    <Form.Item
                      name="profilePicture"
                      label="عکس پروفایل"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                    >
                      <Upload
                        name="profilePicture"
                        listType="picture"
                        maxCount={1}
                        beforeUpload={(file) => {
                          const isJpgOrPng =
                            file.type === "image/jpeg" ||
                            file.type === "image/png";
                          if (!isJpgOrPng) {
                            message.error("فقط فایل‌های JPG/PNG مجاز هستند!");
                          }
                          return isJpgOrPng;
                        }}
                      >
                        <Button icon={<UploadOutlined />}>آپلود عکس</Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="type"
                      label="عنوان شغلی"
                      rules={[
                        {
                          required: true,
                          message: "لطفا عنوان شغلی را انتخاب کنید",
                        },
                      ]}
                    >
                      <Select placeholder="انتخاب کنید">
                        {Object.entries(KarjoEnum).map(([key, value]) => (
                          <Option key={key} value={value}>
                            {value}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="fName"
                      label="نام"
                      rules={[
                        {
                          required: true,
                          message: "لطفا نام خود را وارد کنید",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="lName"
                      label="نام خانوادگی"
                      rules={[
                        {
                          required: true,
                          message: "لطفا نام خانوادگی خود را وارد کنید",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="birthdate"
                      label="تاریخ تولد"
                      rules={[
                        {
                          required: true,
                          message: "لطفا تاریخ تولد خود را وارد کنید",
                        },
                      ]}
                    >
                      <DatePicker className="w-full" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="gender"
                      label="جنسیت"
                      rules={[
                        {
                          required: true,
                          message: "لطفا جنسیت خود را انتخاب کنید",
                        },
                      ]}
                    >
                      <Select placeholder="انتخاب کنید">
                        {Object.entries(GenderType).map(([key, value]) => (
                          <Option key={key} value={value}>
                            {value}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="location"
                      label="محل سکونت"
                      rules={[
                        {
                          required: true,
                          message: "لطفا محل سکونت خود را وارد کنید",
                        },
                      ]}
                    >
                      <Input
                        prefix={<FaMapMarkerAlt />}
                        placeholder="انتخاب روی نقشه"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="lat"
                      label="عرض جغرافیایی"
                      rules={[
                        {
                          required: true,
                          message: "لطفا عرض جغرافیایی را وارد کنید",
                        },
                      ]}
                    >
                      <Input type="number" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="long"
                      label="طول جغرافیایی"
                      rules={[
                        {
                          required: true,
                          message: "لطفا طول جغرافیایی را وارد کنید",
                        },
                      ]}
                    >
                      <Input type="number" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="knowType"
                      label="نحوه آشنایی"
                      rules={[
                        {
                          required: true,
                          message: "لطفا نحوه آشنایی را انتخاب کنید",
                        },
                      ]}
                    >
                      <Select placeholder="انتخاب کنید">
                        {Object.entries(KnowType).map(([key, value]) => (
                          <Option key={key} value={value}>
                            {value}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item name="referralCode" label="کد معرف">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="education"
                      label="تحصیلات"
                      rules={[
                        {
                          required: true,
                          message: "لطفا تحصیلات خود را انتخاب کنید",
                        },
                      ]}
                    >
                      <Select placeholder="انتخاب کنید">
                        {Object.entries(EducationType).map(([key, value]) => (
                          <Option key={key} value={value}>
                            {value}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="education_file"
                      label="فایل مدرک تحصیلی"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                    >
                      <Upload name="education_file" onChange={handleFileUpload}>
                        <Button icon={<UploadOutlined />}>
                          آپلود مدرک تحصیلی
                        </Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="worked"
                      label="سابقه کار"
                      rules={[
                        {
                          required: true,
                          message: "لطفا وضعیت سابقه کار خود را انتخاب کنید",
                        },
                      ]}
                    >
                      <Select placeholder="انتخاب کنید">
                        {Object.entries(HaveType).map(([key, value]) => (
                          <Option key={key} value={value}>
                            {value}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="worked_file"
                      label="فایل سابقه کار"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                    >
                      <Upload name="worked_file" onChange={handleFileUpload}>
                        <Button icon={<UploadOutlined />}>
                          آپلود سابقه کار
                        </Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="nezam"
                      label="وضعیت نظام وظیفه"
                      rules={[
                        {
                          required: true,
                          message: "لطفا وضعیت نظام وظیفه خود را انتخاب کنید",
                        },
                      ]}
                    >
                      <Select placeholder="انتخاب کنید">
                        {Object.entries(NezamType).map(([key, value]) => (
                          <Option key={key} value={value}>
                            {value}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="nezam_file"
                      label="فایل کارت پایان خدمت"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                    >
                      <Upload name="nezam_file" onChange={handleFileUpload}>
                        <Button icon={<UploadOutlined />}>
                          آپلود کارت پایان خدمت
                        </Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="meliNo"
                      label="شماره ملی"
                      rules={[
                        {
                          required: true,
                          message: "لطفا شماره ملی خود را وارد کنید",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="meliNo_file"
                      label="فایل کارت ملی"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                    >
                      <Upload name="meliNo_file" onChange={handleFileUpload}>
                        <Button icon={<UploadOutlined />}>
                          آپلود کارت ملی
                        </Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="technician"
                      label="دارای پروانه فنی"
                      rules={[
                        {
                          required: true,
                          message: "لطفا وضعیت پروانه فنی خود را انتخاب کنید",
                        },
                      ]}
                    >
                      <Select placeholder="انتخاب کنید">
                        {Object.entries(HaveType).map(([key, value]) => (
                          <Option key={key} value={value}>
                            {value}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="technician_file"
                      label="فایل پروانه فنی"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                    >
                      <Upload
                        name="technician_file"
                        onChange={handleFileUpload}
                      >
                        <Button icon={<UploadOutlined />}>
                          آپلود پروانه فنی
                        </Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="certificate"
                      label="دارای گواهینامه"
                      rules={[
                        {
                          required: true,
                          message: "لطفا وضعیت گواهینامه خود را انتخاب کنید",
                        },
                      ]}
                    >
                      <Select placeholder="انتخاب کنید">
                        {Object.entries(HaveType).map(([key, value]) => (
                          <Option key={key} value={value}>
                            {value}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="certificate_file"
                      label="فایل گواهینامه"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                    >
                      <Upload
                        name="certificate_file"
                        onChange={handleFileUpload}
                      >
                        <Button icon={<UploadOutlined />}>
                          آپلود گواهینامه
                        </Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="badBack"
                      label="سوء پیشینه"
                      rules={[
                        {
                          required: true,
                          message: "لطفا وضعیت سوء پیشینه خود را انتخاب کنید",
                        },
                      ]}
                    >
                      <Select placeholder="انتخاب کنید">
                        {Object.entries(HaveType).map(([key, value]) => (
                          <Option key={key} value={value}>
                            {value}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="badBack_file"
                      label="فایل سوء پیشینه"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                    >
                      <Upload name="badBack_file" onChange={handleFileUpload}>
                        <Button icon={<UploadOutlined />}>
                          آپلود سوء پیشینه
                        </Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="retrain"
                      label="دوره بازآموزی"
                      rules={[
                        {
                          required: true,
                          message:
                            "لطفا وضعیت دوره بازآموزی خود را انتخاب کنید",
                        },
                      ]}
                    >
                      <Select placeholder="انتخاب کنید">
                        {Object.entries(HaveType).map(([key, value]) => (
                          <Option key={key} value={value}>
                            {value}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="retrain_file"
                      label="فایل دوره بازآموزی"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                    >
                      <Upload name="retrain_file" onChange={handleFileUpload}>
                        <Button icon={<UploadOutlined />}>
                          آپلود دوره بازآموزی
                        </Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="program"
                      label="برنامه مورد استفاده"
                      rules={[
                        {
                          required: true,
                          message: "لطفا برنامه مورد استفاده را انتخاب کنید",
                        },
                      ]}
                    >
                      <Select placeholder="انتخاب کنید">
                        {Object.entries(ProgramType).map(([key, value]) => (
                          <Option key={key} value={value}>
                            {value}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full"
                    loading={loading}
                  >
                    ثبت نام
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
