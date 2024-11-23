"use client";

import React, { useState } from "react";
import {
  Table,
  Tag,
  Button,
  Modal,
  Typography,
  Space,
  message,
  Descriptions,
  Tabs,
  Tooltip,
} from "antd";
import {
  EyeOutlined,
  ClockCircleOutlined,
  SyncOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { FaUserClock, FaEye, FaTimesCircle } from "react-icons/fa";
import { ColumnsType } from "antd/es/table";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";

import {
  scheduleInterview,
  fetchJobPostings,
} from "@/store/thunk/scheduleInterview";
import {
  JobPosting,
  Resume,
  ResumeStatus,
  updateResumeStatus,
} from "@/store/slice/repotageModel";
import { useAppDispatch, useAppSelector } from "@/store/HOCs";

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;

const JobBoard: React.FC = () => {
  const dispatch = useAppDispatch();
  const jobPostings = useAppSelector((state) => state.RepotagemodelSlice.data);
  const loading = useAppSelector((state) => state.RepotagemodelSlice.loading);

  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [selectedResume, setSelectedResume] = useState<Resume | null>(null);
  const [isAllResumesModalVisible, setIsAllResumesModalVisible] =
    useState(false);
  const [interviewDatetime, setInterviewDatetime] = useState<DateObject | null>(
    null
  );

  const handleRefresh = () => {
    dispatch(fetchJobPostings());
  };

  const showAllResumesModal = (job: JobPosting) => {
    setSelectedJob(job);
    setIsAllResumesModalVisible(true);
  };

  const handleAllResumesModalCancel = () => {
    setIsAllResumesModalVisible(false);
    setSelectedJob(null);
  };

  const handleInviteToInterview = (resume: Resume) => {
    setSelectedResume(resume);
  };

  const handleInterviewSubmit = () => {
    if (selectedJob && selectedResume && interviewDatetime) {
      const gregorianDate = interviewDatetime
        .convert(gregorian, gregorian_en)
        .format("YYYY/MM/DD HH:mm");
      dispatch(
        scheduleInterview({
          jobId: selectedJob.id,
          resumeId: selectedResume.id,
          interview: {
            datetime: gregorianDate,
          },
        })
      ).then(() => {
        message.success(
          `${
            selectedResume.name
          } برای مصاحبه در تاریخ ${interviewDatetime.format(
            "YYYY/MM/DD"
          )} ساعت ${interviewDatetime.format("HH:mm")} دعوت شد.`
        );
        setInterviewDatetime(null);
        setSelectedResume(null);
      });
    } else {
      message.error("لطفاً تاریخ و ساعت مصاحبه را مشخص کنید.");
    }
  };

  const handleReject = (resume: Resume) => {
    if (selectedJob) {
      dispatch(
        updateResumeStatus({
          jobId: selectedJob.id,
          resumeId: resume.id,
          status: ResumeStatus.REJECTED,
        })
      );
      message.error(`رزومه ${resume.name} رد شد.`);
    }
  };

  const countResumesByStatus = (resumes: Resume[]) => {
    return resumes.reduce(
      (acc, resume) => {
        acc[resume.status]++;
        return acc;
      },
      {
        [ResumeStatus.PENDING_INTERVIEW]: 0,
        [ResumeStatus.UNSEEN]: 0,
        [ResumeStatus.REJECTED]: 0,
        [ResumeStatus.SEEN]: 0,
      }
    );
  };

  const columns: ColumnsType<JobPosting> = [
    {
      title: "عنوان شغل",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <Space direction="vertical">
          <Text strong>{text}</Text>
          {record.fori && (
            <Tag color="red" icon={<ClockCircleOutlined />}>
              فوری
            </Tag>
          )}
        </Space>
      ),
    },
    {
      title: "موقعیت",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "حقوق",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "تگ‌ها",
      key: "tags",
      dataIndex: "tags",
      render: (tags: string[]) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "وضعیت رزومه‌ها",
      key: "resumeStatus",
      render: (_, record) => {
        const counts = countResumesByStatus(record.resumes);
        return (
          <Space>
            <Tooltip title="در انتظار مصاحبه">
              <Tag color="gold" icon={<FaUserClock className="mr-1" />}>
                {counts[ResumeStatus.PENDING_INTERVIEW]}
              </Tag>
            </Tooltip>
            <Tooltip title="مشاهده نشده">
              <Tag color="blue" icon={<FaEye className="mr-1" />}>
                {counts[ResumeStatus.UNSEEN]}
              </Tag>
            </Tooltip>
            <Tooltip title="رد شده">
              <Tag color="red" icon={<FaTimesCircle className="mr-1" />}>
                {counts[ResumeStatus.REJECTED]}
              </Tag>
            </Tooltip>
          </Space>
        );
      },
    },
    {
      title: "رزومه‌ها",
      key: "resumes",
      render: (_, record) => (
        <Button
          icon={<EyeOutlined />}
          onClick={() => showAllResumesModal(record)}
        >
          مشاهده رزومه‌ها ({record.resumes.length})
        </Button>
      ),
    },
  ];

  const getStatusColor = (status: ResumeStatus): string => {
    switch (status) {
      case ResumeStatus.UNSEEN:
        return "blue";
      case ResumeStatus.SEEN:
        return "green";
      case ResumeStatus.PENDING_INTERVIEW:
        return "gold";
      case ResumeStatus.REJECTED:
        return "red";
      default:
        return "default";
    }
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen p-4" dir="rtl">
        <Space direction="vertical" size="large" className="w-full">
          <Title level={3} className="text-center text-gray-800">
            تابلوی شغلی
          </Title>
          <Table
            columns={columns}
            dataSource={jobPostings}
            rowKey="id"
            pagination={{
              pageSize: 10,
              showTotal: (total, range) => (
                <div className="flex items-center justify-between w-full">
                  <Button
                    type="primary"
                    icon={<SyncOutlined spin={loading} />}
                    onClick={handleRefresh}
                    disabled={loading}
                    className="bg-blue-400 hover:bg-blue-500 border-none ml-4"
                  >
                    {loading ? "در حال بروزرسانی..." : "بروزرسانی لیست"}
                  </Button>
                  <span>
                    {range[0]}-{range[1]} از {total} مورد
                  </span>
                </div>
              ),
            }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          />
        </Space>

        <Modal
          title={`رزومه‌های ${selectedJob?.title}`}
          visible={isAllResumesModalVisible}
          onCancel={handleAllResumesModalCancel}
          footer={null}
          width={1000}
          className="resume-modal"
        >
          {selectedJob && (
            <Tabs defaultActiveKey="0" className="resume-tabs">
              {selectedJob.resumes.map((resume, index) => (
                <TabPane
                  tab={resume.name}
                  key={index}
                  className="resume-tab-pane"
                >
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <Descriptions bordered column={1} className="mb-6">
                      <Descriptions.Item label="نام">
                        {resume.name}
                      </Descriptions.Item>
                      <Descriptions.Item label="ایمیل">
                        {resume.email}
                      </Descriptions.Item>
                      <Descriptions.Item label="تلفن">
                        {resume.phone}
                      </Descriptions.Item>
                      <Descriptions.Item label="وبسایت">
                        {resume.website}
                      </Descriptions.Item>
                      <Descriptions.Item label="توضیحات">
                        {resume.description}
                      </Descriptions.Item>
                      <Descriptions.Item label="تحصیلات">
                        {resume.education}
                      </Descriptions.Item>
                      <Descriptions.Item label="تجربه کاری">
                        {resume.experience}
                      </Descriptions.Item>
                      <Descriptions.Item label="مهارت‌ها">
                        {resume.skills.map((skill) => (
                          <Tag key={skill.name} color="blue">
                            {skill.name}: {skill.level}%
                          </Tag>
                        ))}
                      </Descriptions.Item>
                      <Descriptions.Item label="زبان‌ها">
                        {resume.languages.map((language) => (
                          <Tag key={language} color="green">
                            {language}
                          </Tag>
                        ))}
                      </Descriptions.Item>
                      <Descriptions.Item label="وضعیت">
                        <Tag color={getStatusColor(resume.status)}>
                          {resume.status}
                        </Tag>
                      </Descriptions.Item>
                      <Descriptions.Item label="تعیین زمان مصاحبه">
                        <Space direction="vertical" className="w-full">
                          <DatePicker
                            calendar={persian}
                            locale={persian_fa}
                            calendarPosition="bottom-right"
                            format="YYYY/MM/DD HH:mm"
                            onChange={(date) =>
                              setInterviewDatetime(date as DateObject)
                            }
                            plugins={[<TimePicker position="bottom" />]}
                            className="w-full p-2 border rounded"
                          />
                        </Space>
                      </Descriptions.Item>
                    </Descriptions>
                    <div className="flex justify-end space-x-4">
                      <Button
                        type="primary"
                        onClick={() => {
                          handleInviteToInterview(resume);
                          handleInterviewSubmit();
                        }}
                        disabled={!interviewDatetime}
                        className="bg-green-500 hover:bg-green-600 border-none"
                      >
                        دعوت به مصاحبه
                      </Button>
                      <Button
                        type="primary"
                        danger
                        onClick={() => handleReject(resume)}
                      >
                        رد کردن
                      </Button>
                    </div>
                  </div>
                </TabPane>
              ))}
            </Tabs>
          )}
        </Modal>
      </div>
      <style jsx global>{`
        .resume-modal .ant-modal-content {
          border-radius: 8px;
          overflow: hidden;
        }

        .resume-modal .ant-modal-header {
          background-color: #f0f2f5;
          border-bottom: 1px solid #e8e8e8;
          padding: 16px 24px;
        }

        .resume-modal .ant-modal-body {
          padding: 24px;
        }

        .resume-tabs .ant-tabs-nav {
          margin-bottom: 16px;
        }

        .resume-tab-pane {
          padding: 16px;
        }

        .resume-tab-pane
          .ant-descriptions-bordered
          .ant-descriptions-item-label {
          background-color: #f0f2f5;
          font-weight: 600;
        }
      `}</style>
    </>
  );
};

export default JobBoard;
