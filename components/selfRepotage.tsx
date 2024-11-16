"use client";

import Link from "next/link";
import Image from "next/image";

export default function selfRepotage(props: {}) {
  return (
    <Link
      href={`repotage/${props.repotage_name.replace(" ", "-")}`}
      className="flex flex-row items-center border-2 border-5e95e0 rounded-16 w-fit h-118px py-12px pb-12px px-12px pr-12px space-x-16px bg-ffffff"
    >
      <>
        <div className="flex flex-col items-end rounded-0 w-619px h-fit space-y-33px">
          <>
            <div className="flex flex-row items-center justify-between rounded-0 w-full h-fit space-x-380px">
              <>
                <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-base">
                  <></>
                  14 اردیبهشت 1402
                </p>
                <p className="rounded-0 w-fit h-fit text-212121 text-right font-bold text-lg">
                  <></>
                  استخدام کارآموز داروخانه
                </p>
              </>
            </div>
            <div className="flex flex-row items-center justify-between rounded-0 w-full h-fit space-x-103px">
              <>
                <div className="flex flex-row relative items-center rounded-0 w-fit h-fit space-x-8px">
                  <>
                    <div className="rounded-4 w-89px h-32px bg-1967d2">
                      <></>
                    </div>
                    <div className="rounded-4 w-86px h-32px bg-1967d2">
                      <></>
                    </div>
                    <div className="rounded-4 w-87px h-32px bg-1967d2">
                      <></>
                    </div>
                    <p className="absolute top-[4px] left-[200px] rounded-0 w-70px h-24px text-ffffff text-right font-medium text-sm">
                      <></>
                      نسخه خوانی
                    </p>
                    <p className="absolute top-[4px] left-[105px] rounded-0 w-70px h-24px text-ffffff text-right font-medium text-sm">
                      <></>
                      کار با نرم‌افزار
                    </p>
                    <p className="absolute top-[4px] left-[9px] rounded-0 w-72px h-24px text-ffffff text-right font-medium text-sm">
                      <></>
                      زبان انگلیسی
                    </p>
                  </>
                </div>
                <div className="flex flex-row items-center rounded-0 w-fit h-fit space-x-21px">
                  <>
                    <div className="flex flex-row items-center rounded-0 w-fit h-fit space-x-8px">
                      <>
                        <p className="rounded-0 w-fit h-fit text-424242 text-right font-medium text-sm">
                          <></>
                          مازندران، آمل
                        </p>
                        <div className="rounded-0 w-24px h-24px">
                          <>
                            <Image
                              src={"/Location_Yg8yjgs.svg"}
                              alt={""}
                              width={"0"}
                              height={"0"}
                              sizes={"100vw"}
                              className="rounded-0 w-16px h-19px"
                            />
                          </>
                        </div>
                      </>
                    </div>
                    <div className="flex flex-row items-center rounded-0 w-fit h-fit space-x-8px">
                      <>
                        <p className="rounded-0 w-fit h-fit text-424242 text-right font-medium text-sm">
                          <></>
                          کارآموز داروخانه
                        </p>
                        <div className="rounded-0 w-24px h-24px">
                          <>
                            <Image
                              src={"/Profile_D2Yad1t.svg"}
                              alt={""}
                              width={"0"}
                              height={"0"}
                              sizes={"100vw"}
                              className="rounded-0 w-15px h-19px"
                            />
                          </>
                        </div>
                      </>
                    </div>
                  </>
                </div>
              </>
            </div>
          </>
        </div>
        <div className="rounded-12 w-93px h-93px bg-c4c4c4">
          <></>
        </div>
      </>
    </Link>
  );
}
