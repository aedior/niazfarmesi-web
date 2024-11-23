"use client";

import { Button, Input, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { CgSpinner } from "react-icons/cg";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { useAppDispatch } from "@/store/HOCs";
import { setPhoneNumber, UserEnum } from "@/store/user/slice";
import { axios4Auth } from "@/core/axios";

const PHONE_REGEX = /^09\d{9}$/;

export default function PhoneKarfarma({
  params,
}: {
  params: { role: "karfarma" | "karjo" };
}) {
  const router = useRouter();
  const { role } = params;
  const [phone, setPhone] = useState<string>("");
  const [inSendSms, setInSendSms] = useState(false);
  const dispatch = useAppDispatch();

  if (!["karfarma", "karjo"].includes(role)) {
    return redirect("/not-found");
  }

  const type = role === "karfarma" ? UserEnum.KARFARMA : UserEnum.KARJO;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const validateAndSubmit = async () => {
    if (!PHONE_REGEX.test(phone)) {
      message.error("شماره موبایل باید با 09 شروع شود و 11 رقم باشد");
      return;
    }

    setInSendSms(true);
    try {
      await axios4Auth.post("/send-sms", { phone, type });
      dispatch(setPhoneNumber({ phone, type }));
      router.push(`/auth/code`);
    } catch (error) {
      message.error("خطا در ارسال پیامک. لطفا دوباره تلاش کنید");
    } finally {
      setInSendSms(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 md:p-8 flex flex-col md:flex-row gap-6">
        <Image
          src="/Rectangle_4_KuUNmqr.png"
          alt="Rectangle 4"
          width={374}
          height={725}
          className="rounded-lg object-cover hidden md:block"
        />
        <div className="flex flex-col items-center justify-center w-full space-y-8">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="object-contain"
          />
          <div className="text-center space-y-4 w-full max-w-md">
            <h1 className="text-2xl font-bold text-gray-800">
              به نیازفارمسی خوش آمدید
            </h1>
            <p className="text-lg font-semibold text-gray-700">
              لطفا برای ثبت نام، اطلاعات زیر را وارد کنید
            </p>
            <p className="text-md font-medium text-gray-600">
              شماره‌ی موبایل خود را وارد کنید
            </p>
            <Input
              dir="rtl"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="09xxxxxxxxx"
              className="text-right"
              maxLength={11}
            />
            <Button
              onClick={validateAndSubmit}
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg"
              disabled={inSendSms}
            >
              {inSendSms ? (
                <CgSpinner className="animate-spin mx-auto text-2xl" />
              ) : (
                "مرحله‌ی بعد"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
