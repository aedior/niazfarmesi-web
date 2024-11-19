"use client";

import { useState } from "react";
import {
  Form,
  Input,
  Select,
  InputNumber,
  Button,
  Card,
  message,
  Space,
  ConfigProvider,
} from "antd";
import {
  FaUser,
  FaBriefcase,
  FaClock,
  FaDollarSign,
  FaCheckSquare,
  FaCreditCard,
  FaMapMarkerAlt,
  FaFileAlt,
} from "react-icons/fa";
import fa_IR from "antd/lib/locale/fa_IR";

// Assuming these are imported from your existing code
import { MapInput } from "@/components/UI";
import { createNewRepotage } from "@/store/thunk/repotage";
import { useAppDispatch } from "@/store/HOCs";
import { KarjoEnum } from "@/store/user/slice";

const { Option } = Select;
const { TextArea } = Input;

export default function FormAgahiShoghli() {
  const [form] = Form.useForm();
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const dispatch = useAppDispatch();

  const onFinish = (values: any) => {
    dispatch(
      createNewRepotage({
        gender: parseInt(values.gender),
        onvan: values.jobTitle,
        nameMotabar: parseInt(values.validLetter),
        nezam: parseInt(values.professionalCard),
        saatHamkari: values.workingHours,
        tarikhHamkari: "",
        price: values.salary,
        desc: values.description,
        lat: values.location.lat,
        long: values.location.lng,
      })
    );
    message.success("آگهی شغلی با موفقیت ایجاد شد!");
  };

  const handleLocationChange = (location: any) => {
    form.setFieldsValue({ location });
  };

  const renderForm = () => (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        gender: "0",
        validLetter: "0",
        professionalCard: "0",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Form.Item
          name="gender"
          label="جنسیت"
          rules={[{ required: true, message: "لطفا جنسیت را انتخاب کنید" }]}
        >
          <Select>
            <Option value="0">زن</Option>
            <Option value="1">مرد</Option>
            <Option value="2">بدون اهمیت</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="jobTitle"
          label="عنوان شغلی"
          rules={[
            { required: true, message: "لطفا عنوان شغلی را انتخاب کنید" },
          ]}
        >
          <Select>
            {Object.entries({
              [KarjoEnum.DAROKHANE]: "تکنسین داروخانه",
              [KarjoEnum.ARAYESHI]: "تکنسین آرایشی و بهداشتی",
              [KarjoEnum.SANDOGDAR]: "صندوقدار",
              [KarjoEnum.ANBARDAR]: "انباردار",
              [KarjoEnum.MASOLFANI]: "مسئول فنی",
              [KarjoEnum.GAEMMAGAM]: "قائم مقام",
              [KarjoEnum.KARAMOZ_DARO]: " کارآموز دارویی",
              [KarjoEnum.KARAMOZ_ARAYESHI]: " کارآموز آرایشی و بهداشتی",
            }).map(([key, value]) => (
              <Option key={key} value={key}>
                {value}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="validLetter"
          label="نامه معتبر از دانشگاه"
          rules={[
            { required: true, message: "لطفا وضعیت نامه معتبر را انتخاب کنید" },
          ]}
        >
          <Select>
            <Option value="0">دارد</Option>
            <Option value="1">ندارد</Option>
            <Option value="2">بدون اهمیت</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="professionalCard"
          label="کارت نظام"
          rules={[
            { required: true, message: "لطفا وضعیت کارت نظام را انتخاب کنید" },
          ]}
        >
          <Select>
            <Option value="0">دارد</Option>
            <Option value="1">ندارد</Option>
            <Option value="2">بدون اهمیت</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="workingHours"
          label="ساعات کاری"
          rules={[
            { required: true, message: "لطفا ساعات کاری را انتخاب کنید" },
          ]}
        >
          <Select>
            <Option value="1">تمام وقت</Option>
            <Option value="2">نیمه وقت</Option>
            <Option value="3">انعطاف‌پذیر</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="salary"
          label="حقوق ساعتی (تومان)"
          rules={[{ required: true, message: "لطفا حقوق ساعتی را وارد کنید" }]}
        >
          <InputNumber
            className="w-full"
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " تومان"
            }
            parser={(value) => (value as any).replace(/\s?تومان|,/g, "")}
          />
        </Form.Item>
      </div>
      <Form.Item
        name="description"
        label="توضیحات"
        rules={[{ required: true, message: "لطفا توضیحات را وارد کنید" }]}
      >
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item
        name="location"
        label="موقعیت مکانی"
        rules={[
          { required: true, message: "لطفا موقعیت مکانی را انتخاب کنید" },
        ]}
      >
        <MapInput handler={handleLocationChange} />
      </Form.Item>
    </Form>
  );

  const renderPreview = () => {
    const values = form.getFieldsValue();
    return (
      <Card title="پیش‌نمایش آگهی شغلی">
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          <div>
            <FaBriefcase className="inline-block ml-2" /> عنوان شغلی:{" "}
            {KarjoEnum[values.jobTitle]}
          </div>
          <div>
            <FaUser className="inline-block ml-2" /> جنسیت:{" "}
            {values.gender === "0"
              ? "زن"
              : values.gender === "1"
              ? "مرد"
              : "بدون اهمیت"}
          </div>
          <div>
            <FaClock className="inline-block ml-2" /> ساعات کاری:{" "}
            {values.workingHours === "1"
              ? "تمام وقت"
              : values.workingHours === "2"
              ? "نیمه وقت"
              : "انعطاف‌پذیر"}
          </div>
          <div>
            <FaDollarSign className="inline-block ml-2" /> حقوق ساعتی:{" "}
            {values.salary} تومان
          </div>
          <div>
            <FaCheckSquare className="inline-block ml-2" /> نامه معتبر از
            دانشگاه:{" "}
            {values.validLetter === "0"
              ? "دارد"
              : values.validLetter === "1"
              ? "ندارد"
              : "بدون اهمیت"}
          </div>
          <div>
            <FaCreditCard className="inline-block ml-2" /> کارت نظام:{" "}
            {values.professionalCard === "0"
              ? "دارد"
              : values.professionalCard === "1"
              ? "ندارد"
              : "بدون اهمیت"}
          </div>
          <div>
            <FaMapMarkerAlt className="inline-block ml-2" /> موقعیت مکانی:{" "}
            {values.location
              ? `عرض ${values.location.lat.toFixed(
                  4
                )}، طول ${values.location.lng.toFixed(4)}`
              : "مشخص نشده"}
          </div>
          <div>
            <FaFileAlt className="inline-block ml-2" /> توضیحات:{" "}
            {values.description}
          </div>
        </Space>
      </Card>
    );
  };

  return (
    <ConfigProvider locale={fa_IR} direction="rtl">
      <div
        className="max-w-4xl mx-auto p-6 space-y-8 w-full bg-white rounded-xl"
        style={{ direction: "rtl" }}
      >
        <h1 className="text-3xl font-bold text-center">ایجاد آگهی شغلی جدید</h1>
        {isPreviewMode ? renderPreview() : renderForm()}
        <div className="flex justify-end space-x-4 rtl:space-x-reverse">
          <Button onClick={() => setIsPreviewMode(!isPreviewMode)}>
            {isPreviewMode ? "ویرایش" : "پیش‌نمایش"}
          </Button>
          {!isPreviewMode && (
            <Button
              type="primary"
              onClick={() => form.submit()}
              className="bg-1967d2"
            >
              ایجاد آگهی شغلی
            </Button>
          )}
        </div>
      </div>
    </ConfigProvider>
  );
}
