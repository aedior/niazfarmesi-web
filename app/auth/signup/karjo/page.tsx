"use client";

import "react-modern-calendar-datepicker/lib/DatePicker.css";

// import _signupImage from "@/public/selectType_fBRKpQ3.png";
import Image from "next/image";
import { FileUpload, MapInput, Select } from "@/components/UI";
import DatePicker, { DayValue } from "react-modern-calendar-datepicker";
import { useState } from "react";
import { useAppSelector } from "@/store/HOCs";
import { KarjoEnum, UserEnum } from "@/store/user/slice";
import { redirect } from "next/navigation";
import { karjo2text } from "@/core";

enum Tahsil {
  DANESHJO = 1,
  SIKL = 2,
  DIPLOM = 3,
  KARSHENASI = 4,
  ARSHADE = 5,
  DOKTORA = 6,
}

export default function signup() {
  const [onvan, onvanHandler] = useState<number | undefined>();
  const [lName, lNameHandler] = useState<string>("");
  const [fName, fNameHandler] = useState<string>("");
  const [birthdate, birthdateHandler] = useState<DayValue>(null);
  const [gender, genderHandler] = useState<number | undefined>();
  const [sokonatlatlong, sokonatlatlongHandler] = useState();
  const [tahsilat_file, tahsilat_fileHandler] = useState();
  const [tahsilat, tahsilatHandler] = useState<number | undefined>();
  const [worked_file, worked_fileHandler] = useState();
  const [worked, workedHandler] = useState<number | undefined>();
  const [nezam, nezamHandler] = useState<number | undefined>();
  const [meliNo_file, meliNo_fileHandler] = useState();
  const [meliNo, meliNoHandler] = useState<string>("");
  const [moaref, moarefHandler] = useState<string>("");
  const [ashnaii, ashnaiiHandler] = useState<number | undefined>();
  const [teknesian_file, teknesian_fileHandler] = useState();
  const [teknesian, teknesianHandler] = useState<number | undefined>();
  const [mortabet_file, mortabet_fileHandler] = useState();
  const [mortabet, mortabetHandler] = useState<number | undefined>();
  const [narmAfzar, narmAfzarHandler] = useState<number | undefined>();
  const [soPishine_file, soPishine_fileHandler] = useState();
  const [soPishine, soPishineHandler] = useState<number | undefined>();
  const [saatBazAmozy_file, saatBazAmozy_fileHandler] = useState();
  const [saatBazAmozy, saatBazAmozyHandler] = useState<number | undefined>();

  const { user, inLogin } = useAppSelector((store) => store.user);

  if (user?.type !== UserEnum.KARJO || inLogin !== "signup") redirect("/auth");

  return (
    <div
      // style={{ backgroundImage: `url(${_signupImage.src})` }}
      className="flex flex-col items-center justify-center rounded-0 w-full min-h-screen py-130px pb-130px bg-212121/10"
    >
      <div className="flex flex-row justify-center rounded-24 w-970px h-fit py-24px pb-24px px-24px pr-24px space-x-24px drop-shadow-0px12px-000000 bg-ffffff">
        <div className="flex flex-col items-center justify-center rounded-0 w-374px h-full space-y-16px">
          <Image
            src={"/Rectangle_4_0wSXtMV.png"}
            alt={"Rectangle 4"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            className="rounded-16 w-full h-555px"
          />

          <Image
            src={"/Rectangle_4_ZrEf9qo.png"}
            alt={"Rectangle 29410"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            className="rounded-16 w-full h-560px"
          />

          <Image
            src={"/Rectangle_4_KuUNmqr.png"}
            alt={"Rectangle 29411"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            className="rounded-16 w-full h-560px"
          />

          <Image
            src={"/Rectangle_29436_MgVTujH.png"}
            alt={"Rectangle 29436"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            className="rounded-16 w-full h-338px"
          />
        </div>
        <div className="flex flex-col justify-end items-center space-y-20">
          <div className="flex flex-col items-center justify-between rounded-0 w-524px h-full space-y-23px">
            <Image
              src={"/logo.png"}
              alt={"logo"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              className="flex flex-col items-center justify-center rounded-0 w-112px h-112px"
            />
            <div className="flex flex-col items-center justify-center rounded-full w-141px h-141px py-44px pb-44px px-35px pr-35px bg-e3e3e3">
              <Image
                src={"/Vector_pj3OLzj.svg"}
                alt={""}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                className="rounded-0 w-71px h-52px"
              />
            </div>
            <div className="flex flex-col rounded-0 w-150px h-48px min-h-40px">
              <div className="flex flex-col items-center justify-center rounded-8 w-full h-full bg-1967d2">
                <p className="rounded-0 w-fit h-fit text-ffffff font-bold text-sm">
                  آپلود عکس پروفایل
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end justify-center rounded-0 w-full min-h-40px space-y-8px">
              <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
                عنوان شغلی خود را انتخاب کنید
              </p>
              <Select
                handler={onvanHandler}
                value={onvan}
                choices={karjo2text}
                className="flex flex-row items-center justify-center border-1 border-c4c4c4 rounded-5 w-full h-42px min-w-240px px-8px pr-8px bg-ffffff"
              />
            </div>
            <div className="flex flex-row items-center rounded-0 w-fit h-fit space-x-24px">
              <div className="flex flex-col items-end rounded-0 w-full h-full min-h-40px space-y-8px">
                <p className="rounded-0 w-full h-fit text-1e1e1e text-right font-medium text-sm">
                  نام خانوادگی
                </p>
                <input
                  dir={"rtl"}
                  value={lName}
                  onChange={(e) => lNameHandler(e.target.value)}
                  className="flex flex-row items-center border-1 border-c4c4c4 rounded-5 w-full h-full min-w-240px py-12px px-16px bg-ffffff outline-none"
                />
              </div>
              <div className="flex flex-col items-end rounded-0 w-full h-full min-h-40px space-y-8px">
                <p className="rounded-0 w-full h-fit text-1e1e1e text-right font-medium text-sm">
                  نام
                </p>
                <input
                  dir={"rtl"}
                  value={fName}
                  onChange={(e) => fNameHandler(e.target.value)}
                  className="flex flex-row items-center border-1 border-c4c4c4 rounded-5 w-full h-full min-w-240px py-12px px-16px bg-ffffff outline-none"
                />
              </div>
            </div>
            <div className="flex flex-row items-end justify-center rounded-0 w-full h-fit space-x-8px">
              <div className="flex flex-col items-end rounded-0 w-full h-full min-h-40px space-y-8px">
                <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
                  تاریخ تولد
                </p>
                <DatePicker
                  value={birthdate}
                  onChange={(date) => birthdateHandler(date)}
                  locale={"fa"}
                  shouldHighlightWeekends={true}
                  inputClassName={
                    "h-11 rounded-5 w-full outline-none border-1 border-1e1e1e"
                  }
                  wrapperClassName="w-full border-0"
                  inputPlaceholder={""}
                />
              </div>
              <div className="flex flex-col items-end justify-center rounded-0 w-full h-fit min-h-40px space-y-8px">
                <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
                  جنسیت
                </p>
                <Select
                  handler={genderHandler}
                  value={gender}
                  choices={{ 0: "مرد", 1: "زن" }}
                  className="flex flex-row items-center justify-center border-1 border-c4c4c4 rounded-5 w-full h-42px min-w-240px px-8px pr-8px bg-ffffff"
                />
              </div>
            </div>
            <div className="flex flex-col items-end rounded-0 w-489px h-fit">
              <p className="rounded-0 w-fit h-fit text-212121 text-center font-medium text-sm">
                محل سکونت خود را روی نقشه انتخاب کنید
              </p>
            </div>
            <MapInput handler={sokonatlatlongHandler} />
            <div className="flex flex-row items-center justify-center rounded-0 w-full h-fit space-x-22px">
              <FileUpload
                text={"آپلود مدارک"}
                name={"karjo_tahsilat_file"}
                value={tahsilat_file}
                handler={tahsilat_fileHandler}
                className="flex flex-col relative items-center justify-center rounded-8 w-full h-40px bg-1967d2 font-bold text-sm"
              />
              <div className="flex flex-col items-end justify-center rounded-0 w-full min-h-40px space-y-8px">
                <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
                  وضعیت تحصیلات
                </p>
                <Select
                  handler={tahsilatHandler}
                  value={tahsilat}
                  choices={{
                    [Tahsil.DANESHJO]: "دانشجو",
                    [Tahsil.SIKL]: "سیکل",
                    [Tahsil.DIPLOM]: "دیپلم",
                    [Tahsil.KARSHENASI]: "کارشناسی",
                    [Tahsil.ARSHADE]: "ارشد",
                    [Tahsil.DOKTORA]: "دکتری",
                  }}
                  className="flex flex-row items-center justify-center border-1 border-c4c4c4 rounded-5 w-full h-42px min-w-240px px-8px pr-8px bg-ffffff"
                />
                <p className="rounded-0 w-full h-fit text-1552c3 text-right text-10px">
                  در صورت فارغ‌التحصیلی، کارت نظام خود را همراه با مدرک تحصیلی
                  آپلود کنید
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-center justify-center rounded-0 w-full h-fit space-x-22px">
              <div className="flex flex-col items-end justify-center rounded-0 w-full min-h-40px space-y-8px">
                <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
                  آیا سابقه کار دارید
                </p>
                <Select
                  handler={workedHandler}
                  value={worked}
                  choices={{ 1: "بله", 0: "خیر" }}
                  className="flex flex-row items-center justify-center border-1 border-c4c4c4 rounded-5 w-full h-42px min-w-240px px-8px pr-8px bg-ffffff"
                />
                <p className="rounded-0 w-full h-fit text-1552c3 text-right text-10px">
                  می‌توانید سوابق بیمه خود را سایت تامین‌من دریافت و در این قسمت
                  آپلود کنید
                </p>
              </div>
              {worked == 1 ? (
                <FileUpload
                  text={"آپلود مدارک"}
                  name={"karjo_worked_file"}
                  value={worked_file}
                  handler={worked_fileHandler}
                  className="flex flex-col relative items-center justify-center rounded-8 w-full h-40px bg-1967d2 text-ffffff font-bold text-sm"
                />
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-row items-end justify-center rounded-0 w-full h-fit space-x-22px">
              <div className="flex flex-col items-end justify-center rounded-0 w-full min-h-40px space-y-8px">
                <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
                  وضعیت نظام وظیفه
                </p>
                <Select
                  handler={nezamHandler}
                  value={nezam}
                  choices={{ 0: "معاف", 1: "مشمول", 2: "پایان خدمت" }}
                  className="flex flex-row items-center justify-center border-1 border-c4c4c4 rounded-5 w-full h-42px min-w-240px px-8px pr-8px bg-ffffff"
                />
              </div>
              {worked == 1 ? (
                <FileUpload
                  text={"آپلود مدارک"}
                  name={"karjo_worked_file"}
                  value={worked_file}
                  handler={worked_fileHandler}
                  className="flex flex-col relative items-center justify-center rounded-8 w-full h-40px bg-1967d2 text-ffffff font-bold text-sm"
                />
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-row items-end justify-center rounded-0 w-full h-fit space-x-22px">
              <FileUpload
                text={"آپلود مدارک"}
                name={"karjo_meliNo_file"}
                value={meliNo_file}
                handler={meliNo_fileHandler}
                className="flex flex-col relative items-center justify-center rounded-8 w-full h-40px bg-1967d2 text-ffffff font-bold text-sm"
              />
              <div className="flex flex-col items-end rounded-0 w-full h-full min-h-40px space-y-8px">
                <p className="rounded-0 w-full h-fit text-1e1e1e text-right font-medium text-sm">
                  شماره ملی / شماره اختصاصی
                </p>
                <input
                  dir={"rtl"}
                  value={meliNo}
                  onChange={(e) => meliNoHandler(e.target.value)}
                  className="flex flex-row items-center border-1 border-c4c4c4 rounded-5 w-full h-full min-w-240px py-12px px-16px bg-ffffff outline-none"
                />
              </div>
            </div>
            <div className="flex flex-row justify-center rounded-0 w-524px h-fit space-x-13px items-center">
              <div className="flex flex-col items-end rounded-0 w-full h-full min-h-40px space-y-8px">
                <p className="rounded-0 w-full h-fit text-1e1e1e text-right font-medium text-sm">
                  کد معرف
                </p>
                <input
                  dir={"rtl"}
                  value={moaref}
                  onChange={(e) => moarefHandler(e.target.value)}
                  className="flex flex-row items-center border-1 border-c4c4c4 rounded-5 w-full h-11 min-w-240px py-12px px-16px bg-ffffff outline-none"
                />
              </div>
              <div className="flex flex-col items-end justify-center rounded-0 w-full min-h-40px space-y-8px">
                <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
                  نحوه‌ی آشنایی با سایت
                </p>
                <Select
                  handler={ashnaiiHandler}
                  value={ashnaii}
                  choices={{
                    0: "معرف",
                    1: "در دارو خانه",
                    2: "گوگل",
                  }}
                  className="flex flex-row items-center justify-center border-1 border-c4c4c4 rounded-5 w-full h-42px min-w-240px px-8px pr-8px bg-ffffff"
                />
              </div>
            </div>
            <div className="flex flex-row-reverse items-end justify-center rounded-0 w-full h-fit space-x-22px space-x-reverse">
              <div className="flex flex-col items-end justify-center rounded-0 w-full min-h-40px space-y-8px">
                <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
                  آیا دارای گواهی تکنسین دارویی یا آرایشی بهداشتی هستید ؟
                </p>
                <Select
                  handler={teknesianHandler}
                  value={teknesian}
                  choices={{ 1: "بله", 0: "خیر" }}
                  className="flex flex-row-reverse items-center justify-center border-1 border-c4c4c4 rounded-5 w-full h-42px min-w-240px px-8px pr-8px bg-ffffff"
                />
              </div>
              {teknesian == 1 ? (
                <FileUpload
                  text={"آپلود مدارک"}
                  name={"karjo_teknesian_file"}
                  value={teknesian_file}
                  handler={teknesian_fileHandler}
                  className="flex flex-col relative items-center justify-center rounded-8 w-full h-40px bg-1967d2 text-ffffff font-bold text-sm"
                />
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-row-reverse items-end justify-center rounded-0 w-full h-fit space-x-22px space-x-reverse">
              <div className="flex flex-col items-end justify-center rounded-0 w-full min-h-40px space-y-8px">
                <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
                  آیا دارای گواهی مرتبط هستید ؟
                </p>
                <Select
                  handler={mortabetHandler}
                  value={mortabet}
                  choices={{ 1: "بله", 0: "خیر" }}
                  className="flex flex-row items-center justify-center border-1 border-c4c4c4 rounded-5 w-full h-42px min-w-240px px-8px pr-8px bg-ffffff"
                />
              </div>
              {mortabet == 1 ? (
                <FileUpload
                  text={"آپلود مدارک"}
                  name={"karjo_mortabet_file"}
                  value={mortabet_file}
                  handler={mortabet_fileHandler}
                  className="flex flex-col relative items-center justify-center rounded-8 w-full h-40px bg-1967d2 text-ffffff font-bold text-sm"
                />
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col items-end justify-center rounded-0 w-full min-h-40px space-y-8px">
              <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
                در صورت آشنایی با نرم‌افزار مرتبط، آن را انتخاب کنید
              </p>
              <Select
                handler={narmAfzarHandler}
                value={narmAfzar}
                choices={{
                  0: "ایمن افزار شایگان",
                  1: "قانون فارما",
                  2: "فارماسی",
                  3: "دارو پردازان",
                  4: "ماندگار",
                  5: "وکیل",
                }}
                className="flex flex-row items-center justify-center border-1 border-c4c4c4 rounded-5 w-full h-42px min-w-240px px-8px pr-8px bg-ffffff"
              />
            </div>
            <div className="flex flex-row-reverse items-end justify-center rounded-0 w-full h-fit space-x-22px space-x-reverse">
              <div className="flex flex-col items-end justify-center rounded-0 w-full min-h-40px space-y-8px">
                <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
                  آیا دارای گواهی عدم سو پیشینه هستید ؟
                </p>
                <Select
                  handler={soPishineHandler}
                  value={soPishine}
                  choices={{ 1: "بله", 0: "خیر" }}
                  className="flex flex-row items-center justify-center border-1 border-c4c4c4 rounded-5 w-full h-42px min-w-240px px-8px pr-8px bg-ffffff"
                />
              </div>
              {soPishine == 1 ? (
                <FileUpload
                  text={"آپلود مدارک"}
                  name={"karjo_soPishine_file"}
                  value={soPishine_file}
                  handler={soPishine_fileHandler}
                  className="flex flex-col relative items-center justify-center rounded-8 w-full h-40px bg-1967d2 text-ffffff font-bold text-sm"
                />
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-row-reverse items-end justify-center rounded-0 w-full h-fit space-x-22px space-x-reverse">
              <div className="flex flex-col items-end justify-center rounded-0 w-full min-h-40px space-y-8px">
                <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
                  آیا دارای ساعات بازآموزی معتبر هستید ؟
                </p>
                <Select
                  handler={saatBazAmozyHandler}
                  value={saatBazAmozy}
                  choices={{ 1: "بله", 0: "خیر" }}
                  className="flex flex-row items-center justify-center border-1 border-c4c4c4 rounded-5 w-full h-42px min-w-240px px-8px pr-8px bg-ffffff"
                />
              </div>
              {saatBazAmozy == 1 ? (
                <FileUpload
                  text={"آپلود مدارک"}
                  name={"karjo_saatBazAmozy_file"}
                  value={saatBazAmozy_file}
                  handler={saatBazAmozy_fileHandler}
                  className="flex flex-col relative items-center justify-center rounded-8 w-full h-40px bg-1967d2 text-ffffff font-bold text-sm"
                />
              ) : (
                <></>
              )}
            </div>
          </div>
          <button className="flex flex-row items-center justify-center rounded-8 w-373px h-fit py-12px px-20px pr-20px bg-1967d2">
            <p className="rounded-0 w-fit h-fit text-ffffff text-right font-medium text-sm">
              مرحله بعد
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
