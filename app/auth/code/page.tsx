"use client";

import Image from "next/image";
import Link from "next/link";
import OTP_Input from "@/components/otp";
import { useEffect, useState } from "react";
import { axios4Auth } from "@/core/axios";
import { useAppDispatch, useAppSelector } from "@/store/HOCs";
import { redirect } from "next/navigation";
import md5 from "md5";
import { loginThunk } from "@/store/thunk/login";
import { Button } from "@/components/UI";
import { CgSpinner } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { UserEnum } from "@/store/user/slice";

export default function phoneKarfarmaOTP() {
  const [code, codeHandler] = useState("");
  const [wait, waitHandler] = useState(false);
  const user = useAppSelector((store) => store.user.user);
  const phone = user?.phone;
  const dispatch = useAppDispatch();
  const router = useRouter();

  if (phone === undefined) {
    return redirect("/auth/role");
  }

  useEffect(() => {
    // FIXME: code length better
    if (code.length >= 6) {
      dispatch(
        loginThunk({
          username: phone,
          password: `${md5(code)}@niazfarmesi`,
        })
      );
    }
  }, [code]);

  return (
    <div
      //   style={{ backgroundImage: `url(${_phoneKarfarmaOTPImage.src})` }}
      className="flex flex-col rounded-0 w-full min-h-screen bg-black/10 items-center justify-center bg-black/20"
    >
      <div className="flex flex-row rounded-24 w-970px h-fit py-24px pb-24px px-24px pr-24px space-x-24px drop-shadow-0px12px-000000 bg-ffffff">
        <Image
          src={"/Rectangle_4_KuUNmqr.png"}
          alt={"Rectangle 4"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          className="rounded-16 w-374px h-725px"
        />
        <div className="flex flex-col items-center justify-center rounded-0 w-full h-full space-y-61px">
          <Image
            src={"/logo.png"}
            alt={"logo"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            className="flex flex-col items-center justify-center rounded-0 w-140px h-140px"
          />
          <div className="flex flex-col items-center rounded-0 w-418px h-fit space-y-88px">
            <div className="flex flex-col items-center rounded-0 w-full h-fit py-10px pb-10px px-10px pr-10px">
              <div className="flex flex-col items-center rounded-0 w-full h-fit space-y-24px">
                <p className="rounded-0 w-full h-fit text-212121 text-center font-bold text-xl">
                  به نیازفارمسی خوش آمدید
                </p>
                <p className="rounded-0 w-full h-fit text-212121 font-bold text-2xl">
                  لطفا برای ثبت نام، اطلاعات زیر را وارد کنید
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center rounded-0 w-260px h-fit space-y-36px">
              <p className="rounded-0 w-full h-fit text-212121 text-center font-bold text-xl">
                کد ارسال شده را وارد کنید
              </p>
              <OTP_Input
                onEnd={() => {
                  waitHandler(true);
                }}
                onChange={(num: number) => {
                  codeHandler(num.toString());
                }}
              />
            </div>
            <div className="flex flex-col items-center rounded-0 w-373px h-fit space-y-19px">
              <Button
                onClick={async () => {
                  waitHandler(true);
                }}
                className="flex flex-row items-center justify-center rounded-8 w-full h-14 py-12px pb-12px px-20px pr-20px bg-1967d2"
              >
                {wait ? (
                  <CgSpinner className="text-white/80 text-3xl animate-spin" />
                ) : (
                  <p className="rounded-0 w-fit h-fit text-ffffff text-right font-medium text-sm">
                    ورود به حساب کاربری
                  </p>
                )}
              </Button>
              <Link
                href={"login"}
                className="rounded-0 w-full h-fit text-212121 text-center font-medium text-base"
              >
                حساب کاربری ندارید ؟ ثبت‌نام کنید
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
