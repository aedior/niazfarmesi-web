import { useState } from "react";
import { Modal, Button } from "antd";
import { ForwardRefEditor } from "@/components/editor/ref";

interface ResumeModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (introductionText: string) => void;
}

export default function ResumeModal({
  visible,
  onClose,
  onSubmit,
}: ResumeModalProps) {
  const [introductionText, setIntroductionText] = useState("");

  const handleSubmit = () => {
    onSubmit(introductionText);
    setIntroductionText("");
  };

  return (
    <Modal
      open={visible}
      title="ارسال رزومه"
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          انصراف
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          ارسال رزومه
        </Button>,
      ]}
    >
      <div style={{ direction: "rtl" }}>
        <ForwardRefEditor
          onChange={(content) => setIntroductionText(content)}
          markdown=""
          placeholder="لطفاً متن معرفی خود را اینجا بنویسید..."
          contentEditableClassName="prose max-w-full"
          className="border border-gray-300 rounded-md shadow-sm min-h-[200px] focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>
    </Modal>
  );
}
