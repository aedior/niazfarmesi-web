"use client";

import { useAppSelector } from "@/store/HOCs";
import { UserEnum } from "@/store/user/slice";
import Image from "next/image";
import Link from "next/link";

export default function acceptKarfarma() {
  const usertype = useAppSelector((store) => store.user).user?.type;
  return (
    <div
      //   style={{ backgroundImage: `url(${_acceptKarfarmaImage.src})` }}
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
            className="flex flex-col items-center justify-center  w-140px h-140px"
          />
          <div className="flex flex-col items-center rounded-0 w-full h-fit space-y-8px">
            <p className="rounded-0 w-full h-fit text-212121 text-center font-medium text-base">
              لطفا قوانین را مطالعه فرمایید
            </p>
            <p className="rounded-0 w-full h-fit text-424242 text-right text-sm">
              فعال سازی حساب کاربری می بایست توسط مدیریت سایت و پس از بازبینی
              اطلاعات و مدارک بارگذاری شده توسط کاربر انجام می پذیرد لذا در
              تکمیل فرم ثبت نام و پروفایل کاربری نهایتِ دقت و اهمیت را لحاظ
              کنید. تا زمانی که فعال سازی پروفایل کاربری که در اسرع وقت توسط
              مدیریت سایت انجام شود؛ قابلیتِ مشاهده بخش های عمومی سایت صرفاً
              امکان پذیر می باشد. با توجه به اهمیت زمان بندی و برنامه ریزی شغلی
              در آگهی های سایت لطفاً از ارسال یا پذیرش رزومۀ کاری صرفاً به جهت
              کنجکاوی و مطلع شدن از شرایط شغلی پرهیز کنید.کلیۀ هماهنگی ها و
              مصاحبات شغلی پس از طی شدنِ مراحلِ ارسال یا پذیرش رزومۀ شغلی توسط
              کارفرما و کارجو انجام می پذیرد و سایت نیازفارمسی هیچ گونه مسئولیت
              از بابتِ مسائل پس از آگهی را عهده دار نمی باشد. با توجه به این که
              فرآیند احراز هویت ، فعال- -سازی حساب کاربری و انتشار آگهی ها پس از
              تأیید مدیریت سایت انجام می شود؛ از قرار دادنِ مطالب، تصاویر و
              توضیحاتِ خارج از عرفِ شرعی و قانونی بپرهیزید.
            </p>
          </div>
          <Link
            href={
              usertype === UserEnum.KARFARMA
                ? "/auth/signup/karfarma"
                : "/auth/signup/karjo"
            }
            className="flex flex-row items-center justify-center rounded-6 w-390px h-40px py-8px pb-8px px-16px pr-16px bg-1967d2"
          >
            <p className="rounded-0 w-fit h-fit text-ffffff font-medium text-sm">
              مرحله بعد
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
