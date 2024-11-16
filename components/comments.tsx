"use client";

import Image from "next/image";

export default function comments(props: {}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-20 w-274px h-368px pt-10px pb-20px pl-38px pr-39px space-y-24px drop-shadow-0px4px-000000 bg-ffffff">
      <>
        <>
          <Image
            src={"/Mask_group_1_Qj4xojM.png"}
            alt={"Mask group 1"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            className="rounded-0 w-101px h-100px"
          />
          <></>
        </>
        <div className="flex flex-col items-center rounded-0 w-fit h-fit">
          <>
            <div className="flex flex-col items-center rounded-0 w-fit h-fit space-y-8px">
              <>
                <p className="rounded-0 w-fit h-fit text-212121 text-right font-bold text-xl">
                  <></>
                  علی درخشان
                </p>
                <p className="rounded-0 w-fit h-fit text-424242 text-right font-medium text-base">
                  <></>
                  خیلی حرفه‌ای و خوب
                </p>
              </>
            </div>
          </>
        </div>
      </>
    </div>
  );
}
