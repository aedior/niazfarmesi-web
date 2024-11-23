import React from "react";
import { Modal, Table, Tag, Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { JobPosting, Resume, ResumeStatus } from "@/store/slice/repotageModel";

interface ResumesListModalProps {
  visible: boolean;
  onCancel: () => void;
  jobPosting: JobPosting;
  onViewResume: (resume: Resume) => void;
}

const ResumesListModal: React.FC<ResumesListModalProps> = ({
  visible,
  onCancel,
  onViewResume,
  jobPosting,
}) => {
  const columns: ColumnsType<Resume> = [
    {
      title: "نام",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "وضعیت",
      dataIndex: "status",
      key: "status",
      render: (status: ResumeStatus) => {
        let color = "blue";
        switch (status) {
          case ResumeStatus.SEEN:
            color = "green";
            break;
          case ResumeStatus.PENDING_INTERVIEW:
            color = "gold";
            break;
          case ResumeStatus.REJECTED:
            color = "red";
            break;
        }
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "عملیات",
      key: "actions",
      render: (_, record) => (
        <Button icon={<EyeOutlined />} onClick={() => onViewResume(record)}>
          مشاهده رزومه
        </Button>
      ),
    },
  ];

  return (
    <Modal
      title={`لیست رزومه‌ها برای ${jobPosting?.title || ""}`}
      visible={visible}
      onCancel={onCancel}
      footer={null}
      width={800}
    >
      <Table
        columns={columns}
        dataSource={jobPosting?.resumes || []}
        rowKey="id"
        pagination={{ pageSize: 5 }}
      />
    </Modal>
  );
};

export default ResumesListModal;
