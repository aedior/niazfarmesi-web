"use client";

import React, { useState } from "react";
import {
  Card,
  Typography,
  Button,
  List,
  Tag,
  Collapse,
  Tooltip,
  Modal,
  Progress,
  message,
  DatePicker,
} from "antd";
import {
  FaFileAlt,
  FaBriefcase,
  FaChevronDown,
  FaEye,
  FaHourglassHalf,
  FaTimesCircle,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaClock,
  FaGraduationCap,
  FaLanguage,
  FaCode,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaStar,
  FaCheck,
  FaTimes,
  FaVenusMars,
  FaUserTie,
  FaStethoscope,
  FaTag,
  FaStore,
  FaSync,
} from "react-icons/fa";
import dayjs from "dayjs";

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
const { Panel } = Collapse;

// RefreshButton component
const RefreshButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.RepotagemodelSlice.loading);

  const handleRefresh = () => {
    dispatch(fetchJobPostings());
  };

  return (
    <Button
      type="primary"
      icon={<FaSync className={loading ? "animate-spin" : ""} />}
      onClick={handleRefresh}
      disabled={loading}
      className="mb-4 bg-blue-500 hover:bg-blue-600 border-none"
    >
      {loading ? "در حال بروزرسانی..." : "بروزرسانی لیست"}
    </Button>
  );
};

