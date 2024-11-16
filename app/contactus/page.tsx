"use client";

import Header from "@/components/header";
import Image from "next/image";
import Footer from "@/components/footer";
import { useState } from "react";
import { useAppDispatch } from "@/store/HOCs";

export default function contactus() {
  const [email, emailHandler] = useState<string>("");
  const [name, nameHandler] = useState<string>("");
  const [title, titleHandler] = useState<string>("");
  const [desc, descHandler] = useState<string>("");
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-center justify-center rounded-0 w-full min-h-screen space-y-89px bg-f5f5f5">
      <div className="flex flex-col rounded-0 w-full h-fit">
        <Header />
        <div
          // style={{ backgroundImage: `url(${_Frame_________Image.src})` }}
          className="flex flex-col items-center justify-center rounded-0 w-full h-321px space-y-10px bg-black/20"
        >
          <p className="rounded-0 w-fit h-fit text-ffffff text-center font-bold text-32px">
            تماس با ما
          </p>
          <div className="border-4 border-5e95e0 rounded-0 w-222px h-fit"></div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center rounded-0 w-full h-full space-x-123px">
        <div className="flex flex-col items-center rounded-0 w-572px h-560px">
          <div className="flex flex-col items-center rounded-0 w-full h-fit space-y-24px">
            <div className="flex flex-row items-center rounded-0 w-full h-fit space-x-24px">
              <div className="flex flex-col items-end rounded-0 w-full h-fit min-h-40px space-y-8px">
                <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
                  ایمیل
                </p>
                <input
                  dir={"rtl"}
                  value={email}
                  onChange={(e) => emailHandler(e.target.value)}
                  placeholder={"info@domain.com"}
                  className="flex flex-row items-center justify-center border-1 border-c4c4c4 rounded-5 w-full h-42px min-w-240px px-8px pr-8px bg-ffffff outline-none"
                />
              </div>
              <div className="flex flex-col items-end rounded-0 w-full h-fit min-h-40px space-y-8px">
                <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
                  نام و نام خانوادگی
                </p>
                <input
                  dir={"rtl"}
                  value={name}
                  onChange={(e) => nameHandler(e.target.value)}
                  className="flex flex-row items-center border-1 border-c4c4c4 rounded-5 w-full h-40px min-w-240px py-12px pb-12px px-16px pr-16px bg-ffffff outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col items-end rounded-0 w-full h-fit min-h-40px space-y-8px">
              <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
                عنوان
              </p>
              <input
                dir={"rtl"}
                value={title}
                onChange={(e) => titleHandler(e.target.value)}
                className="flex flex-row items-center border-1 border-c4c4c4 rounded-5 w-full h-40px min-w-240px py-12px pb-12px px-16px pr-16px bg-ffffff outline-none"
              />
            </div>
            <div className="flex flex-col items-end rounded-0 w-full h-full min-h-40px space-y-8px">
              <textarea
                dir={"rtl"}
                value={desc}
                placeholder={"نظر خود را وارد"}
                className="flex flex-row justify-end border-1 border-c4c4c4 rounded-5 w-full h-full min-w-240px py-12px pb-12px px-16px pr-16px bg-ffffff outline-none"
              />
            </div>
            <button
              onClick={() => {
                // dispatch(
                //   Frame48096332Thunk({
                //     title,
                //     desc,
                //   })
                // );
              }}
              className="flex flex-col items-center justify-center rounded-5 w-full h-32 bg-1967d2"
            >
              <p className="rounded-0 w-fit h-fit text-ffffff font-bold text-sm">
                ارسال
              </p>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-end rounded-0 w-473px h-fit space-y-32px">
          <div className="flex flex-col items-end justify-center rounded-0 w-434px h-fit space-y-24px">
            <div className="flex flex-row items-center justify-end rounded-0 w-full h-fit py-8px pb-8px px-12px pr-12px space-x-8px">
              <div className="flex flex-col items-end rounded-0 w-fit h-fit space-y-4px">
                <p className="rounded-0 w-fit h-fit text-424242 font-medium text-lg">
                  ایمیل
                </p>
                <p className="rounded-0 w-fit h-fit text-212121 text-base">
                  suprio@info.com
                </p>
              </div>
              <div className="flex flex-row items-center justify-center rounded-16 w-72px h-72px py-10px pb-10px px-10px pr-10px drop-shadow-0px4px-000000 bg-bad1f1">
                <Image
                  src={"/Vector_RyO2qgs.svg"}
                  alt={""}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  className="rounded-0 w-46px h-37px"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-end rounded-0 w-full h-fit py-8px pb-8px px-12px pr-12px space-x-8px">
              <div className="flex flex-col items-end rounded-0 w-fit h-fit space-y-4px">
                <p className="rounded-0 w-fit h-fit text-424242 font-medium text-lg">
                  تلفن تماس
                </p>
                <p className="rounded-0 w-fit h-fit text-212121 text-base">
                  021-68748512 0911-2954785
                </p>
              </div>
              <div className="flex flex-row items-center justify-center rounded-16 w-72px h-72px py-10px pb-10px px-10px pr-10px drop-shadow-0px4px-000000 bg-bad1f1">
                <Image
                  src={"/Vector_G8RpLuQ.svg"}
                  alt={""}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  className="rounded-0 w-35px h-35px"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-end rounded-0 w-full h-fit py-8px pb-8px px-12px pr-12px space-x-8px">
              <div className="flex flex-col items-end rounded-0 w-fit h-fit space-y-4px">
                <p className="rounded-0 w-fit h-fit text-424242 font-medium text-lg">
                  آدرس
                </p>
                <p className="rounded-0 w-fit h-fit text-212121 text-base">
                  آدرس مربوط به شرکت نوشته میشود
                </p>
              </div>
              <div className="flex flex-row items-center justify-center rounded-16 w-72px h-72px py-10px pb-10px px-10px pr-10px drop-shadow-0px4px-000000 bg-bad1f1">
                <Image
                  src={"/Vector_5YjJ7rY.svg"}
                  alt={""}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  className="rounded-0 w-28px h-35px"
                />
              </div>
            </div>
          </div>
          <iframe
            src={"//maps.google.com/maps?q=0.0,0.0&z=15&output=embed"}
            className="rounded-8 w-full h-full outline-none"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
