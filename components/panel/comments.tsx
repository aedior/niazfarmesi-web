"use client";

import { useAppSelector, useAppDispatch } from "@/store/HOCs";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FileUpload,
  Select,
  TitledInput,
  TitledSelect,
  TitledTextArea,
} from "@/components/UI";
import Selfrepotage from "@/components/selfRepotage";
import Menu from "../menu";
import DASHBOARD from "./dashboard";

export default function COMMENTS() {
  return (
    <div className="flex flex-col rounded-16 w-870px h-fit py-24px pb-24px px-24px pr-24px space-y-40px drop-shadow-0px4px-000000 bg-ffffff">
      <div className="flex flex-col items-end rounded-0 w-822px h-fit space-y-24px">
        <p className="rounded-0 w-full h-fit text-212121 text-right font-medium text-lg">
          نظرات
        </p>
        <div className="flex flex-col rounded-0 w-full h-fit">
          <Image
            src={"/Group_48096298_kPPAe1h.svg"}
            alt={""}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            className="rounded-8 w-822px h-90px"
          />
        </div>
      </div>
      <div className="flex flex-col items-center rounded-0 w-822px h-fit space-y-79px">
        <div className="flex flex-col items-center rounded-0 w-full h-fit space-y-64px">
          <div className="flex flex-col items-end rounded-0 w-full h-fit space-y-42px">
            <p className="rounded-0 w-full h-fit text-212121 text-right font-medium text-lg">
              نظر خود را بگویید
            </p>
            <div className="flex flex-col justify-between border-1 border-c4c4c4 rounded-8 w-full h-165px py-10px pb-10px px-10px pr-10px space-y-222px bg-ffffff">
              <p className="rounded-0 w-full h-fit text-c4c4c4 backdrop:text-right text-xs">
                ... دیسیونب ار دوخ نتم
              </p>
              <div className="border-1 border-8b8b8b rounded-0 w-10px h-10px"></div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center rounded-8 w-274px h-fit py-14px pb-14px px-24px pr-24px bg-1967d2">
            <p className="rounded-0 w-fit h-fit text-ffffff  text-right font-medium text-sm">
              ثبت نظر
            </p>
          </div>
        </div>
        <p className="rounded-0 w-full h-fit text-1967d2 text-center font-medium text-sm">
          نظر شما پس از بررسی و تایید توسط تیم پشتیبانی، منتشر می‌شود
        </p>
      </div>
    </div>
  );
}
