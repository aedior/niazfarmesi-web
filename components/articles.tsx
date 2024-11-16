"use client";

import { BlogsModelType } from "@/store/slice/blogsModel";
import Image from "next/image";
import Link from "next/link";

export default function articles(props: BlogsModelType) {
  return (
    <div className="flex flex-col items-center justify-center rounded-20 w-373px h-442px pt-10px pb-20px px-10px pr-10px space-y-54px drop-shadow-0px4px-000000 bg-ffffff">
      <>
        <div className="flex flex-col items-end rounded-0 w-full h-full space-y-20px">
          <>
            <>
              <Image
                src={"/image_6344238_uJNjRSV.png"}
                alt={"image 6344238"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                className="rounded-20 w-full h-full"
              />
              <></>
            </>
            <p className="rounded-0 w-full h-fit text-212121 text-right font-bold text-xl">
              <></>
              {props.name}
            </p>
          </>
        </div>
        <div className="flex flex-col items-center rounded-0 w-full h-fit space-y-12px">
          <>
            <div className="flex flex-row items-center justify-between rounded-0 w-full h-fit space-x-81px">
              <>
                <div className="flex flex-row items-center rounded-0 w-fit h-fit space-x-10px">
                  <>
                    <p className="rounded-0 w-fit h-fit text-8b8b8b text-right font-medium text-sm">
                      {`زمان ${Intl.NumberFormat("fa-IR").format(
                        props.readTime
                      )}m`}
                    </p>
                    <>
                      <Image
                        src={"/Vector_dgYxMKg.svg"}
                        alt={""}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        className="rounded-0 w-20px h-20px"
                      />
                      <></>
                    </>
                  </>
                </div>
                <div className="flex flex-row items-center justify-center rounded-0 w-fit h-fit space-x-10px">
                  <>
                    <p className="rounded-0 w-full h-fit text-8b8b8b text-right font-medium text-sm">
                      {`نظر ${Intl.NumberFormat("fa-IR").format(
                        props.commentsCount
                      )}`}
                    </p>
                    <>
                      <Image
                        src={"/Vector_1kmVuco.svg"}
                        alt={""}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        className="rounded-0 w-20px h-20px"
                      />
                      <></>
                    </>
                  </>
                </div>
                <div className="flex flex-row items-center justify-center rounded-0 w-fit h-fit space-x-10px">
                  <>
                    <p className="rounded-0 w-fit h-fit text-8b8b8b text-right font-medium text-sm">
                      <></>
                      انتشار{" "}
                      {new Date(props.created_at).toLocaleDateString("fa-IR")}
                    </p>
                    <>
                      <Image
                        src={"/Vector_L8MQNfZ.svg"}
                        alt={""}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        className="rounded-0 w-18px h-20px"
                      />
                      <></>
                    </>
                  </>
                </div>
              </>
            </div>
            <Link
              href={`blogs/${props.name.replace(" ", "-")}`}
              className="flex flex-row items-center justify-center border-1 border-007bff rounded-8 w-full h-fit py-11px pb-11px px-20px pr-20px"
            >
              <>
                <p className="rounded-0 w-fit h-fit text-007bff text-007bff text-right font-bold text-sm">
                  <></>
                  بیشتر بخوانید
                </p>
              </>
            </Link>
          </>
        </div>
      </>
    </div>
  );
}
