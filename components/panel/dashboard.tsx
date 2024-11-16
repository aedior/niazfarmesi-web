"use client";

import { useAppSelector, useAppDispatch } from "@/store/HOCs";
import Image from "next/image";
import Message from "@/components/message";
import { ReactNode } from "react";
import { AiFillMessage } from "react-icons/ai";

function DashBoardFunction(props: { title: string; icon: any }) {
  return (
    <div className="rounded-0 w-197px h-91px">
      <div className="flex flex-row rounded-16 w-full h-89px justify-between items-center space-x-5 drop-shadow-0px4px-000000 bg-ffffff p-5">
        <div className="w-full">
          <p className="rounded-0 h-fit text-212121 text-right text-xs">
            {props.title}
          </p>
          <p className="rounded-0 w-15px h-42px text-212121 text-right font-bold text-28px">
            5
          </p>
        </div>
        <div className="flex flex-row items-center justify-center rounded-8 p-2 text-4xl text-white aspect-square bg-e3e3e3">
          {props.icon}
        </div>
      </div>
    </div>
  );
}

export default function DASHBOARD() {
  const messages = useAppSelector((store) => store.MessagesmodelSlice);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col rounded-0 h-full w-full space-y-19px">
      <div className="grid grid-cols-4 items-center rounded-0 w-full h-fit space-x-30px">
        <DashBoardFunction title="test" icon={<AiFillMessage />} />
        <DashBoardFunction title="test" icon={<AiFillMessage />} />
        <DashBoardFunction title="test" icon={<AiFillMessage />} />
        <DashBoardFunction title="test" icon={<AiFillMessage />} />
      </div>
      <div className="flex flex-row items-center rounded-0 w-full h-full space-x-24px">
        <div className="flex flex-col relative items-end rounded-16 w-274px h-full py-24px pb-24px px-24px pr-24px space-y-10px bg-ffffff">
          <div className="absolute top-[0px] left-[0px] flex flex-col rounded-16 w-274px h-full py-68px pb-68px px-24px pr-24px drop-shadow-0px4px-000000">
            <div className="flex flex-col justify-center rounded-8 w-fit h-fit py-4px pb-4px px-2px pr-2px space-y-10px bg-dfebfd">
              {messages.map((_d) => (
                <Message messages_time={_d.time} />
              ))}
            </div>
          </div>
          <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-lg">
            اعلان‌ها
          </p>
        </div>
        <div className="flex flex-col rounded-0 w-full h-full space-y-24px">
          <div className="flex flex-col items-end justify-end rounded-16 w-full h-433px py-24px pb-24px px-24px pr-24px space-y-15px bg-ffffff">
            <div className="flex flex-col items-end rounded-0 w-207px h-fit">
              <p className="rounded-0 w-full h-64 text-212121 text-right font-medium text-lg">
                میزان بازدیدهای اخیر پروفایل
              </p>
            </div>
            <div className="flex flex-col justify-between rounded-16 w-full h-full drop-shadow-0px4px-000000"></div>
          </div>
          <div className="flex flex-col items-end rounded-16 w-full h-full py-24px pb-24px px-24px pr-24px space-y-10px bg-ffffff">
            <p className="rounded-0 w-fit h-fit text-000000 text-right font-medium text-lg">
              پیام‌های سازمانی
            </p>
            <div className="flex flex-row items-center justify-center rounded-16 w-full h-full drop-shadow-0px4px-000000">
              <p className="rounded-0 w-fit h-fit text-424242 text-right font-medium text-sm">
                هیچ پیام جدیدی از طرف مدیریت وبسایت ندارید
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
