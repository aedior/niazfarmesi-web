"use client";

import Image from "next/image";

export default function categoryCard(props: {}) {
  return (
    <div className="rounded-0 w-274px h-98px">
      <>
        <div className="flex flex-row items-center justify-end rounded-16 w-274px h-fit py-16px pb-16px px-17px pr-17px space-x-10px drop-shadow-0px4px-000000 bg-ffffff">
          <>
            <div className="flex flex-col items-end justify-between rounded-0 w-120px h-full space-y-19px">
              <>
                <p className="rounded-0 w-full h-fit text-212121 align-middle text-right font-medium text-base">
                  <></>
                  نیازهای داردخانه ها
                </p>
                <p className="rounded-0 w-full h-fit text-8b8b8b text-8b8b8b align-middle text-right font-medium text-sm">
                  <></>
                  15 آگهی فعال
                </p>
              </>
            </div>
            <div className="flex flex-row items-center justify-center rounded-8 w-fit h-fit py-15px pb-15px px-15px pr-15px bg-e3e3e3">
              <>
                <div className="rounded-0 w-36px h-36px">
                  <>
                    <Image
                      src={"/Group_reK1OOk.svg"}
                      alt={""}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      className="rounded-0 w-33px h-33px"
                    />
                  </>
                </div>
              </>
            </div>
          </>
        </div>
      </>
    </div>
  );
}
