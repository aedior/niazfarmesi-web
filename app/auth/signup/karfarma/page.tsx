"use client";

import { Button } from "@/components/UI";
import { useAppDispatch, useAppSelector } from "@/store/HOCs";
import { KarfarmaInnerType, UserEnum } from "@/store/user/slice";
import { SendKarfarmaInnerTypeThunk } from "@/store/user/thunk";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function typeKarfarmaType() {
  const { user, inLogin } = useAppSelector((store) => store.user);

  if (user?.type !== UserEnum.KARFARMA || inLogin !== "signup")
    redirect("/auth");

  const [type, typeHandler] = useState<number>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (typeof type === "number") {
      dispatch(SendKarfarmaInnerTypeThunk({ type }));
      redirect("/auth/call-with-you");
    }
  }, [type]);

  return (
    <div
      // style={{ backgroundImage: `url(${_selectType_KarfarmaImage.src})` }}
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
            className="flex flex-col items-center justify-center rounded-0 w-140px h-140px"
          />
          <div className="flex flex-col items-center rounded-0 w-373px h-fit space-y-59px">
            <p className="rounded-0 w-full h-fit text-212121 text-center font-bold text-xl">
              به نیازفارمسی خوش آمدید
            </p>
            <p className="rounded-0 w-full h-fit text-212121 text-center font-bold text-2xl">
              لطفا برای ایجاد آگهی، ثبت‌نام کنید
            </p>
            <p className="rounded-0 w-full h-fit text-212121  text-center font-bold text-xl">
              ابتدا نقش خود را انتخاب کنید
            </p>
            <div className="flex flex-col items-center rounded-0 w-full h-fit space-y-25px">
              <div className="flex flex-row items-center justify-center rounded-0 w-full h-fit space-x-44px">
                <Button
                  onClick={() =>
                    typeHandler(KarfarmaInnerType.DRUGSTORE_PERSON)
                  }
                  className="flex flex-col hover:bg-blue-200 rounded-xl border-2 items-center justify-center w-40 h-40 space-y-5 p-5"
                >
                  <p className="font-bold text-center">مسئول فنی داروخانه</p>
                </Button>
                <Button
                  onClick={() =>
                    typeHandler(KarfarmaInnerType.DRUGSTORE_DOCTOR)
                  }
                  className="flex flex-col hover:bg-blue-200 rounded-xl border-2 items-center justify-center w-40 h-40 space-y-5 p-5"
                >
                  <p className="font-bold text-center">
                    دکتر دارو ساز داروخانه
                  </p>
                </Button>
              </div>
              <div className="flex flex-row items-center justify-center rounded-0 w-full h-fit space-x-44px">
                <Button
                  onClick={() => typeHandler(KarfarmaInnerType.COMPANY_PERSON)}
                  className="flex flex-col hover:bg-blue-200 rounded-xl border-2 items-center justify-center w-40 h-40 space-y-5 p-5"
                >
                  <p className="font-bold text-center">بازاریاب شرکت پخش</p>
                </Button>
                <Button
                  onClick={() => typeHandler(KarfarmaInnerType.COMPANY_DOCTOR)}
                  className="flex flex-col hover:bg-blue-200 rounded-xl border-2 items-center justify-center w-40 h-40 space-y-5 p-5"
                >
                  <p className="font-bold text-center">
                    دکتر دارو ساز شرکت پخش
                  </p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
