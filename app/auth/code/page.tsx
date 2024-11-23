"use client";

import { Button, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/HOCs";
import { redirect, useRouter } from "next/navigation";
import md5 from "md5";
import { loginThunk } from "@/store/thunk/login";
import { CgSpinner } from "react-icons/cg";
import OTPInput from "@/components/otp";

export default function PhoneKarfarmaOTP() {
  const [code, setCode] = useState("");
  const [wait, setWait] = useState(false);
  const user = useAppSelector((store) => store.user.user);
  const phone = user?.phone;
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!phone) {
      router.push("/auth/role");
    }
  }, [phone, router]);

  const handleLogin = async () => {
    if (code.length !== 6) {
      message.error("لطفا کد 6 رقمی را وارد کنید");
      return;
    }

    setWait(true);
    try {
      await dispatch(
        loginThunk({
          username: phone!,
          password: `${md5(code)}@niazfarmesi`,
        })
      );
      message.success("ورود موفقیت‌آمیز");
      router.push("/dashboard");
    } catch (error) {
      message.error("خطا در ورود. لطفا دوباره تلاش کنید");
    } finally {
      setWait(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
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
            width={140}
            height={140}
            className="object-contain"
          />
          <div className="text-center space-y-6 w-full max-w-md">
            <h1 className="text-2xl font-bold text-gray-800">
              به نیازفارمسی خوش آمدید
            </h1>
            <p className="text-lg font-semibold text-gray-700">
              لطفا برای ثبت نام، اطلاعات زیر را وارد کنید
            </p>
            <p className="text-md font-medium text-gray-600">
              کد ارسال شده را وارد کنید
            </p>
            <OTPInput length={6} onComplete={setCode} />
            <Button
              onClick={handleLogin}
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg"
              disabled={wait}
            >
              {wait ? (
                <CgSpinner className="animate-spin mx-auto text-2xl" />
              ) : (
                "ورود به حساب کاربری"
              )}
            </Button>
            <Link
              href="/auth/register"
              className="block text-gray-600 hover:text-gray-800"
            >
              حساب کاربری ندارید ؟ ثبت‌نام کنید
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
