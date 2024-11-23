"use client";

import { useAppSelector } from "@/store/HOCs";
import { UserEnum } from "@/store/user/slice";
import Image from "next/image";
import Link from "next/link";
import { Card, Typography, Button } from "antd";

const { Title, Paragraph } = Typography;

export default function AcceptKarfarma() {
  const usertype = useAppSelector((store) => store.user).user?.type;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-4xl shadow-lg">
        <div className="flex flex-col md:flex-row gap-6">
          <Image
            src="/Rectangle_4_KuUNmqr.png"
            alt="Rectangle 4"
            width={374}
            height={725}
            className="rounded-lg object-cover hidden md:block"
          />
          <div className="flex flex-col items-center justify-center w-full space-y-6">
            <Image
              src="/logo.png"
              alt="logo"
              width={140}
              height={140}
              className="object-contain"
            />
            <div className="text-center space-y-4 w-full max-w-md">
              <Title level={3} className="text-gray-800">
                لطفا قوانین را مطالعه فرمایید
              </Title>
              <Paragraph className="text-right text-sm text-gray-600">
                فعال سازی حساب کاربری می بایست توسط مدیریت سایت و پس از بازبینی
                اطلاعات و مدارک بارگذاری شده توسط کاربر انجام می پذیرد لذا در
                تکمیل فرم ثبت نام و پروفایل کاربری نهایتِ دقت و اهمیت را لحاظ
                کنید. تا زمانی که فعال سازی پروفایل کاربری که در اسرع وقت توسط
                مدیریت سایت انجام شود؛ قابلیتِ مشاهده بخش های عمومی سایت صرفاً
                امکان پذیر می باشد. با توجه به اهمیت زمان بندی و برنامه ریزی
                شغلی در آگهی های سایت لطفاً از ارسال یا پذیرش رزومۀ کاری صرفاً
                به جهت کنجکاوی و مطلع شدن از شرایط شغلی پرهیز کنید.کلیۀ هماهنگی
                ها و مصاحبات شغلی پس از طی شدنِ مراحلِ ارسال یا پذیرش رزومۀ شغلی
                توسط کارفرما و کارجو انجام می پذیرد و سایت نیازفارمسی هیچ گونه
                مسئولیت از بابتِ مسائل پس از آگهی را عهده دار نمی باشد. با توجه
                به این که فرآیند احراز هویت ، فعال- -سازی حساب کاربری و انتشار
                آگهی ها پس از تأیید مدیریت سایت انجام می شود؛ از قرار دادنِ
                مطالب، تصاویر و توضیحاتِ خارج از عرفِ شرعی و قانونی بپرهیزید.
              </Paragraph>
            </div>
            <Link
              href={
                usertype === UserEnum.KARFARMA
                  ? "/auth/signup/karfarma"
                  : "/auth/signup/karjo"
              }
              passHref
            >
              <Button
                type="primary"
                size="large"
                className="w-full md:w-auto px-8 h-12 bg-blue-600 hover:bg-blue-700"
              >
                مرحله بعد
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
