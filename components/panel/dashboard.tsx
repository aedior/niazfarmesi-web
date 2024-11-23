"use client";

import React from "react";
import { Card, Row, Col, Typography, Statistic, Progress } from "antd";
import {
  FaUserMd,
  FaBriefcase,
  FaCalendarCheck,
  FaBell,
  FaChartLine,
  FaTachometerAlt,
} from "react-icons/fa";
import { useAppSelector } from "@/store/HOCs";
import fa_IR from "antd/lib/locale/fa_IR";

const { Title, Text } = Typography;

const colors = {
  primary: "#3498db",
  secondary: "#2ecc71",
  tertiary: "#f39c12",
  quaternary: "#9b59b6",
  background: "#f0f2f5",
  cardBg: "#ffffff",
};

const DashboardFunction = ({ title, value, icon: Icon, color }) => (
  <Card
    className="w-full h-full shadow-md hover:shadow-lg transition-shadow duration-300"
    bodyStyle={{ backgroundColor: colors.cardBg }}
    style={{ borderRight: `8px solid ${color}` }}
  >
    <Statistic
      title={<Text className="text-right text-gray-600">{title}</Text>}
      value={value}
      valueStyle={{
        color: color,
        fontWeight: "bold",
        fontSize: "28px",
        textAlign: "right",
      }}
      prefix={<Icon className="text-2xl mr-2" style={{ color: color }} />}
    />
  </Card>
);

const SectionHeader = ({ icon: Icon, title, color }) => (
  <Title level={4} className="mb-4 flex items-center" style={{ color: color }}>
    <Icon className="mr-2" /> {title}
  </Title>
);

const DASHBOARD = () => {
  const messages = useAppSelector((store) => store.MessagesmodelSlice);

  return (
    <div
      className="p-6 rounded-lg"
      style={{ backgroundColor: colors.background }}
      dir="rtl"
    >
      <div className="mb-8">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={6}>
            <DashboardFunction
              title="آگهی‌های فعال"
              value={5}
              icon={FaBriefcase}
              color={colors.primary}
            />
          </Col>
          <Col xs={24} sm={12} md={6}>
            <DashboardFunction
              title="درخواست‌های جدید"
              value={3}
              icon={FaUserMd}
              color={colors.secondary}
            />
          </Col>
          <Col xs={24} sm={12} md={6}>
            <DashboardFunction
              title="قرارهای ملاقات"
              value={2}
              icon={FaCalendarCheck}
              color={colors.tertiary}
            />
          </Col>
          <Col xs={24} sm={12} md={6}>
            <DashboardFunction
              title="اعلان‌ها"
              value={7}
              icon={FaBell}
              color={colors.quaternary}
            />
          </Col>
        </Row>
      </div>
      <Row gutter={[16, 16]} className="mt-6">
        <Col xs={24} lg={16}>
          <Card
            title={
              <span className="flex items-center justify-between">
                <span style={{ color: colors.primary }}>
                  آمار بازدید پروفایل
                </span>
                <FaChartLine style={{ color: colors.primary }} />
              </span>
            }
            className="w-full shadow-md hover:shadow-lg transition-shadow duration-300"
            bodyStyle={{ backgroundColor: colors.cardBg }}
          >
            <div className="h-64 rounded-lg flex items-center justify-center p-4">
              <div className="w-full space-y-4">
                <div className="flex justify-between items-center">
                  <span style={{ color: colors.primary }}>بازدید امروز</span>
                  <Progress
                    percent={75}
                    strokeColor={colors.primary}
                    trailColor="#e0e0e0"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span style={{ color: colors.secondary }}>
                    بازدید این هفته
                  </span>
                  <Progress
                    percent={60}
                    strokeColor={colors.secondary}
                    trailColor="#e0e0e0"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span style={{ color: colors.tertiary }}>بازدید این ماه</span>
                  <Progress
                    percent={85}
                    strokeColor={colors.tertiary}
                    trailColor="#e0e0e0"
                  />
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card
            title={
              <span className="flex items-center justify-between">
                <span style={{ color: colors.quaternary }}>اعلان‌ها</span>
                <FaBell style={{ color: colors.quaternary }} />
              </span>
            }
            className="w-full shadow-md hover:shadow-lg transition-shadow duration-300"
            bodyStyle={{ backgroundColor: colors.cardBg }}
          >
            <div className="space-y-4 max-h-64 overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg"
                  style={{
                    backgroundColor: `${
                      colors[
                        ["primary", "secondary", "tertiary", "quaternary"][
                          index % 4
                        ]
                      ]
                    }20`,
                  }}
                >
                  <Text className="block text-right">{message.content}</Text>
                  <Text type="secondary" className="block text-left text-xs">
                    {message.time}
                  </Text>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DASHBOARD;
