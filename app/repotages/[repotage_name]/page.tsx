"use client";

import Link from "next/link";
import Image from "next/image";
import Markdown from "react-markdown";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/HOCs";
import { karjo2text } from "@/core";
import { Button } from "reactstrap";
import { IoMdClose } from "react-icons/io";
import { sendResomeThunk } from "@/store/thunk/repotage";
import {
  FiCalendar,
  FiDollarSign,
  FiUser,
  FiFileText,
  FiX,
  FiCheck,
  FiBriefcase,
  FiMapPin,
} from "react-icons/fi";
import { ForwardRefEditor } from "@/components/editor/ref";
import { useRouter } from "next/navigation";

export default function Repotage_name(props: {
  params: { repotage_name: string };
}) {
  const { repotage_name } = props.params;
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [introductionText, setIntroductionText] = useState("");
  const repotages = useAppSelector((store) => store.RepotagemodelSlice);
  const repotage = repotages.find((r) => r.id === parseInt(repotage_name));
  const inLogin = useAppSelector((store) => store.user.inLogin);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const hasApplied = false;

  if (!repotage) return null;
  const handleResumeSubmit = async () => {
    try {
      await dispatch(sendResomeThunk({ desc: introductionText }));
      setShowResumeModal(false);
      // Show success message
    } catch (error) {
      // Show error message
    }
  };
  return (
    <>
      <div className="flex flex-col items-center w-full min-h-screen bg-f5f5f5">
        <Header />
        <main className="flex flex-col items-center w-full mb-5">
          <div className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white">
            <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  {repotage.tags && repotage.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                      {repotage.fori && (
                        <span className="bg-orange-400 text-white text-sm py-1 px-3 rounded-full">
                          #فوری
                        </span>
                      )}
                      {repotage.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-200 text-blue-800 text-sm py-1 px-3 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {hasApplied ? (
                    <div className="flex items-center space-x-2 bg-green-500 text-white py-2 px-4 rounded-md">
                      <FiCheck />
                      <span>شما قبلاً درخواست داده‌اید</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        if (inLogin != "accepted") router.push("/auth");
                        else setShowResumeModal(true);
                      }}
                      className="bg-white text-blue-600 py-2 px-6 rounded-md hover:bg-blue-50 transition-colors text-lg font-semibold"
                    >
                      ارسال رزومه
                    </button>
                  )}
                </div>
                <div className="flex flex-row items-center">
                  <div className="mb-6 md:mb-0 text-center md:text-right">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                      نیازمند یک {karjo2text[repotage.onvan]} هستیم
                    </h1>
                    <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-2 md:space-y-0 md:space-x-4">
                      <div className="flex items-center space-x-2 mx-2 relative">
                        <div className="pr-8">
                          <span>{repotage.drugstoreName}</span>
                          <FiBriefcase className="text-white" />
                        </div>
                      </div>
                      <div className="flex items-center mx-2 space-x-2">
                        <span>{repotage.lat}</span>
                        <FiMapPin className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="aspect-square h-28 bg-white rounded-full flex items-center justify-center right-0 transform translate-x-1/2">
                    <span className="text-blue-600 text-xl font-semibold">
                      لوگو
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="flex flex-col md:flex-row w-full px-4 md:px-10 space-y-4 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/3 space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="font-bold text-xl text-gray-800 mb-6">نگاه سریع</p>
              <div className="flex items-center space-x-4 mb-5">
                <FiCalendar className="text-blue-500 text-2xl" />
                <div className="flex flex-col">
                  <p className="text-base font-medium text-gray-700">
                    تاریخ ارسال این آگهی
                  </p>
                  <p className="text-sm text-gray-600">
                    {new Date(repotage.created_at).toLocaleDateString("fa-IR")}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-5">
                <FiMapPin className="text-blue-500 text-2xl" />
                <div className="flex flex-col">
                  <p className="text-base font-medium text-gray-700">
                    موقعیت مکانی شغل
                  </p>
                  <p className="text-sm text-gray-600">{repotage.lat}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-5">
                <FiDollarSign className="text-blue-500 text-2xl" />
                <div className="flex flex-col">
                  <p className="text-base font-medium text-gray-700">
                    حقوق پیشنهادی
                  </p>
                  <p className="text-sm text-gray-600">{repotage.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-5">
                <FiUser className="text-blue-500 text-2xl" />
                <div className="flex flex-col">
                  <p className="text-base font-medium text-gray-700">
                    تجربه موردنیاز
                  </p>
                  <p className="text-sm text-gray-600">{repotage.gender}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FiFileText className="text-blue-500 text-2xl" />
                <div className="flex flex-col">
                  <p className="text-base font-medium text-gray-700">
                    مدرک موردنیاز
                  </p>
                  <p className="text-sm text-gray-600">
                    {repotage.nameMotabar}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-bold">موقعیت مکانی در نقشه</p>
              <iframe
                src={`//maps.google.com/maps?q=${repotage.lat},${repotage.long}&z=15&output=embed`}
                className="w-full h-48 rounded-md"
              />
            </div>
          </div>
          <div className="bg-white w-full md:w-2/3 p-5 rounded-lg shadow-md">
            <Markdown>{repotage.desc}</Markdown>
          </div>
        </div>
        <Footer />

        {showResumeModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl">
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FiX size={24} />
                </button>
                <h2 className="text-2xl font-bold">ارسال رزومه</h2>
              </div>
              <div
                style={{
                  direction: "rtl",
                }}
                className="mb-4"
              >
                <ForwardRefEditor
                  onChange={(content) => setIntroductionText(content)}
                  markdown=""
                  placeholder="لطفاً متن معرفی خود را اینجا بنویسید..."
                  contentEditableClassName="prose max-w-full"
                  className="border border-gray-300 rounded-md shadow-sm min-h-[200px] focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mt-6">
                <button
                  onClick={handleResumeSubmit}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  ارسال رزومه
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
