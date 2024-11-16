"use client";

import { useAppSelector } from "@/store/HOCs";
import { UserEnum } from "@/store/user/slice";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function signdoneKarfarma() {
  return (
    <div
      //   style={{ backgroundImage: `url(${_signdoneKarfarmaImage.src})` }}
      className="flex flex-col rounded-0 w-full min-h-screen items-center justify-center bg-black/10"
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
            className="flex flex-col items-center justify-center rounded-0 w-140px h-140px bg-d9d9d9"
          />
          <div className="flex flex-col items-center rounded-0 w-398px h-fit space-y-90px">
            <p className="rounded-0 w-full h-fit text-212121 text-center font-bold text-xl">
              به نیازفارمسی خوش آمدید
            </p>
            <div className="flex flex-col items-center rounded-0 w-full h-fit space-y-16px">
              <p className="rounded-0 w-full h-fit text-24a247 text-center font-bold text-xl">
                از اینکه به ما اعتماد کردید متشکریم
              </p>
              <p className="rounded-0 w-full h-fit text-24a247 font-medium text-lg">
                کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت
              </p>
            </div>
            <div className="flex flex-col items-center rounded-0 w-373px h-fit">
              <Link
                href={"/auth/karfarma"}
                className="flex flex-row items-center justify-center rounded-8 w-full h-fit py-12px pb-12px px-20px pr-20px bg-1967d2"
              >
                <p className="rounded-0 w-fit h-fit text-ffffff text-right font-medium text-sm">
                  ورود به حساب کاربری
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
