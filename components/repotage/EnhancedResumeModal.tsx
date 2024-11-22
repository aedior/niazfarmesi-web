import React from "react";
import { Modal, Form, Input, Button } from "antd";
import { FaPaperPlane } from "react-icons/fa";

interface EnhancedResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: ResumeData) => void;
}

interface ResumeData {
  name: string;
  email: string;
  phone: string;
  coverLetter: string;
}

const EnhancedResumeModal: React.FC<EnhancedResumeModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: ResumeData) => {
    onSubmit(values);
    form.resetFields();
  };

  return (
    <Modal
      title="ارسال رزومه"
      open={isOpen}
      onCancel={onClose}
      footer={null}
      destroyOnClose
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="name"
          label="نام و نام خانوادگی"
          rules={[{ required: true, message: "لطفاً نام خود را وارد کنید" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="ایمیل"
          rules={[
            { required: true, message: "لطفاً ایمیل خود را وارد کنید" },
            { type: "email", message: "لطفاً یک ایمیل معتبر وارد کنید" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="شماره تماس"
          rules={[
            { required: true, message: "لطفاً شماره تماس خود را وارد کنید" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="coverLetter"
          label="متن معرفی"
          rules={[
            { required: true, message: "لطفاً متن معرفی خود را وارد کنید" },
          ]}
        >
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            icon={<FaPaperPlane />}
            block
          >
            ارسال رزومه
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EnhancedResumeModal;
