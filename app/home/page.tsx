"use client";

import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import Articles from "@/components/articles";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/store/HOCs";
import { MainThunk } from "@/store/thunk/main";

export default function home() {
  const [keywords, keywordsHandler] = useState<string>("");
  const blogs = useAppSelector((store) => store.BlogsmodelSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(MainThunk({}));
  }, []);

  return (
    <div className="flex flex-col items-center rounded-0 w-full min-h-screen space-y-43px bg-f5f5f5">
      <div className="flex flex-col items-center rounded-0 w-full h-fit">
        <Header />
        <div className="flex flex-row items-center justify-center rounded-0 w-full h-fit bg-bad1f1">
          <Image
            src={"/banners/home-firstSection.jpg-"}
            alt={"Group 48096194 1 1"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            className="rounded-0 w-554px h-482px"
          />

          <div className="flex flex-col items-end justify-center rounded-0 w-fit h-712px px-71px pr-71px space-y-61px">
            <div className="flex flex-col items-center justify-center rounded-0 w-full h-fit space-y-24px">
              <p className="rounded-0 w-full h-fit text-212121 align-middle text-right font-bold text-38px">
                عنوان شغلی خود را در نیازفارمسی جستجو کنید
              </p>
              <p className="rounded-0 w-full h-fit text-424242 align-middle text-right font-medium text-lg">
                برای دیدن فرصت‌ها، کافیست در سایت ما ثبت‌نام کنید
              </p>
            </div>
            <div className="flex flex-col items-end rounded-0 w-full h-fit">
              <div className="flex flex-row items-center rounded-0 w-fit h-fit space-x-11px">
                <Link
                  href={{
                    pathname: "repotages",
                    query: { repotage_keywords: keywords },
                  }}
                  className="flex flex-col rounded-0 w-111px h-fit min-h-40px"
                >
                  <div className="flex flex-col items-center justify-center rounded-8 w-full h-40px bg-007ef3">
                    <p className="rounded-0 w-fit h-fit text-ffffff font-bold text-sm">
                      جست و جو
                    </p>
                  </div>
                </Link>
                <div className="flex flex-col items-end rounded-0 w-full h-fit min-h-40px space-y-8px">
                  <input
                    dir={"rtl"}
                    value={keywords}
                    onChange={(e) => keywordsHandler(e.target.value)}
                    placeholder={"کار یا مهارت خود را جست و جو کنید"}
                    className="flex flex-row items-center border-1 border-c4c4c4 rounded-5 w-full h-40px min-w-240px py-12px pb-12px px-16px pr-16px bg-ffffff outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-0 w-fit h-fit">
              <div className="flex flex-col items-center rounded-24 w-full h-113px py-16px pb-16px px-16px pr-16px space-y-8px drop-shadow-0px24px-000000 bg-ffffff">
                <p className="rounded-0 w-218px h-fit text-1967d2 align-middle text-right text-sm">
                  بیش از 20 هزار نفر به ما اعتماد کرده‌اند
                </p>

                <Image
                  src={"/Frame_48096330_1_f2ireUl.png"}
                  alt={"Frame 48096330 1"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  className="rounded-0 w-166px h-50px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center rounded-0 w-fit h-fit space-x-10px">
        <div className="flex flex-col rounded-0 w-473px h-fit space-y-24px">
          <div className="flex flex-row items-center justify-center rounded-16 w-full h-206px py-89px pb-89px px-196px pr-196px bg-c4c4c4">
            <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-lg">
              بنر تبلیغاتی
            </p>
          </div>
          <div className="flex flex-row items-center justify-center rounded-16 w-full h-206px py-89px pb-89px px-196px pr-196px bg-c4c4c4">
            <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-lg">
              بنر تبلیغاتی
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center rounded-16 w-671px h-436px py-190px pb-190px px-295px pr-295px bg-c4c4c4">
          <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-lg">
            بنر تبلیغاتی
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center rounded-0 w-full h-fit px-103px pr-103px space-y-41px">
        <div className="flex flex-col items-center rounded-0 w-fit h-fit space-y-40px">
          <p className="rounded-0 w-fit h-fit text-212121 text-center font-medium text-lg">
            چرا سایت ما
          </p>
          <div className="flex flex-row items-center justify-center rounded-0 w-1234px h-fit space-x-50px">
            <div className="flex flex-col items-end justify-center rounded-0 w-full h-fit space-y-58px">
              <div className="flex flex-col items-end rounded-0 w-587px h-fit space-y-32px">
                <p className="rounded-0 w-full h-84px text-212121 text-right font-medium text-lg">
                  سایت ما با دارا بودن مجموعه‌ای از 14000 داروخانه در تمام مناطق
                  کشور و همچنین میزبانی از بیش از 35000 آگهی شغلی، مکان مناسبی
                  برای پیدا کردن کار دلخواه برای تمامی عزیزان علاقه‌مند به کار
                  در داروخانه می‌باشد.
                </p>
                <div className="flex flex-col items-end rounded-0 w-full h-fit space-y-16px">
                  <div className="flex flex-row items-center justify-end rounded-0 w-289px h-fit space-x-24px">
                    <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-sm">
                      نزدیک ترین مکان به محل زندگی خود را بیابید
                    </p>

                    <Image
                      src={"/Vector_tf3dNU4.svg"}
                      alt={""}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      className="rounded-0 w-37px h-37px"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-end rounded-0 w-289px h-fit space-x-24px">
                    <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-sm">
                      روز و ساعت کاری دلخواه خود را پیدا کنید
                    </p>

                    <Image
                      src={"/Vector_vGUcENX.svg"}
                      alt={""}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      className="rounded-0 w-37px h-37px"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-end rounded-0 w-289px h-fit space-x-24px">
                    <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-sm">
                      رزومه‌ی خود را وارد و ارسال کنید
                    </p>

                    <Image
                      src={"/Vector_vbvD5ag.svg"}
                      alt={""}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      className="rounded-0 w-37px h-37px"
                    />
                  </div>
                </div>
                <Link
                  href={"selecttype"}
                  className="flex flex-row items-center justify-center rounded-8 w-175px h-fit py-12px pb-12px px-20px pr-20px bg-1967d2"
                >
                  <p className="rounded-0 w-fit h-fit text-ffffff text-right font-medium text-sm">
                    شروع کنید
                  </p>
                </Link>
              </div>
              <div className="flex flex-row items-center justify-center rounded-0 w-587px h-fit space-x-114px">
                <div className="flex flex-col items-center justify-center rounded-0 w-fit h-fit">
                  <p className="rounded-0 w-full h-fit text-1967d2 text-center font-bold text-28px">
                    + 1 هزار
                  </p>
                  <p className="rounded-0 w-full h-fit text-424242 font-medium text-base">
                    آگهی مرتبط در ماه
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center rounded-0 w-fit h-fit">
                  <p className="rounded-0 w-full h-fit text-1967d2 font-bold text-28px">
                    + 14 هزار
                  </p>
                  <p className="rounded-0 w-full h-fit text-424242 font-medium text-base">
                    داروخانه در کشور
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center rounded-0 w-fit h-fit">
                  <p className="rounded-0 w-full h-fit text-1967d2 font-bold text-28px">
                    + 200 هزار
                  </p>
                  <p className="rounded-0 w-full h-fit text-424242 text-center font-medium text-base">
                    تکنسین در کشور
                  </p>
                </div>
              </div>
            </div>

            <Image
              src={"/Group_48096203_1_Ks3ktDq.png"}
              alt={"Group 48096203 1"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              className="rounded-0 w-597px h-597px"
            />
          </div>
        </div>
        <div className="flex flex-col items-center rounded-0 w-fit h-fit space-y-36px">
          <div className="flex flex-col items-center rounded-0 w-116px h-fit space-y-8px">
            <p className="rounded-0 w-full h-fit text-212121 text-right font-medium text-lg">
              مقالات تخصصی
            </p>
            <div className="border-2 border-1967d2 rounded-0 w-68px h-0px"></div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-20 w-fit h-fit pt-10px pb-20px px-10px pr-10px space-y-54px drop-shadow-0px4px-000000 bg-ffffff">
            {blogs.map((_d) => (
              <Articles {..._d} />
            ))}
          </div>
          <Link
            href={"blogspage"}
            className="flex flex-row items-center justify-center rounded-8 w-233px h-fit py-12px pb-12px px-20px pr-20px bg-1967d2"
          >
            <p className="rounded-0 w-fit h-fit text-ffffff text-right font-medium text-sm">
              مقالات بیشتر
            </p>
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center rounded-0 w-full h-fit space-x-24px">
          <div className="flex flex-row items-center justify-center rounded-16 w-572px h-150px bg-c4c4c4">
            <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-lg">
              بنر تبلیغاتی
            </p>
          </div>
          <div className="flex flex-row items-center justify-center rounded-16 w-572px h-150px bg-c4c4c4">
            <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-lg">
              بنر تبلیغاتی
            </p>
          </div>
          <div className="flex flex-row items-center justify-center rounded-16 w-572px h-150px bg-c4c4c4">
            <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-lg">
              بنر تبلیغاتی
            </p>
          </div>
          <div className="flex flex-row items-center justify-center rounded-16 w-572px h-150px bg-c4c4c4">
            <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-lg">
              بنر تبلیغاتی
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center rounded-0 w-full h-fit space-x-20px">
          <div className="flex flex-col items-end justify-end rounded-0 w-fit h-fit space-y-36px">
            <div className="flex flex-col items-end rounded-0 w-473px h-fit space-y-8px">
              <p className="rounded-0 w-full h-39px text-1967d2 text-right font-bold text-2xl">
                لذت کاریابی را تجربه کنید
              </p>
              <p className="rounded-0 w-full h-83px text-212121 text-right font-bold text-28px">
                برنامه جستجوی شغل سوپریو را از دانلود کنید
              </p>
            </div>
            <p className="rounded-0 w-473px h-51px text-212121 text-right font-medium text-base">
              بین هزاران آگهی جستجو کنید و شغل خود را بیابید. برای دریافت، روی
              لینک دلخواه کلیک کنید
            </p>
            <div className="flex flex-row items-center rounded-0 w-fit h-fit space-x-24px">
              <div className="flex flex-row items-center rounded-16 w-175px h-74px py-8px pb-8px px-16px pr-16px space-x-18px bg-212121">
                <Image
                  src={"/Group_48095915_lL8zbO2.svg"}
                  alt={""}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  className="rounded-0 w-69px h-56px"
                />
                <div className="rounded-0 w-48px h-48px">
                  <Image
                    src={"/Group_XhuI4Xv.svg"}
                    alt={""}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    className="rounded-0 w-48px h-48px"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center rounded-16 w-175px h-69px py-6px pb-6px px-16px pr-16px space-x-20px bg-212121">
                <Image
                  src={"/Group_48095916_xbotTDB.svg"}
                  alt={""}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  className="rounded-0 w-69px h-56px"
                />
                <div className="rounded-0 w-48px h-48px">
                  <Image
                    src={"/Group_ndZu3QP.svg"}
                    alt={""}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    className="rounded-0 w-48px h-48px"
                  />
                </div>
              </div>
            </div>
          </div>

          <Image
            src={"/Group_48096204_1_ac4w4ob.png"}
            alt={"Group 48096204 1"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            className="rounded-0 w-701px h-797px"
          />
        </div>
      </div>
      <div className="flex flex-col items-center rounded-0 w-full h-fit space-y-32px">
        <Image
          src={"/Group_48095922_HF26sdD.svg"}
          alt={""}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          className="rounded-0 w-146px h-36px"
        />
        <div className="flex flex-col items-center rounded-0 w-full h-fit -space-y-130px">
          <div className="rounded-0 w-full h-180px bg-5790df"></div>
          <div className="flex flex-row items-center justify-center rounded-0 w-fit h-fit space-x-22px">
            <div className="flex flex-col items-center justify-center rounded-20 w-274px h-368px pt-10px pb-20px pl-38px pr-39px space-y-24px drop-shadow-0px4px-000000 bg-ffffff">
              <Image
                src={"/Mask_group_1_Qj4xojM.png"}
                alt={"Mask group 1"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                className="rounded-0 w-101px h-100px"
              />

              <div className="flex flex-col items-center rounded-0 w-fit h-fit">
                <div className="flex flex-col items-center rounded-0 w-fit h-fit space-y-8px">
                  <p className="rounded-0 w-fit h-fit text-212121 text-right font-bold text-xl">
                    علی درخشان
                  </p>
                  <p className="rounded-0 w-fit h-fit text-424242 text-right font-medium text-base">
                    خیلی حرفه‌ای و خوب
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-20 w-274px h-368px pt-10px pb-20px pl-38px pr-39px space-y-24px drop-shadow-0px4px-000000 bg-ffffff">
              <Image
                src={"/Mask_group_1_Qj4xojM.png"}
                alt={"Mask group 1"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                className="rounded-0 w-101px h-100px"
              />

              <div className="flex flex-col items-center rounded-0 w-fit h-fit">
                <div className="flex flex-col items-center rounded-0 w-fit h-fit space-y-8px">
                  <p className="rounded-0 w-fit h-fit text-212121 text-right font-bold text-xl">
                    علی درخشان
                  </p>
                  <p className="rounded-0 w-fit h-fit text-424242 text-right font-medium text-base">
                    خیلی حرفه‌ای و خوب
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-20 w-274px h-368px pt-10px pb-20px pl-38px pr-39px space-y-24px drop-shadow-0px4px-000000 bg-ffffff">
              <Image
                src={"/Mask_group_1_Qj4xojM.png"}
                alt={"Mask group 1"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                className="rounded-0 w-101px h-100px"
              />

              <div className="flex flex-col items-center rounded-0 w-fit h-fit">
                <div className="flex flex-col items-center rounded-0 w-fit h-fit space-y-8px">
                  <p className="rounded-0 w-fit h-fit text-212121 text-right font-bold text-xl">
                    علی درخشان
                  </p>
                  <p className="rounded-0 w-fit h-fit text-424242 text-right font-medium text-base">
                    خیلی حرفه‌ای و خوب
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-20 w-274px h-368px pt-10px pb-20px pl-38px pr-39px space-y-24px drop-shadow-0px4px-000000 bg-ffffff">
              <Image
                src={"/Mask_group_1_Qj4xojM.png"}
                alt={"Mask group 1"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                className="rounded-0 w-101px h-100px"
              />

              <div className="flex flex-col items-center rounded-0 w-fit h-fit">
                <div className="flex flex-col items-center rounded-0 w-fit h-fit space-y-8px">
                  <p className="rounded-0 w-fit h-fit text-212121 text-right font-bold text-xl">
                    علی درخشان
                  </p>
                  <p className="rounded-0 w-fit h-fit text-424242 text-right font-medium text-base">
                    خیلی حرفه‌ای و خوب
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
