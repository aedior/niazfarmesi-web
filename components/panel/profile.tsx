"use client";

import { useAppSelector, useAppDispatch } from "@/store/HOCs";
import { useState, useEffect } from "react";
import { FileUpload, Select } from "@/components/UI";

export default function PROFILE() {
  const [banner, bannerHandler] = useState();
  const [email, emailHandler] = useState<string>("");
  const [noFaaliat, noFaaliatHandler] = useState<number | undefined>();
  const [address, addressHandler] = useState<string>("");
  const [moassesName, moassesNameHandler] = useState<string>("");
  const [phone, phoneHandler] = useState<string>("");
  const [date, dateHandler] = useState<string>("");
  const dispatch = useAppDispatch();
  const [website, websiteHandler] = useState<string>("");
  const [rubika, rubikaHandler] = useState<string>("");
  const [phoneMajazi, phoneMajaziHandler] = useState<string>("");

  return (
    <div className="flex flex-col rounded-0 w-870px h-fit space-y-40px">
      <div className="flex flex-col items-center justify-center rounded-16 w-full h-fit py-24px pb-24px px-23px pr-23px space-y-36px drop-shadow-0px4px-000000 bg-ffffff">
        <div className="flex flex-row justify-between rounded-0 w-full h-fit space-x-331px">
          <div className="flex flex-col justify-center rounded-0 w-fit h-fit space-y-24px">
            <FileUpload
              text={"ارسال"}
              name={"karfarma_banner"}
              value={banner}
              handler={bannerHandler}
              className="flex flex-col relative items-center justify-center rounded-8 w-166px h-fit py-8px pb-8px bg-007ef3 text-ffffff font-medium text-sm"
            />
            <FileUpload
              text={"آپلود بنر"}
              name={"karfarma_banner"}
              value={banner}
              handler={bannerHandler}
              className="flex flex-col relative items-center justify-center rounded-8 w-166px h-fit py-8px pb-8px bg-007ef3 text-ffffff font-medium text-sm"
            />
          </div>
          <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-lg">
            پروفایل من
          </p>
        </div>
        <div className="flex flex-row items-center rounded-0 w-fit h-fit space-x-35px">
          <div className="flex flex-col items-end rounded-0 w-355px h-fit space-y-14px">
            <div className="flex flex-col items-end rounded-0 w-353px h-fit min-h-40px space-y-8px">
              <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
                ایمیل
              </p>
              <input
                dir={"rtl"}
                value={email}
                onChange={(e) => emailHandler(e.target.value)}
                className="flex flex-row items-center border-1 border-c4c4c4 rounded-5 w-full h-40px min-w-240px py-12px pb-12px px-16px pr-16px bg-ffffff outline-none"
              />
            </div>
            <div className="flex flex-col items-end justify-center rounded-0 w-full h-92px min-h-40px space-y-8px">
              <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
                نوع فعالیت
              </p>
              <Select
                handler={noFaaliatHandler}
                value={noFaaliat}
                choices={{
                  0: "شبانه روزی",
                  1: "درمانگاه",
                  2: "غیره",
                }}
                className="flex flex-row items-center justify-center border-1 border-c4c4c4 rounded-5 w-full h-42px min-w-240px px-8px pr-8px bg-ffffff"
              />
            </div>
            <div className="flex flex-col items-end rounded-0 w-353px h-fit min-h-40px space-y-8px">
              <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
                آدرس پروفایل
              </p>
              <input
                dir={"rtl"}
                value={address}
                onChange={(e) => addressHandler(e.target.value)}
                className="flex flex-row items-center border-1 border-c4c4c4 rounded-5 w-full h-40px min-w-240px py-12px pb-12px px-16px pr-16px bg-ffffff outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col rounded-0 w-353px h-fit space-y-15px">
            <div className="flex flex-col items-end rounded-0 w-353px h-fit min-h-40px space-y-8px">
              <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
                نام موسس
              </p>
              <input
                dir={"rtl"}
                value={moassesName}
                onChange={(e) => moassesNameHandler(e.target.value)}
                className="flex flex-row items-center border-1 border-c4c4c4 rounded-5 w-full h-40px min-w-240px py-12px pb-12px px-16px pr-16px bg-ffffff outline-none"
              />
            </div>
            <div className="flex flex-col items-end rounded-0 w-353px h-fit min-h-40px space-y-8px">
              <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
                شماره تلفن
              </p>
              <input
                dir={"rtl"}
                value={phone}
                onChange={(e) => phoneHandler(e.target.value)}
                className="flex flex-row items-center border-1 border-c4c4c4 rounded-5 w-full h-40px min-w-240px py-12px pb-12px px-16px pr-16px bg-ffffff outline-none"
              />
            </div>
            <div className="flex flex-col items-end rounded-0 w-353px h-fit min-h-40px space-y-8px">
              <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
                تاریخ تاسیس
              </p>
              <input
                dir={"rtl"}
                value={date}
                onChange={(e) => dateHandler(e.target.value)}
                className="flex flex-row items-center border-1 border-c4c4c4 rounded-5 w-full h-40px min-w-240px py-12px pb-12px px-16px pr-16px bg-ffffff outline-none"
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            // dispatch(Frame48096400Thunk({}));
          }}
          className="flex flex-col items-center justify-center rounded-8 w-full h-full bg-f3bd00"
        >
          <p className="rounded-0 w-fit h-fit text-ffffff font-bold text-sm">
            ویرایش اطلاعات
          </p>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center rounded-16 w-full h-fit py-24px pb-24px px-24px pr-24px space-y-28px drop-shadow-0px4px-000000 bg-ffffff">
        <div className="flex flex-row items-center justify-end rounded-0 w-822px h-fit">
          <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-lg">
            شبکه‌های اجتماعی
          </p>
        </div>
        <div className="flex flex-row rounded-0 w-fit h-fit space-x-15px">
          <div className="flex flex-col items-end rounded-0 w-353px h-fit min-h-40px space-y-8px">
            <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
              وبسایت
            </p>
            <input
              dir={"rtl"}
              value={website}
              onChange={(e) => websiteHandler(e.target.value)}
              className="flex flex-row items-center border-1 border-c4c4c4 rounded-5 w-full h-40px min-w-240px py-12px pb-12px px-16px pr-16px bg-ffffff outline-none"
            />
          </div>
          <div className="flex flex-col items-end rounded-0 w-353px h-fit min-h-40px space-y-8px">
            <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
              روبیکا
            </p>
            <input
              dir={"rtl"}
              value={rubika}
              onChange={(e) => rubikaHandler(e.target.value)}
              className="flex flex-row items-center border-1 border-c4c4c4 rounded-5 w-full h-40px min-w-240px py-12px pb-12px px-16px pr-16px bg-ffffff outline-none"
            />
          </div>
        </div>
        <button
          onClick={() => {
            // dispatch(Frame48096403Thunk({}));
          }}
          className="flex flex-col items-center justify-center rounded-8 w-full h-full bg-f3bd00"
        >
          <p className="rounded-0 w-fit h-fit text-ffffff font-bold text-sm">
            افزودن شبکه اجتماعی
          </p>
        </button>
      </div>
      <div className="flex flex-col items-center rounded-16 w-full h-fit py-24px pb-24px px-24px pr-24px space-y-24px drop-shadow-0px4px-000000 bg-ffffff">
        <div className="flex flex-col items-end rounded-0 w-822px h-fit">
          <p className="rounded-0 w-full h-fit text-212121 text-right font-medium text-lg">
            اطلاعات تماس
          </p>
        </div>
        <div className="flex flex-row rounded-0 w-fit h-fit space-x-15px">
          <div className="flex flex-col items-end rounded-0 w-353px h-fit min-h-40px space-y-8px">
            <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
              شماره موبایل متصل به روبیکا،واتس‌آپ یا تلگرام
            </p>
            <input
              dir={"rtl"}
              value={phoneMajazi}
              onChange={(e) => phoneMajaziHandler(e.target.value)}
              className="flex flex-row items-center border-1 border-c4c4c4 rounded-5 w-full h-40px min-w-240px py-12px pb-12px px-16px pr-16px bg-ffffff outline-none"
            />
          </div>
          <div className="flex flex-col items-end rounded-0 w-353px h-fit min-h-40px space-y-8px">
            <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
              تلفن داروخانه/ شرکت
            </p>
            <input
              dir={"rtl"}
              value={phone}
              onChange={(e) => phoneHandler(e.target.value)}
              className="flex flex-row items-center border-1 border-c4c4c4 rounded-5 w-full h-40px min-w-240px py-12px pb-12px px-16px pr-16px bg-ffffff outline-none"
            />
          </div>
        </div>
        <p className="rounded-0 w-full h-fit text-212121 text-right font-medium text-sm">
          موقعیت مکانی روی نقشه
        </p>
        <button
          onClick={() => {
            // dispatch(Frame48096408Thunk({}));
          }}
          className="flex flex-col items-center justify-center rounded-8 w-full h-full bg-f3bd00"
        >
          <p className="rounded-0 w-fit h-fit text-ffffff font-bold text-sm">
            ویرایش اطلاعات
          </p>
        </button>
      </div>
    </div>
  );
}
