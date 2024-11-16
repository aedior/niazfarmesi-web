"use client";

import Link from "next/link";
import Image from "next/image";

export default function pakshCard(props: {
  drugstores_name: string;
  drugstores_city: string;
  drugstores_person: string;
  drugstores_phone: string;
}) {
  return (
    <Link
      href={`drugstores/${props.drugstores_name.replace(" ", "-")}`}
      className="flex flex-col rounded-0 w-fit h-fit"
    >
      <>
        <div className="flex flex-row items-center border-2 border-c4c4c4 rounded-16 w-full h-117px py-12px pb-12px pl-19px pr-12px space-x-155px bg-ffffff">
          <>
            <div className="flex flex-col items-end rounded-0 w-128px h-fit space-y-19px">
              <>
                <p className="rounded-0 w-full h-fit text-424242 text-right font-medium text-base">
                  <></>
                  {props.drugstores_name}
                </p>
                <div className="flex flex-row items-center justify-center rounded-0 w-fit h-fit space-x-5px">
                  <>
                    <p className="rounded-0 w-fit h-fit text-8b8b8b text-8b8b8b text-right font-medium text-sm">
                      <></>
                      {props.drugstores_city}
                    </p>
                    <>
                      <Image
                        src={"/Vector_KWf7pK2.svg"}
                        alt={""}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        className="rounded-0 w-14px h-20px"
                      />
                      <></>
                    </>
                  </>
                </div>
              </>
            </div>
            <div className="flex flex-row items-center justify-center rounded-0 w-fit h-fit space-x-12px">
              <>
                <div className="flex flex-col items-end rounded-0 w-151px h-fit space-y-16px">
                  <>
                    <p className="rounded-0 w-full h-fit text-212121 text-right font-bold text-lg">
                      <></>
                      {props.drugstores_person}
                    </p>
                    <div className="flex flex-row items-center justify-center rounded-0 w-fit h-fit space-x-5px">
                      <>
                        <p className="rounded-0 w-fit h-fit text-212121 text-right font-bold text-lg">
                          <></>
                          {props.drugstores_phone}
                        </p>
                        <>
                          <Image
                            src={"/Vector_HyAazgq.svg"}
                            alt={""}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            className="rounded-0 w-18px h-18px"
                          />
                          <></>
                        </>
                      </>
                    </div>
                  </>
                </div>
                <div className="rounded-12 w-93px h-93px bg-c4c4c4">
                  <></>
                </div>
              </>
            </div>
          </>
        </div>
      </>
    </Link>
  );
}
