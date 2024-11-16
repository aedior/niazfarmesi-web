"use client";

import Image from "next/image";

export default function more(props: {}) {
  return (
    <div className="flex flex-row items-center justify-end rounded-16 w-373px h-fit py-8px pb-8px px-8px pr-8px space-x-8px drop-shadow-0px4px-000000 bg-ffffff">
      <>
        <div className="flex flex-col items-end rounded-0 w-full h-full space-y-8px">
          <>
            <div className="flex flex-col items-end rounded-0 w-239px h-fit space-y-4px">
              <>
                <p className="rounded-0 w-full h-fit text-8b8b8b text-8b8b8b text-right text-sm">
                  <></>
                  کارجوها بخوانند
                </p>
                <p className="rounded-0 w-228px h-fit text-212121 text-right font-medium text-base">
                  <></>
                  بررسی انواع زبان‌های برنامه نویسی
                </p>
              </>
            </div>
            <p className="rounded-0 w-full h-fit text-8b8b8b text-8b8b8b text-xs">
              <></>7 ساعت قبل
            </p>
          </>
        </div>
        <div className="rounded-32 w-88px h-88px">
          <>
            <div className="rounded-12 w-88px h-88px bg-c4c4c4">
              <></>
            </div>
            <>
              <Image
                src={
                  "/bitcoin-is-new-concept-virtual-money-graphics-digital-background-coins-with-image_pH1Wygj.png"
                }
                alt={
                  "bitcoin-is-new-concept-virtual-money-graphics-digital-background-coins-with-image-letter-b 1"
                }
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                className="rounded-12 w-88px h-100px"
              />
              <></>
            </>
          </>
        </div>
      </>
    </div>
  );
}
