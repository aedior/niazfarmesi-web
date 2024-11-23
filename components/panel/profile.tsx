"use client";

import { useAppSelector, useAppDispatch } from "@/store/HOCs";
import { useState, useEffect } from "react";
import { updateUserProfile } from "@/store/thunk/updateProfile";
import {
  Form,
  Input,
  Select,
  Button,
  Upload,
  Row,
  Col,
  Card,
  Typography,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { FaGlobe, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { KarfarmaType } from "@/store/user/slice";

const { Title, Text } = Typography;
const { Option } = Select;

export default function ProfilePanel() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user?.user);
  const [form] = Form.useForm();

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        banner: (user as KarfarmaType).banner,
        email: user.email,
        activityType: (user as KarfarmaType).activityType,
        address: user.location,
        founderName: (user as KarfarmaType).founderName,
        phone: user.phone?.toString(),
        establishmentDate: (user as KarfarmaType).establishmentDate,
        website: (user as KarfarmaType).website,
        rubika: (user as KarfarmaType).rubika,
        socialPhone: (user as KarfarmaType).socialPhone,
      });
    }
  }, [user, form]);

  const onFinish = (values: any) => {
    dispatch(updateUserProfile(values));
    message.success("پروفایل با موفقیت به‌روزرسانی شد");
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      className="rtl-form"
      style={{ maxWidth: 800, margin: "0 auto" }}
    >
      <Card title={<Title level={4}>پروفایل من</Title>} className="mb-4">
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="banner"
              label="بنر پروفایل"
              valuePropName="fileList"
              getValueFromEvent={(e) => {
                if (Array.isArray(e)) {
                  return e;
                }
                return e && e.fileList;
              }}
            >
              <Upload name="banner" listType="picture" maxCount={1}>
                <Button icon={<UploadOutlined />}>آپلود بنر</Button>
              </Upload>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="email"
              label="ایمیل"
              rules={[
                { required: true, message: "لطفا ایمیل خود را وارد کنید" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="activityType" label="نوع فعالیت">
              <Select>
                <Option value="0">شبانه روزی</Option>
                <Option value="1">درمانگاه</Option>
                <Option value="2">غیره</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="founderName" label="نام موسس">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="phone" label="شماره تلفن">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="establishmentDate" label="تاریخ تاسیس">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="address" label="آدرس">
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Card>

      <Card title={<Title level={4}>شبکه‌های اجتماعی</Title>} className="mb-4">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="website" label="وبسایت">
              <Input prefix={<FaGlobe />} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="rubika" label="روبیکا">
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Card>

      <Card title={<Title level={4}>اطلاعات تماس</Title>} className="mb-4">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="socialPhone" label="شماره موبایل شبکه‌های اجتماعی">
              <Input prefix={<FaPhoneAlt />} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="phone" label="تلفن داروخانه/ شرکت">
              <Input prefix={<FaPhoneAlt />} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Text>
              <FaMapMarkerAlt /> موقعیت مکانی روی نقشه
            </Text>
          </Col>
        </Row>
      </Card>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full">
          ویرایش اطلاعات
        </Button>
      </Form.Item>
    </Form>
  );
}
