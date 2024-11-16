"use client";

import { karjo2text } from "@/core";
import { repotageModelType } from "@/store/slice/repotageModel";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./UI";
import { useState } from "react";

export default function repotageCard(props: repotageModelType) {
  return (
    <Link
      href={`repotages/${props.id}`}
      className="flex flex-row items-end border-2 border-c4c4c4 rounded-16 w-fit h-189px py-16px pb-16px px-16px pr-16px space-x-137px bg-ffffff"
    >
      <div className="flex flex-col justify-between rounded-0 w-113px h-full space-y-95px">
        <div className="flex flex-row items-center rounded-0 w-fit h-fit space-x-8px">
          <p className="rounded-0 w-fit h-fit text-424242 text-right font-medium text-sm"></p>

          <Image
            src={"/Vector_W7iDueI.svg"}
            alt={""}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            className="rounded-0 w-14px h-20px"
          />
        </div>
      </div>
      <div className="flex flex-col items-end justify-between rounded-0 w-290px h-full space-y-32px">
        <div className="flex flex-row rounded-0 w-full h-fit space-x-16px">
          <div className="flex flex-col items-end rounded-0 w-181px h-fit space-y-16px">
            <p className="rounded-0 w-full h-fit text-212121 text-right font-bold text-lg">
              {karjo2text[props.onvan]}
            </p>
            <div className="flex flex-row items-center rounded-0 w-fit h-fit space-x-8px">
              <p className="rounded-0 w-fit h-fit text-424242 text-right font-medium text-sm">
                {props.drugstoreName}
              </p>
              <Image
                src={"/Vector_TTQC1Fp.svg"}
                alt={""}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                className="rounded-0 w-19px h-19px"
              />
            </div>
          </div>
          <div className="rounded-12 w-93px h-93px bg-c4c4c4"></div>
        </div>
      </div>
    </Link>
  );
}
