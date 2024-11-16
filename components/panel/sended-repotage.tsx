"use client";

import { useAppSelector, useAppDispatch } from "@/store/HOCs";
import { useState, useEffect } from "react";
import Selfrepotage from "@/components/selfRepotage";

export default function SENDED_REPOTAGE() {
  const repotage = useAppSelector((store) => store.RepotagemodelSlice);
  const dispatch = useAppDispatch();
  useEffect(() => {}, []);

  return (
    <div className="flex flex-col items-end rounded-16 w-870px h-full py-24px pb-24px px-24px pr-24px space-y-32px drop-shadow-0px4px-000000 bg-ffffff">
      <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-lg">
        آکهی‌های ارسالی
      </p>
      <div className="flex flex-row items-center border-2 border-5e95e0 rounded-16 w-fit h-173px py-12px pb-12px px-12px pr-12px space-x-16px bg-ffffff">
        {repotage.map((_d) => (
          <Selfrepotage />
        ))}
      </div>
    </div>
  );
}
