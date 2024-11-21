import React from "react";
import { Tooltip, Tag } from "antd";
import {
  FaMapMarkerAlt,
  FaClock,
  FaDollarSign,
  FaUsers,
  FaGlobe,
  FaRegComment,
} from "react-icons/fa";
import Link from "next/link";
import { karjo2text } from "@/core";
import { JobPosting } from "@/store/slice/repotageModel";

const genderMap = {
  0: "هر دو",
  1: "مرد",
  2: "زن",
};

export default function Repotagecard(job: JobPosting) {
  return (
    <div
      style={{ direction: "rtl" }}
      className="bg-white rounded-lg shadow-md p-4 mb-4 hover:bg-gray-50 transition duration-150 ease-in-out"
    >
      <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-3 sm:space-x-reverse">
        <img
          src={job.fromKarfarma.logo}
          alt={job.fromKarfarma.name}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-semibold text-gray-900 truncate mb-1 sm:mb-0">
              نیازمند یک {karjo2text[job.title]} هستیم
            </h2>
            {job.fori && (
              <Tag color="red" className="sm:mr-2 mb-2 sm:mb-0 inline-block">
                فوری
              </Tag>
            )}
          </div>
          <p className="text-sm text-gray-500">{job.fromKarfarma.name}</p>
          <div className="mt-2 flex flex-wrap items-center text-sm text-gray-500">
            <span className="flex items-center ml-3 mb-1">
              <FaMapMarkerAlt className="ml-1" />
              {job.location}
            </span>
            <span className="flex items-center ml-3 mb-1">
              <FaClock className="ml-1" />
              {job.saatHamkari}
            </span>
            <span className="flex items-center ml-3 mb-1">
              <FaDollarSign className="ml-1" />
              {job.price}
            </span>
            <span className="flex items-center ml-3 mb-1">
              <FaUsers className="ml-1" />
              {genderMap[job.gender as keyof typeof genderMap]}
            </span>
            {job.website && (
              <span className="flex items-center ml-3 mb-1">
                <FaGlobe className="ml-1" />
                {job.website}
              </span>
            )}
          </div>
          <div className="mt-2 flex flex-wrap">
            {job.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs font-semibold ml-2 mb-2 px-2.5 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex space-x-4 space-x-reverse mb-2 sm:mb-0">
              <Tooltip title={`نظام پزشکی: ${job.nezam}`}>
                <span className="text-sm text-gray-500 hover:text-blue-500 cursor-pointer">
                  نظام پزشکی
                </span>
              </Tooltip>
              <Tooltip title={`نام معتبر: ${job.nameMotabar}`}>
                <span className="text-sm text-gray-500 hover:text-blue-500 cursor-pointer">
                  نام معتبر
                </span>
              </Tooltip>
            </div>
            <Link href={`/repotages/${job.id}`}>
              <span className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
                <FaRegComment className="ml-1" />
                مشاهده جزئیات
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-2 text-xs text-gray-400 text-right">
        {new Date(job.created_at).toLocaleDateString("fa-IR")}
      </div>
    </div>
  );
}