// Main component
const SENDED_RESOME: React.FC = () => {
  const dispatch = useAppDispatch();
  const jobPostings = useAppSelector((state) => state.RepotagemodelSlice.data);

  const [selectedResume, setSelectedResume] = useState<Resume | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isInterviewModalVisible, setIsInterviewModalVisible] = useState(false);
  const [interviewDatetime, setInterviewDatetime] =
    useState<dayjs.Dayjs | null>(null);

  const getStatusColor = (status: ResumeStatus): string => {
    switch (status) {
      case ResumeStatus.UNSEEN:
        return "#1890ff";
      case ResumeStatus.SEEN:
        return "#52c41a";
      case ResumeStatus.PENDING_INTERVIEW:
        return "#faad14";
      case ResumeStatus.REJECTED:
        return "#f5222d";
      default:
        return "#d9d9d9";
    }
  };

  const getStatusIcon = (status: ResumeStatus) => {
    switch (status) {
      case ResumeStatus.UNSEEN:
        return <FaFileAlt />;
      case ResumeStatus.SEEN:
        return <FaEye />;
      case ResumeStatus.PENDING_INTERVIEW:
        return <FaHourglassHalf />;
      case ResumeStatus.REJECTED:
        return <FaTimesCircle />;
      default:
        return null;
    }
  };

  const showModal = (resume: Resume) => {
    setSelectedResume(resume);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleInviteToInterview = () => {
    setIsInterviewModalVisible(true);
  };

  const handleInterviewModalCancel = () => {
    setIsInterviewModalVisible(false);
    setInterviewDatetime(null);
  };

  const handleInterviewSubmit = () => {
    if (selectedResume && interviewDatetime) {
      const jobId = jobPostings.find((job) =>
        job.resumes.some((resume) => resume.id === selectedResume.id)
      )?.id;
      if (jobId) {
        dispatch(
          scheduleInterview({
            jobId,
            resumeId: selectedResume.id,
            interview: {
              datetime: interviewDatetime.format("YYYY/MM/DD HH:mm"),
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
          setIsModalVisible(false);
          setIsInterviewModalVisible(false);
          setInterviewDatetime(null);
        });
      }
    } else {
      message.error("لطفاً تاریخ و ساعت مصاحبه را مشخص کنید.");
    }
  };

  const handleReject = () => {
    if (selectedResume) {
      const jobId = jobPostings.find((job) =>
        job.resumes.some((resume) => resume.id === selectedResume.id)
      )?.id;
      if (jobId) {
        dispatch(
          updateResumeStatus({
            jobId,
            resumeId: selectedResume.id,
            status: ResumeStatus.REJECTED,
          })
        );
        message.error(`رزومه ${selectedResume.name} رد شد.`);
        setIsModalVisible(false);
      }
    }
  };

  return (
    <div
      className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl"
      dir="rtl"
    >
      <RefreshButton />
      <Card
        className="w-full shadow-md border-none"
        title={
          <Title level={4} className="text-right text-white mb-0">
            رزومه‌های ارسالی
          </Title>
        }
        headStyle={{ background: "#1890ff", borderBottom: "none" }}
        bodyStyle={{ padding: "24px" }}
      >
        <Collapse
          expandIcon={({ isActive }) => (
            <FaChevronDown
              className={`transition-transform ${
                isActive ? "rotate-180" : ""
              } text-blue-600`}
            />
          )}
          expandIconPosition="end"
          className="bg-transparent border-none"
        >
          {jobPostings.map((jobPosting) => (
            <Panel
              header={
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center text-blue-700">
                    <FaBriefcase className="ml-2" />
                    <Text strong>{jobPosting.title}</Text>
                  </div>
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <Tooltip title="موقعیت مکانی">
                      <Text className="flex items-center">
                        <FaMapMarkerAlt className="ml-1" />
                        {jobPosting.location}
                      </Text>
                    </Tooltip>
                    <Tooltip title="محدوده حقوق">
                      <Text className="flex items-center">
                        <FaMoneyBillWave className="ml-1" />
                        {jobPosting.price}
                      </Text>
                    </Tooltip>
                  </div>
                </div>
              }
              key={jobPosting.id}
              className="mb-4 rounded-lg overflow-hidden border bg-black/5 border-gray-200"
            >
              <div className="mb-4 flex flex-wrap justify-between items-center gap-4">
                <Tooltip title="جنسیت">
                  <Text className="flex items-center">
                    <FaVenusMars className="ml-1" />
                    {jobPosting.gender === 0
                      ? "مرد و زن"
                      : jobPosting.gender === 1
                      ? "مرد"
                      : "زن"}
                  </Text>
                </Tooltip>
                <Tooltip title="ساعت همکاری">
                  <Text className="flex items-center">
                    <FaClock className="ml-1" />
                    {jobPosting.saatHamkari}
                  </Text>
                </Tooltip>
                <Tooltip title="عنوان شغلی">
                  <Text className="flex items-center">
                    <FaUserTie className="ml-1" />
                    {jobPosting.title}
                  </Text>
                </Tooltip>
                <Tooltip title="شماره نظام پزشکی">
                  <Text className="flex items-center">
                    <FaStethoscope className="ml-1" />
                    {jobPosting.nezam}
                  </Text>
                </Tooltip>
                <Tooltip title="نام داروخانه">
                  <Text className="flex items-center">
                    <FaStore className="ml-1" />
                    {jobPosting.fromKarfarma.name}
                  </Text>
                </Tooltip>
                {jobPosting.fori && (
                  <Tag color="red" icon={<FaClock />}>
                    فوری
                  </Tag>
                )}
              </div>
              <Paragraph>{jobPosting.desc}</Paragraph>
              <div className="mt-4">
                {jobPosting.tags.map((tag, index) => (
                  <Tag
                    key={index}
                    color="blue"
                    icon={<FaTag />}
                    className="ml-2 mb-2"
                  >
                    {tag}
                  </Tag>
                ))}
              </div>
              <List
                dataSource={jobPosting.resumes}
                renderItem={(item) => (
                  <List.Item
                    key={item.id}
                    className="bg-gray-50 rounded-lg p-4 mb-4 shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    <div className="w-full flex justify-between items-center p-5">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Button
                          type="primary"
                          icon={<FaFileAlt className="ml-2" />}
                          className="bg-blue-600 hover:bg-blue-700 border-none flex items-center"
                          onClick={() => showModal(item)}
                        >
                          مشاهده‌ی رزومه
                        </Button>
                        <Tag
                          color={getStatusColor(item.status)}
                          icon={getStatusIcon(item.status)}
                          className="flex items-center px-3 py-1 rounded-full"
                        >
                          {item.status}
                        </Tag>
                      </div>
                      <Text strong className="text-lg">
                        {item.name}
                      </Text>
                    </div>
                  </List.Item>
                )}
              />
            </Panel>
          ))}
        </Collapse>
      </Card>
      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={1000}
        bodyStyle={{ padding: 0 }}
        className="resume-modal"
      >
        {selectedResume && (
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 bg-gradient-to-b from-blue-600 to-blue-800 text-white p-6">
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full bg-white mx-auto mb-4 flex items-center justify-center">
                  <FaUser className="text-6xl text-blue-600" />
                </div>
                <Title level={3} className="text-white mb-2">
                  {selectedResume.name}
                </Title>
                <Text className="text-blue-200">
                  {
                    jobPostings.find((job) =>
                      job.resumes.includes(selectedResume)
                    )?.title
                  }
                </Text>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <FaEnvelope className="mr-2" />
                  <Text className="text-white">{selectedResume.email}</Text>
                </div>
                <div className="flex items-center">
                  <FaPhone className="mr-2" />
                  <Text className="text-white">{selectedResume.phone}</Text>
                </div>
                <div className="flex items-center">
                  <FaGlobe className="mr-2" />
                  <Text className="text-white">{selectedResume.website}</Text>
                </div>
              </div>
              <div className="mb-6">
                <Title level={4} className="text-white mb-2">
                  زبان‌ها
                </Title>
                <div className="flex flex-wrap gap-2">
                  {selectedResume.languages.map((language, index) => (
                    <Tag key={index} color="blue">
                      {language}
                    </Tag>
                  ))}
                </div>
              </div>
              <div>
                <Title level={4} className="text-white mb-4">
                  مهارت‌ها
                </Title>
                <div className="space-y-4">
                  {selectedResume.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <Text className="text-white">{skill.name}</Text>
                        <div className="flex items-center">
                          <Text className="text-white mr-1">
                            {skill.level}%
                          </Text>
                          <FaStar className="text-yellow-400" />
                        </div>
                      </div>
                      <Progress
                        percent={skill.level}
                        showInfo={false}
                        strokeColor="#ffffff"
                        trailColor="rgba(255,255,255,0.3)"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 p-6 bg-white">
              <Paragraph>{selectedResume.description}</Paragraph>
              <div className="mt-6">
                <Title level={4} className="flex items-center mb-2">
                  <FaGraduationCap className="ml-2" />
                  تحصیلات
                </Title>
                <Paragraph>{selectedResume.education}</Paragraph>
              </div>
              <div className="mt-6">
                <Title level={4} className="flex items-center mb-2">
                  <FaBriefcase className="ml-2" />
                  تجربه کاری
                </Title>
                <Paragraph>{selectedResume.experience}</Paragraph>
              </div>
              <div className="mt-8 flex justify-between">
                <Button
                  type="primary"
                  icon={<FaCheck className="ml-2" />}
                  onClick={handleInviteToInterview}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-none text-lg py-3 px-6 h-auto"
                >
                  دعوت به مصاحبه
                </Button>
                <Button
                  type="primary"
                  icon={<FaTimes className="ml-2" />}
                  onClick={handleReject}
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 border-none text-lg py-3 px-6 h-auto"
                >
                  رد کردن
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
      <Modal
        title="تعیین زمان مصاحبه"
        open={isInterviewModalVisible}
        onCancel={handleInterviewModalCancel}
        footer={[
          <Button key="back" onClick={handleInterviewModalCancel}>
            انصراف
          </Button>,
          <Button key="submit" type="primary" onClick={handleInterviewSubmit}>
            تأیید و ارسال دعوت‌نامه
          </Button>,
        ]}
      >
        <div className="space-y-4">
          <div>
            <Text>تاریخ و زمان مصاحبه:</Text>
            <DatePicker
              className="w-full mt-2"
              showTime
              format="YYYY/MM/DD HH:mm"
              placeholder="انتخاب تاریخ و زمان"
              onChange={(value) => setInterviewDatetime(value)}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SENDED_RESOME;
