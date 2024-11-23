"use client";

import { useState, useRef, useEffect } from "react";
import {
  Form,
  Input,
  Select,
  InputNumber,
  Button,
  Card,
  message,
  Space,
  Checkbox,
} from "antd";
import {
  FaUser,
  FaBriefcase,
  FaClock,
  FaDollarSign,
  FaCheckSquare,
  FaCreditCard,
  FaFileAlt,
  FaTags,
  FaTimes,
  FaPlus,
} from "react-icons/fa";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import fa_IR from "antd/lib/locale/fa_IR";
import { useDispatch } from "react-redux";
import {
  createNewReportage,
  ReportageData,
} from "@/store/thunk/createNewReportage ";
import { useAppDispatch } from "@/store/HOCs";
import { KarjoEnum } from "@/store/user/slice";

const { Option } = Select;
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CustomQuillModule = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

export default function FormAgahiShoghli() {
  const [form] = Form.useForm();
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [isNegotiable, setIsNegotiable] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<Input>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue("");
  };

  const onFinish = (values: any) => {
    const reportageData: ReportageData = {
      gender: parseInt(values.gender),
      title: values.jobTitle,
      nameMotabar: parseInt(values.validLetter),
      nezam: parseInt(values.professionalCard),
      saatHamkari: values.workingHours,
      price: isNegotiable ? "توافقی" : values.salary,
      desc: values.description,
      tags: tags,
    };

    dispatch(createNewReportage(reportageData));
    message.success("آگهی شغلی با موفقیت ایجاد شد!");
  };

  const renderForm = () => (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        gender: 0,
        validLetter: 0,
        professionalCard: 0,
      }}
      size="large"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Form.Item
          name="gender"
          label="جنسیت"
          rules={[{ required: true, message: "لطفا جنسیت را انتخاب کنید" }]}
        >
          <Select suffixIcon={<FaUser />}>
            <Option value={0}>زن</Option>
            <Option value={1}>مرد</Option>
            <Option value={2}>بدون اهمیت</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="jobTitle"
          label="عنوان شغلی"
          rules={[
            { required: true, message: "لطفا عنوان شغلی را انتخاب کنید" },
          ]}
        >
          <Select suffixIcon={<FaBriefcase />}>
            <Option value={KarjoEnum.DAROKHANE}>تکنسین داروخانه</Option>
            <Option value={KarjoEnum.ARAYESHI}>تکنسین آرایشی و بهداشتی</Option>
            <Option value={KarjoEnum.SANDOGDAR}>صندوقدار</Option>
            <Option value={KarjoEnum.ANBARDAR}>انباردار</Option>
            <Option value={KarjoEnum.MASOLFANI}>مسئول فنی</Option>
            <Option value={KarjoEnum.GAEMMAGAM}>قائم مقام</Option>
            <Option value={KarjoEnum.KARAMOZ_DARO}>کارآموز دارویی</Option>
            <Option value={KarjoEnum.KARAMOZ_ARAYESHI}>
              کارآموز آرایشی و بهداشتی
            </Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="validLetter"
          label="نامه معتبر از دانشگاه"
          rules={[
            { required: true, message: "لطفا وضعیت نامه معتبر را انتخاب کنید" },
          ]}
        >
          <Select suffixIcon={<FaCheckSquare />}>
            <Option value={0}>دارد</Option>
            <Option value={1}>ندارد</Option>
            <Option value={2}>بدون اهمیت</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="professionalCard"
          label="کارت نظام"
          rules={[
            { required: true, message: "لطفا وضعیت کارت نظام را انتخاب کنید" },
          ]}
        >
          <Select suffixIcon={<FaCreditCard />}>
            <Option value={0}>دارد</Option>
            <Option value={1}>ندارد</Option>
            <Option value={2}>بدون اهمیت</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="workingHours"
          label="ساعات کاری"
          rules={[
            { required: true, message: "لطفا ساعات کاری را انتخاب کنید" },
          ]}
        >
          <Select suffixIcon={<FaClock />}>
            <Option value={0}>تمام وقت</Option>
            <Option value={1}>نیمه وقت</Option>
            <Option value={2}>انعطاف‌پذیر</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="salary"
          label="حقوق ساعتی (تومان)"
          rules={[
            {
              required: !isNegotiable,
              message: "لطفا حقوق ساعتی را وارد کنید یا توافقی را انتخاب کنید",
            },
          ]}
        >
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <InputNumber
              className="w-full"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " تومان"
              }
              parser={(value) => (value as any).replace(/\s?تومان|,/g, "")}
              disabled={isNegotiable}
              prefix={<FaDollarSign />}
            />
            <Checkbox
              onChange={(e) => {
                setIsNegotiable(e.target.checked);
                if (e.target.checked) {
                  form.setFieldsValue({ salary: undefined });
                }
              }}
            >
              توافقی
            </Checkbox>
          </div>
        </Form.Item>
      </div>
      <Form.Item name="tags">
        <div className="flex flex-wrap items-center gap-2 p-4 bg-gray-50 rounded-lg border border-gray-200">
          {tags.map((tag, index) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
            >
              <button
                type="button"
                className="mr-2 inline-flex items-center p-0.5 rounded-full text-blue-400 hover:bg-blue-200 hover:text-blue-500 focus:outline-none"
                onClick={() => handleClose(tag)}
              >
                <FaTimes aria-hidden="true" />
              </button>
              {tag}
            </span>
          ))}
          {inputVisible && (
            <Input
              ref={inputRef}
              type="text"
              size="large"
              className="w-32"
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputConfirm}
              onPressEnter={handleInputConfirm}
            />
          )}
          {!inputVisible && (
            <Button
              type="dashed"
              onClick={showInput}
              icon={<FaPlus />}
              className="flex items-center"
            >
              افزودن برچسب
            </Button>
          )}
        </div>
      </Form.Item>
      <Form.Item
        name="description"
        label="توضیحات"
        rules={[{ required: true, message: "لطفا توضیحات را وارد کنید" }]}
      >
        <ReactQuill
          theme="snow"
          modules={CustomQuillModule}
          style={{ direction: "rtl", height: "200px" }}
          placeholder="توضیحات خود را اینجا وارد کنید..."
        />
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
            {values.jobTitle}
          </div>
          <div>
            <FaUser className="inline-block ml-2" /> جنسیت:{" "}
            {values.gender === 0
              ? "زن"
              : values.gender === 1
              ? "مرد"
              : "بدون اهمیت"}
          </div>
          <div>
            <FaClock className="inline-block ml-2" /> ساعات کاری:{" "}
            {values.workingHours === 0
              ? "تمام وقت"
              : values.workingHours === 1
              ? "نیمه وقت"
              : "انعطاف‌پذیر"}
          </div>
          <div>
            <FaDollarSign className="inline-block ml-2" /> حقوق ساعتی:{" "}
            {isNegotiable ? "توافقی" : `${values.salary} تومان`}
          </div>
          <div>
            <FaCheckSquare className="inline-block ml-2" /> نامه معتبر از
            دانشگاه:{" "}
            {values.validLetter === 0
              ? "دارد"
              : values.validLetter === 1
              ? "ندارد"
              : "بدون اهمیت"}
          </div>
          <div>
            <FaCreditCard className="inline-block ml-2" /> کارت نظام:{" "}
            {values.professionalCard === 0
              ? "دارد"
              : values.professionalCard === 1
              ? "ندارد"
              : "بدون اهمیت"}
          </div>
          <div>
            <FaTags className="inline-block ml-2" /> برچسب‌ها:{" "}
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <FaFileAlt className="inline-block ml-2" /> توضیحات:{" "}
            <div dangerouslySetInnerHTML={{ __html: values.description }} />
          </div>
        </Space>
      </Card>
    );
  };

  return (
    <>
      <div className="mx-auto p-6 space-y-8 w-full bg-white rounded-xl">
        {isPreviewMode ? renderPreview() : renderForm()}
        <div className="flex justify-end space-x-4 rtl:space-x-reverse pt-5">
          <Button size="large" onClick={() => setIsPreviewMode(!isPreviewMode)}>
            {isPreviewMode ? "ویرایش" : "پیش‌نمایش"}
          </Button>
          {!isPreviewMode && (
            <Button
              size="large"
              type="primary"
              onClick={() => form.submit()}
              className="bg-1967d2"
            >
              ایجاد آگهی شغلی
            </Button>
          )}
        </div>
      </div>
      <style jsx global>{`
        .ql-editor {
          direction: rtl;
          text-align: right;
          font-size: 16px;
          min-height: 200px;
        }
        .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
          right: auto;
          left: 0;
        }
        .ant-select-selection-item {
          text-align: right;
        }
        .ant-form-item-label {
          text-align: right;
        }
        .ant-input-number-group-addon {
          border-radius: 0 6px 6px 0;
        }
        .ant-input-number {
          border-radius: 6px 0 0 6px;
        }
        .ant-form-item-label > label {
          font-size: 16px;
        }
        .ant-checkbox-wrapper {
          font-size: 16px;
        }
      `}</style>
    </>
  );
}
