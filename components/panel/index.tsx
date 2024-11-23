"use client";

import { useAppSelector, useAppDispatch } from "@/store/HOCs";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Button,
  FileUpload,
  Select,
  TitledInput,
  TitledNumber,
  TitledSelect,
  TitledTextArea,
} from "@/components/UI";
import Selfrepotage from "@/components/selfRepotage";
import DASHBOARD from "./dashboard";
import PROFILE from "./profile";
import NEW_REPOTAGE from "./newRepotage";
import KIFPOOL from "./kifpool";
import SENDED_RESOME from "./sended-resome";
import SENDED_REPOTAGE from "./sended-repotage";
import SMS_PANEL from "./sms-panel";
import EVENTS from "./events";
import { ConfigProvider } from "antd";
import fa_IR from "antd/lib/locale/fa_IR";
import Menu, { KarfarmaPanelItem } from "../menu";

function Select_select16() {
  return (
    <div className="flex flex-col items-center rounded-16 w-870px h-fit py-24px pb-24px px-24px pr-24px space-y-45px drop-shadow-0px4px-000000 bg-ffffff">
      <p className="rounded-0 w-full h-fit text-212121 text-right font-medium text-lg">
        پنل پیامک
      </p>
      <div className="flex flex-col items-end rounded-0 w-472px h-fit space-y-16px">
        <div className="flex flex-row rounded-0 w-full h-fit space-x-78px">
          <p className="rounded-0 w-fit h-fit text-1967d2 text-1967d2 text-right font-medium text-sm">
            مدت زمان نامحدود
          </p>
          <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-lg">
            پرداخت با تمامی بانک‌ها امکان‌پذیر است
          </p>
        </div>
        <Image
          src={"/Group_48095953_csyPuMy.svg"}
          alt={""}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          className="rounded-8 w-472px h-50px"
        />
      </div>
      <div className="flex flex-row rounded-0 w-822px h-fit space-x-48px">
        <Image
          src={"/Group_48096228_bVuRQUj.svg"}
          alt={""}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          className="rounded-16 w-387px h-72px"
        />
        <Image
          src={"/Group_48096226_uBVm0qB.svg"}
          alt={""}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          className="rounded-16 w-387px h-72px"
        />
        <Image
          src={"/Group_48096227_pYEJilo.svg"}
          alt={""}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          className="rounded-16 w-387px h-72px"
        />
      </div>
      <Image
        src={"/Group_48096229_QEwpSsg.svg"}
        alt={""}
        width={"0"}
        height={"0"}
        sizes={"100vw"}
        className="rounded-0 w-362px h-213px"
      />
      <div className="flex flex-row items-center justify-center rounded-8 w-274px h-48px py-14px pb-14px px-24px pr-24px bg-1967d2">
        <p className="rounded-0 w-fit h-fit text-ffffff text-right font-medium text-sm">
          رفتن به درگاه پرداخت
        </p>
      </div>
    </div>
  );
}
function Select_select10() {
  return (
    <div className="flex flex-col rounded-0 w-870px h-fit space-y-24px">
      <div className="flex flex-col items-center justify-center rounded-16 w-full h-395px py-24px pb-24px px-24px pr-24px space-y-56px drop-shadow-0px4px-000000 bg-ffffff">
        <p className="rounded-0 w-full h-fit text-212121 text-right font-medium text-lg">
          محصولات
        </p>
        <div className="flex flex-row items-center rounded-0 w-fit h-fit space-x-147px">
          <Image
            src={"/Group_48096269_mwayjGO.svg"}
            alt={""}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            className="rounded-8 w-299px h-151px"
          />
          <Image
            src={"/Group_48096268_3GYZjzp.svg"}
            alt={""}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            className="rounded-8 w-299px h-151px"
          />
        </div>
        <div className="flex flex-row items-center justify-center rounded-8 w-274px h-fit py-14px pb-14px pl-20px pr-24px space-x-4px bg-1967d2">
          <div className="rounded-0 w-18px h-18px">
            <Image
              src={"/Plus_uilj973.svg"}
              alt={""}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              className="rounded-0 w-16px h-16px"
            />
          </div>
          <p className="rounded-0 w-fit h-fit text-ffffff text-right font-medium text-sm">
            افزودن داروی جدید
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end rounded-16 w-full h-360px py-24px pb-24px px-23px pr-23px space-y-20px drop-shadow-0px4px-000000 bg-ffffff">
        <p className="rounded-0 w-full h-fit text-212121 text-right font-medium text-lg">
          سبد دارویی
        </p>
        <div className="flex flex-row items-end justify-between border-2 border-c4c4c4 rounded-16 w-822px h-118px py-12px pb-12px px-13px pr-13px space-x-383px">
          <div className="flex flex-row items-center justify-center rounded-8 w-fit h-fit py-12px pb-12px px-20px pr-20px bg-1967d2">
            <p className="rounded-0 w-fit h-fit text-ffffff text-right font-medium text-sm">
              دیدن اطلاعات شرکت
            </p>
          </div>
          <div className="flex flex-row rounded-0 w-fit h-fit space-x-16px">
            <div className="flex flex-col items-end rounded-0 w-145px h-fit space-y-16px">
              <p className="rounded-0 w-full h-fit text-212121 text-right font-bold text-lg">
                شرکت پخش نیازدارو
              </p>
              <div className="flex flex-row items-center rounded-0 w-fit h-fit">
                <p className="rounded-0 w-fit h-fit text-424242 text-right font-medium text-sm">
                  مازندران، آمل
                </p>
              </div>
            </div>
            <div className="rounded-12 w-93px h-93px bg-c4c4c4"></div>
          </div>
        </div>
        <div className="flex flex-row items-end justify-between border-2 border-c4c4c4 rounded-16 w-822px h-118px py-12px pb-12px px-13px pr-13px space-x-383px">
          <div className="flex flex-row items-center justify-center rounded-8 w-fit h-fit py-12px pb-12px px-20px pr-20px bg-1967d2">
            <p className="rounded-0 w-fit h-fit text-ffffff text-right font-medium text-sm">
              دیدن اطلاعات شرکت
            </p>
          </div>
          <div className="flex flex-row rounded-0 w-fit h-fit space-x-16px">
            <div className="flex flex-col items-end rounded-0 w-145px h-fit space-y-16px">
              <p className="rounded-0 w-full h-fit text-212121 text-right font-bold text-lg">
                شرکت پخش نیازدارو
              </p>
              <div className="flex flex-row items-center rounded-0 w-fit h-fit">
                <p className="rounded-0 w-fit h-fit text-424242 text-right font-medium text-sm">
                  مازندران، آمل
                </p>
              </div>
            </div>
            <div className="rounded-12 w-93px h-93px bg-c4c4c4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const panel = {
  [KarfarmaPanelItem.DASHBOARD]: <DASHBOARD />,
  [KarfarmaPanelItem.PROFILE]: <PROFILE />,
  [KarfarmaPanelItem.NEW_REPOTAGE]: <NEW_REPOTAGE />,
  [KarfarmaPanelItem.KIFPOOL]: <KIFPOOL />,
  [KarfarmaPanelItem.SENDED_RESOME]: <SENDED_RESOME />,
  //   [KarfarmaPanelItem.SENDED_REPOTAGE]: <SENDED_REPOTAGE />,
  [KarfarmaPanelItem.SMS_PANEL]: <SMS_PANEL />,
  [KarfarmaPanelItem.EVENTS]: <EVENTS />,
  // select10: <Select_select10 />,
  // select16: <Select_select16 />,
};

export default function karfarmaPanel() {
  const [selectedItem, setSelectedItem] = useState<KarfarmaPanelItem>(
    KarfarmaPanelItem.DASHBOARD
  );

  const handleMenuSelect = (item: KarfarmaPanelItem) => {
    setSelectedItem(item);
    // Add any additional logic for menu item selection
  };

  return (
    <ConfigProvider locale={fa_IR} direction="rtl">
      <div className="flex flex-row space-x-5 h-full w-full container">
        <div className="flex flex-col w-full">{panel[selectedItem]}</div>
        <Menu selectedItem={selectedItem} onSelect={handleMenuSelect} />
      </div>
    </ConfigProvider>
  );
}
