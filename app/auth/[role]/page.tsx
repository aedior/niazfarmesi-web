"use client";

import { Button } from "@/components/UI";
import { axios4Auth, axiosNoUser } from "@/core/axios";
import { setPhoneNumber, UserEnum } from "@/store/user/slice";
// import _phoneKarfarmaImage from "@/public/selectType_fBRKpQ3.png";
import Image from "next/image";
import Link from "next/link";
import { CgSpinner } from "react-icons/cg";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/store/HOCs";

export default function phoneKarfarma({
  params,
}: {
  params: { role: "karfarma" | "karjo" };
}) {
  const router = useRouter();
  const { role } = params;
  const [phone, phoneHandler] = useState<number>();
  const [inSendSms, inSendSmsHandler] = useState(false);
  const [responsed, responsedHandler] = useState(false);
  const dispatch = useAppDispatch();
  // not found dynamic url
  if (!["karfarma", "karjo"].includes(role)) {
    return redirect("/not-found");
  }
  const type = role === "karfarma" ? UserEnum.KARFARMA : UserEnum.KARJO;

  useEffect(() => {
    if (responsed && phone !== undefined) {
      dispatch(
        setPhoneNumber({
          phone,
          type,
        })
      );
      router.push(`/auth/code`);
    }
  }, [responsed]);

  return (
    <div
      // style={{ backgroundImage: `url(${_phoneKarfarmaImage.src})` }}
      className="flex flex-col rounded-0 w-full min-h-screen items-center justify-center bg-212121/10"
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
            <div className="flex flex-col items-center rounded-0 w-355px h-fit space-y-21px">
              <p className="rounded-0 w-full h-fit text-212121 text-center font-bold text-xl">
                شماره‌ی موبایل خود را وارد کنید
              </p>
              <div className="flex flex-col items-end rounded-0 w-full h-fit min-h-40px space-y-8px">
                <input
                  dir={"rtl"}
                  value={phone}
                  onChange={(e) => phoneHandler(e.target.value)}
                  placeholder={"0900"}
                  className="flex flex-row justify-end border-1 border-c4c4c4 rounded-5 w-full h-36px min-w-240px py-12px pb-12px px-16px pr-16px bg-ffffff outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col items-center rounded-0 w-373px h-fit space-y-19px">
              <Button
                onClick={async () => {
                  inSendSmsHandler(true);
                  await axios4Auth.post("/send-sms", {
                    phone,
                    type,
                  });
                  responsedHandler(true);
                }}
                className="flex flex-row items-center justify-center rounded-8 w-full h-14 py-12px pb-12px px-20px pr-20px bg-1967d2"
              >
                {inSendSms && !responsed ? (
                  <CgSpinner className="text-white/80 text-3xl animate-spin" />
                ) : (
                  <p className="rounded-0 w-fit h-fit text-ffffff text-right font-medium text-sm">
                    مرحله‌ی بعد
                  </p>
                )}
              </Button>
              <div className="flex flex-row justify-center rounded-0 w-full h-fit space-x-16px">
                <Link
                  href={"auth"}
                  className="rounded-0 w-fit h-fit text-1967d2 text-center font-medium text-13px underline"
                >
                  وارد شوید
                </Link>
                <p className="rounded-0 w-fit h-fit text-212121 text-center font-medium text-13px">
                  حساب کاربری دارید ؟
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
