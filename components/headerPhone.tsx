"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Login_off(props: { select: string; handler: any }) {
  return (
    <div className="flex flex-row items-center justify-between rounded-0 w-full h-88px py-14px pb-14px px-98px pr-98px space-x-9px bg-ffffff">
      <>
        <div className="flex flex-row items-center justify-center rounded-6 w-174px h-40px py-8px pb-8px px-16px pr-16px space-x-8px bg-1967d2">
          <>
            <>
              <Image
                src={"/Vector_gmJinF3.svg"}
                alt={""}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                className="rounded-0 w-16px h-16px"
              />
            </>
            <p className="rounded-0 w-fit h-fit text-ffffff font-medium text-sm">
              ثبت نام/ ورود
            </p>
          </>
        </div>
        <div className="flex flex-row items-center rounded-0 w-fit h-fit space-x-9px">
          <>
            <div className="flex flex-row items-center justify-center rounded-0 w-fit h-fit py-4px pb-4px px-20px pr-20px">
              <>
                <Link
                  href={"aboutus"}
                  className="rounded-0 w-fit h-fit text-212121 font-medium text-base"
                >
                  درباره ما
                </Link>
              </>
            </div>
            <div className="flex flex-row items-center justify-center rounded-0 w-fit h-fit py-4px pb-4px px-20px pr-20px">
              <>
                <Link
                  href={"contactus"}
                  className="rounded-0 w-fit h-fit text-212121 font-medium text-base"
                >
                  تماس با ما
                </Link>
              </>
            </div>
            <div className="flex flex-row items-center justify-center rounded-0 w-fit h-fit py-4px pb-4px px-20px pr-20px">
              <>
                <Link
                  href={"blogspage"}
                  className="rounded-0 w-fit h-fit text-212121 font-medium text-base"
                >
                  وبلاگ
                </Link>
              </>
            </div>
            <div className="flex flex-row items-center justify-center rounded-0 w-fit h-fit py-4px pb-4px px-20px pr-20px">
              <>
                <Link
                  href={"stores"}
                  className="rounded-0 w-fit h-fit text-212121 font-medium text-base"
                >
                  داروخانه‌ها
                </Link>
              </>
            </div>
            <div className="flex flex-row items-center justify-center rounded-0 w-fit h-fit py-4px pb-4px px-20px pr-20px">
              <>
                <Link
                  href={"repotages"}
                  className="rounded-0 w-fit h-fit text-212121 font-medium text-base"
                >
                  لیست آگهی ها
                </Link>
              </>
            </div>
            <Image
              src={"/logo.png"}
              alt={"logo"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              className="flex flex-col items-center justify-center w-61px h-61px"
            />
          </>
        </div>
      </>
    </div>
  );
}

function Login_on(props: { select: string; handler: any }) {
  return (
    <div className="flex flex-row items-center justify-between rounded-0 w-full h-88px py-14px pb-14px px-98px pr-98px space-x-9px bg-ffffff">
      <>
        <div className="flex flex-row items-center rounded-0 w-fit h-fit space-x-9px">
          <>
            <div className="flex flex-row items-center justify-center rounded-6 w-174px h-40px py-8px pb-8px px-16px pr-16px space-x-8px bg-1967d2">
              <>
                <>
                  <Image
                    src={"/Vector_DLMnuOX.svg"}
                    alt={""}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    className="rounded-0 w-16px h-16px"
                  />
                </>
                <p className="rounded-0 w-fit h-fit text-ffffff font-medium text-sm">
                  پروفایل
                </p>
              </>
            </div>
            <Image
              src={"/Group_48096192_x0lIi3S.svg"}
              alt={""}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              className="rounded-0 w-50px h-47px"
            />
          </>
        </div>
        <div className="flex flex-row items-center rounded-0 w-fit h-fit space-x-9px">
          <>
            <div className="flex flex-row items-center justify-center rounded-0 w-fit h-fit py-4px pb-4px px-20px pr-20px">
              <>
                <p className="rounded-0 w-fit h-fit text-212121 font-medium text-base">
                  درباره ما
                </p>
              </>
            </div>
            <div className="flex flex-row items-center justify-center rounded-0 w-fit h-fit py-4px pb-4px px-20px pr-20px">
              <>
                <p className="rounded-0 w-fit h-fit text-212121 font-medium text-base">
                  تماس با ما
                </p>
              </>
            </div>
            <div className="flex flex-row items-center justify-center rounded-0 w-fit h-fit py-4px pb-4px px-20px pr-20px">
              <>
                <p className="rounded-0 w-fit h-fit text-212121 font-medium text-base">
                  وبلاگ
                </p>
              </>
            </div>
            <div className="flex flex-row items-center justify-center rounded-0 w-fit h-fit py-4px pb-4px px-20px pr-20px">
              <>
                <p className="rounded-0 w-fit h-fit text-212121 font-medium text-base">
                  داروخانه‌ها
                </p>
              </>
            </div>
            <div className="flex flex-row items-center justify-center rounded-0 w-fit h-fit py-4px pb-4px px-20px pr-20px">
              <>
                <p className="rounded-0 w-fit h-fit text-212121 font-medium text-base">
                  لیست آگهی ها
                </p>
              </>
            </div>
            <Image
              src={"/logo.png"}
              alt={"logo"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              className="flex flex-col items-center justify-center rounded-0 w-61px h-61px"
            />
          </>
        </div>
      </>
    </div>
  );
}

export default function headerPhone() {
  const [select, selectHandler] = useState("off");

  switch (select) {
    case "off":
      return <Login_off select={select} handler={selectHandler} />;
    case "on":
      return <Login_on select={select} handler={selectHandler} />;
    default:
      return;
  }
}
