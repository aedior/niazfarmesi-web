"use client";

import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/store/HOCs";
import { FaBell } from "react-icons/fa";

export default function header() {
  const inLogin = useAppSelector((store) => store.user).inLogin;

  return (
    <div className="flex flex-row items-center justify-between rounded-0 w-full h-88px py-14px pb-14px px-98px pr-98px space-x-9px bg-ffffff">
      {inLogin === "accepted" ? (
        <div className="flex flex-row items-center rounded-0 w-fit h-fit space-x-9px">
          <Link
            href={"/panel/karfarma"}
            className="flex flex-row items-center justify-center rounded-6 w-174px h-40px py-8px pb-8px px-16px pr-16px space-x-8px bg-1967d2"
          >
            <Image
              src={"/Vector_22h1GHh.svg"}
              alt={""}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              className="rounded-0 w-16px h-16px"
            />
            <p className="rounded-0 w-fit h-fit text-ffffff font-medium text-sm">
              پروفایل
            </p>
          </Link>
          <div className="h-full aspect-square border p-3 rounded-xl text-xl text-1967d2">
            <FaBell />
          </div>
        </div>
      ) : (
        <Link
          href={"/auth"}
          className="flex flex-row items-center justify-center rounded-6 w-174px h-40px py-8px pb-8px px-16px pr-16px space-x-8px bg-1967d2"
        >
          <Image
            src={"/Vector_Yiv5P58.svg"}
            alt={""}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            className="rounded-0 w-16px h-16px"
          />

          <p className="rounded-0 w-fit h-fit text-ffffff  font-medium text-sm">
            ثبت نام/ ورود
          </p>
        </Link>
      )}
      <div className="flex flex-row items-center rounded-0 w-fit h-fit space-x-9px">
        <div className="flex flex-row items-center rounded-0 w-fit h-fit space-x-9px">
          <div className="flex flex-row items-center justify-center rounded-0 w-fit h-fit py-4px pb-4px px-20px pr-20px">
            <Link
              href={"/aboutus"}
              className="rounded-0 w-fit h-fit text-212121 font-medium text-base"
            >
              درباره ما
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center rounded-0 w-fit h-fit py-4px pb-4px px-20px pr-20px">
            <Link
              href={"/contactus"}
              className="rounded-0 w-fit h-fit text-212121 font-medium text-base"
            >
              تماس با ما
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center rounded-0 w-fit h-fit py-4px pb-4px px-20px pr-20px">
            <Link
              href={"/blogs"}
              className="rounded-0 w-fit h-fit text-212121 font-medium text-base"
            >
              وبلاگ
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center rounded-0 w-fit h-fit py-4px pb-4px px-20px pr-20px">
            <Link
              href={"/drugstores"}
              className="rounded-0 w-fit h-fit text-212121 font-medium text-base"
            >
              داروخانه‌ها
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center rounded-0 w-fit h-fit py-4px pb-4px px-20px pr-20px">
            <Link
              href={"/repotages"}
              className="rounded-0 w-fit h-fit text-212121 font-medium text-base"
            >
              لیست آگهی ها
            </Link>
          </div>
          <Link href="/home">
            <Image
              src={"/logo.png"}
              alt={"logo"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              className="flex flex-col items-center justify-center w-61px h-61px"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
