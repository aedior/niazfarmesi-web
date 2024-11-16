"use client";

// import _selectTypeImage from "@/public/selectType_fBRKpQ3.png";
import Image from "next/image";
import Link from "next/link";

export default function selectType() {
  return (
    <div
      // style={{ backgroundImage: `url(${_selectTypeImage.src})` }}
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
            className="flex flex-col items-center justify-center  w-140px h-140px"
          />
          <div className="flex flex-col items-center rounded-0 w-373px h-fit space-y-59px">
            <p className="rounded-0 w-full h-fit text-212121 text-center font-bold text-xl">
              به نیازفارمسی خوش آمدید
            </p>
            <p className="rounded-0 w-full h-fit text-212121 text-center font-bold text-2xl">
              لطفا برای ایجاد آگهی، ثبت‌نام کنید
            </p>
            <p className="rounded-0 w-full h-fit text-212121 text-center font-bold text-xl">
              ابتدا نقش خود را انتخاب کنید
            </p>
            <div className="flex flex-col items-center rounded-0 w-full h-fit space-y-21px">
              <div className="flex flex-row items-center justify-center rounded-0 w-full h-fit space-x-44px">
                <Link
                  href={"/auth/karjo"}
                  className="flex flex-col hover:bg-blue-200 rounded-xl border-2 items-center justify-center w-40 h-40 space-y-5"
                >
                  <Image
                    src="Vector_TTQC1Fp.svg"
                    sizes="100vw"
                    width={0}
                    height={0}
                    alt=""
                    className="h-10 w-10 "
                  />
                  <p className="font-bold ">کارجو</p>
                </Link>
                <Link
                  href={"/auth/karfarma"}
                  className="flex flex-col hover:bg-blue-200 rounded-xl border-2 items-center justify-center w-40 h-40 space-y-5"
                >
                  <Image
                    src="Vector_TTQC1Fp.svg"
                    sizes="100vw"
                    width={0}
                    height={0}
                    alt=""
                    className="h-10 w-10 "
                  />
                  <p className="font-bold ">کارفرما</p>
                </Link>
              </div>
              <div className="flex flex-row justify-center rounded-0 w-full h-fit space-x-16px">
                <Link
                  href={"login"}
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
