"use client";

import React from "react";
import {
  Card,
  Row,
  Col,
  Typography,
  Button,
  Alert,
  List,
  Tag,
  Statistic,
  Progress,
} from "antd";
import {
  FaExclamationTriangle,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaBell,
  FaUserMd,
} from "react-icons/fa";

const { Title, Text } = Typography;

const EVENTS: React.FC = () => {
  const upcomingEvents = [
    {
      title: "دوره‌ی بازآموزی گوارش",
      date: "30 اردیبهشت",
      icon: <FaClock className="text-blue-500" />,
      color: "blue",
    },
    {
      title: "سمینار تازه‌های داروسازی",
      date: "15 خرداد",
      location: "دانشکده داروسازی",
      icon: <FaMapMarkerAlt className="text-green-500" />,
      color: "green",
    },
    {
      title: "پایان اعتبار پروانه فعالیت",
      date: "10 تیر",
      icon: <FaExclamationTriangle className="text-red-500" />,
      color: "red",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 rounded-lg" dir="rtl">
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          <Card
            title={
              <span className="flex items-center justify-between">
                <span className="flex items-center">
                  <FaBell className="text-yellow-500 mr-2" />
                  هشدارها و رویدادهای مهم
                </span>
                <Tag color="blue">{upcomingEvents.length} رویداد</Tag>
              </span>
            }
            className="w-full shadow-md"
          >
            <Alert
              message="هشدار امنیتی"
              description={
                <div>
                  <Text strong>کارجو 1 برای آگهی 1</Text>
                  <br />
                  <Text>لطفا مدارک شخص را با رزومه‌ی وی مقایسه کنید</Text>
                </div>
              }
              type="error"
              showIcon
              icon={<FaExclamationTriangle />}
              action={
                <Button size="small" danger>
                  متوجه شدم
                </Button>
              }
              className="mb-4"
            />
            <List
              itemLayout="horizontal"
              dataSource={upcomingEvents}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<div className="text-2xl">{item.icon}</div>}
                    title={<Text strong>{item.title}</Text>}
                    description={
                      <div>
                        <Tag color={item.color}>{item.date}</Tag>
                        {item.location && (
                          <Tag color="default">{item.location}</Tag>
                        )}
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
            <div className="mt-4 text-left">
              <Button type="primary" icon={<FaCalendarAlt />}>
                مشاهده‌ی همه رویدادها
              </Button>
            </div>
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card className="w-full shadow-md mb-4">
            <Statistic
              title={
                <span className="flex items-center">
                  <FaUserMd className="mr-2 text-blue-500" /> وضعیت حرفه‌ای
                </span>
              }
              value={93}
              suffix="/ 100"
              prefix={<FaCheckCircle className="text-green-500 mr-2" />}
            />
            <Progress percent={93} showInfo={false} strokeColor="#4CAF50" />
            <Text type="secondary">امتیاز شما بر اساس فعالیت‌های حرفه‌ای</Text>
          </Card>
          <Card
            title={
              <span className="flex items-center">
                <FaCalendarAlt className="text-green-500 mr-2" />
                آمار رویدادها
              </span>
            }
            className="w-full shadow-md"
          >
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Statistic
                  title="رویدادهای آتی"
                  value={5}
                  prefix={<FaClock className="mr-2" />}
                />
              </Col>
              <Col span={12}>
                <Statistic
                  title="رویدادهای گذشته"
                  value={12}
                  prefix={<FaCheckCircle className="mr-2" />}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EVENTS;
