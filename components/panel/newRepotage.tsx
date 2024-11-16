"use client";

import { useState, useEffect } from "react";
import {
  Button,
  MapInput,
  Select,
  TitledInput,
  TitledNumber,
  TitledSelect,
  TitledTextArea,
} from "@/components/UI";
import { createNewRepotage } from "@/store/thunk/repotage";
import { useAppDispatch } from "@/store/HOCs";
import { KarjoEnum } from "@/store/user/slice";

export default function NEW_REPOTAGE() {
  const [gender, genderHandler] = useState<number | undefined>(0);
  const [name, nameHandler] = useState<string>("");
  const [location, locationHandler] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });
  const [nameMotabar, nameMotabarHandler] = useState<number | undefined>(0);
  const [nezam, nezamHandler] = useState<number | undefined>(0);
  const [saatHamkari, saatHamkariHandler] = useState<string>("");
  const [tarikhHamkari, tarikhHamkariHandler] = useState<string>("");
  const [desc, descHandler] = useState<string>("");
  const [price, priceHandler] = useState<number>(0);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-center justify-center rounded-16 w-870px h-fit py-19px pb-19px px-18px pr-18px space-y-31px drop-shadow-0px4px-000000 bg-ffffff">
      <p className="rounded-0 w-full h-fit text-212121 text-right font-medium text-lg">
        ثبت آگهی جدید
      </p>
      <div className="items-center justify-center rounded-0 w-full h-fit grid grid-cols-2 gap-5">
        <TitledSelect
          title="جنسیت"
          handler={genderHandler}
          value={gender}
          choices={{ 0: "مونث", 1: "مذکر", 2: "بدون اهمیت" }}
          className="flex flex-row items-center justify-center border-1 border-c4c4c4 rounded-5 w-full h-42px min-w-240px px-8px pr-8px bg-ffffff"
        />
        <TitledSelect
          title="عنوان شغل مورد نیاز"
          value={name}
          handler={nameHandler}
          choices={{
            [KarjoEnum.DAROKHANE]: "تکنسین داروخانه",
            [KarjoEnum.ARAYESHI]: "تکنسین آرایشی و بهداشتی",
            [KarjoEnum.SANDOGDAR]: "صندوقدار",
            [KarjoEnum.ANBARDAR]: "انباردار",
            [KarjoEnum.MASOLFANI]: "مسئول فنی",
            [KarjoEnum.GAEMMAGAM]: "قائم مقام",
            [KarjoEnum.KARAMOZ_DARO]: " کارآموز دارویی",
            [KarjoEnum.KARAMOZ_ARAYESHI]: " کارآموز آرایشی و بهداشتی",
          }}
          className="flex flex-row items-center justify-center border-1 border-c4c4c4 rounded-5 w-full h-42px min-w-240px px-8px pr-8px bg-ffffff"
        />

        <TitledSelect
          title="نامه معتبر از دانشگاه"
          handler={nameMotabarHandler}
          value={nameMotabar}
          choices={{ 0: "دارد", 1: "ندارد", 2: "بدون اهمیت" }}
          className="flex flex-row items-center justify-center border-1 border-c4c4c4 rounded-5 w-full h-42px min-w-240px px-8px pr-8px bg-ffffff"
        />
        <TitledSelect
          title="کارت نظام"
          handler={nezamHandler}
          value={nezam}
          choices={{ 0: "دارد", 1: "ندارد", 2: "بدون اهمیت" }}
          className="flex flex-row items-center justify-center border-1 border-c4c4c4 rounded-5 w-full h-42px min-w-240px px-8px pr-8px bg-ffffff"
        />
        <TitledSelect
          title="ساعت همکاری"
          handler={saatHamkariHandler}
          value={saatHamkari}
          choices={{
            1: "تمام وقت",
            2: "نیمه وقت",
            3: "پاره وقت",
          }}
          className="flex flex-row items-center justify-center border-1 border-c4c4c4 rounded-5 w-full h-42px min-w-240px px-8px pr-8px bg-ffffff"
        />
        <TitledInput
          input={{
            value: tarikhHamkari,
            onChange: (e) => tarikhHamkariHandler(e.target.value),
          }}
          title="تاریخ همکاری"
        />
      </div>
      <div className="flex flex-col items-end rounded-0 w-822px h-fit">
        <p className="rounded-0 w-full h-fit text-212121 text-right font-medium text-sm">
          موقعیت مکانی روی نقشه
        </p>
        <MapInput handler={locationHandler} />
      </div>
      <TitledNumber
        input={{
          value: price,
          onChange: (e) => priceHandler(e.target.value),
        }}
        title="مبلغ پرداختی"
        hint="مبلغ پرداختی به ازای هر ساعت کار"
      />
      <TitledTextArea
        input={{
          value: desc,
          onChange: (e) => descHandler(e.target.value),
        }}
        title="توضیحات"
        hint="توضیحات خود را برای کارجو بنویسید"
      />
      <div className="w-full">
        <Button
          onClick={() => {
            dispatch(
              createNewRepotage({
                gender,
                onvan: name,
                nameMotabar,
                nezam,
                saatHamkari,
                tarikhHamkari,
                price,
                desc,
                lat: location.lat,
                long: location.lng,
              })
            );
          }}
          className="flex flex-col items-center justify-center bg-1653c3 p-4 w-40 rounded-8 h-full bg-1bc455"
        >
          <p className="rounded-0 w-fit h-fit text-ffffff font-bold text-sm">
            ایجاد آگهی
          </p>
        </Button>
      </div>
    </div>
  );
}
