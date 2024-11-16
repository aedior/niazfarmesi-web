"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";

export default function help() {
  return (
    <div className="flex flex-col items-center justify-center rounded-0 w-full min-h-screen space-y-80px bg-f5f5f5">
      <>
        <div className="flex flex-row items-center justify-center rounded-0 w-full h-88px py-14px pb-14px px-98px pr-98px space-x-9px bg-ffffff">
          <>
            <Link
              href={"login"}
              className="flex flex-row items-center justify-center rounded-6 w-174px h-40px py-8px pb-8px px-16px pr-16px space-x-8px bg-1967d2"
            >
              <>
                <>
                  <Image
                    src={"/Vector_NzImbka.svg"}
                    alt={""}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    className="rounded-0 w-16px h-16px"
                  />
                </>
                <p className="rounded-0 w-fit h-fit text-ffffff font-medium text-sm">
                  ثبت نام/ ورود
                </p>
              </>
            </Link>
            <Link
              href={"blogspage"}
              className="flex flex-row items-center justify-center rounded-0 w-fit h-fit py-4px pb-4px px-20px pr-20px"
            >
              <>
                <p className="rounded-0 w-fit h-fit text-212121 font-medium text-base">
                  وبلاگ
                </p>
              </>
            </Link>
            <Link
              href={"uploading"}
              className="flex flex-row items-center justify-center rounded-0 w-fit h-fit py-4px pb-4px px-20px pr-20px"
            >
              <>
                <p className="rounded-0 w-fit h-fit text-212121 font-medium text-base">
                  داروخانه‌ها
                </p>
              </>
            </Link>
            <Link
              href={"karfarma"}
              className="flex flex-row items-center justify-center rounded-0 w-fit h-fit py-4px pb-4px px-20px pr-20px"
            >
              <>
                <p className="rounded-0 w-fit h-fit text-212121 font-medium text-base">
                  پروفایل
                </p>
              </>
            </Link>
            <div className="flex flex-row items-center justify-center rounded-0 w-fit h-fit py-4px pb-4px px-20px pr-20px">
              <>
                <p className="rounded-0 w-fit h-fit text-212121 font-medium text-base">
                  ثبت‌نام کارجویان
                </p>
              </>
            </div>
            <Link
              href={"uploading"}
              className="flex flex-row items-center justify-center rounded-0 w-fit h-fit py-4px pb-4px px-20px pr-20px"
            >
              <>
                <p className="rounded-0 w-fit h-fit text-212121 font-medium text-base">
                  ثبت‌نام کارفرمایان
                </p>
              </>
            </Link>
            <Link
              href={"uploading"}
              className="flex flex-row items-center justify-center rounded-0 w-fit h-fit py-4px pb-4px px-20px pr-20px"
            >
              <>
                <p className="rounded-0 w-fit h-fit text-212121 font-medium text-base">
                  دسته‌بندی آگهی‌ها
                </p>
              </>
            </Link>
            <Image
              src={"/logo.png"}
              alt={"logo"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              className="flex flex-col items-center justify-center w-61px h-61px"
            />
          </>
        </div>
        <div className="flex flex-col rounded-0 w-fit h-fit space-y-14px">
          <>
            <div className="flex flex-col items-center rounded-0 w-1168px h-fit space-y-40px">
              <>
                <Image
                  src={"/Group_48095901_FPaeXPg.svg"}
                  alt={""}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  className="rounded-0 w-431px h-54px"
                />
                <div className="flex flex-col rounded-24 w-full h-225px py-26px pb-26px px-24px pr-24px space-y-16px drop-shadow-0px4px-000000 bg-ffffff">
                  <>
                    <p className="rounded-0 w-1120px h-fit text-424242 text-right text-sm">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                      شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                      درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                      طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد....
                    </p>
                    <p className="rounded-0 w-1120px h-fit text-424242 text-right text-sm">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                      شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                      درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                      طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد....
                    </p>
                  </>
                </div>
              </>
            </div>
            <div className="flex flex-row rounded-0 w-fit h-fit space-x-26px">
              <>
                <div className="flex flex-col rounded-0 w-471px h-fit space-y-58px">
                  <>
                    <div className="flex flex-col items-end rounded-0 w-full h-fit space-y-24px">
                      <>
                        <Image
                          src={"/Group_48095924_SzRy2FY.svg"}
                          alt={""}
                          width={"0"}
                          height={"0"}
                          sizes={"100vw"}
                          className="rounded-0 w-374px h-38px"
                        />
                        <p className="rounded-0 w-full h-fit text-424242 text-right text-sm">
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                          برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
                          با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
                          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                          و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                          را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
                          فرهنگ پیشرو در زبان فارسی ایجاد کرد....
                        </p>
                      </>
                    </div>
                    <div className="flex flex-row items-end rounded-0 w-373px h-fit space-x-24px">
                      <>
                        <div className="flex flex-col rounded-0 w-175px h-49px min-h-40px">
                          <>
                            <div className="flex flex-col relative items-center justify-center border-1 border-1967d2 rounded-5 w-full h-full bg-ffffff">
                              <>
                                <p className="rounded-0 w-fit h-fit text-1967d2 text-1967d2 font-bold text-sm">
                                  دریافت pdf راهنما
                                </p>
                              </>
                            </div>
                          </>
                        </div>
                        <div className="flex flex-row items-center justify-center rounded-8 w-174px h-fit py-12px pb-12px px-20px pr-20px bg-1967d2">
                          <>
                            <p className="rounded-0 w-fit h-fit text-ffffff text-right font-medium text-sm">
                              ثبت‌نام کارفرمایان
                            </p>
                          </>
                        </div>
                      </>
                    </div>
                  </>
                </div>
                <Image
                  src={"/Group_48096338_29dMOAW.svg"}
                  alt={""}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  className="rounded-0 w-670px h-489px"
                />
              </>
            </div>
            <div className="flex flex-row rounded-0 w-fit h-fit space-x-24px">
              <>
                <Image
                  src={"/Group_48096333_xnU1giv.svg"}
                  alt={""}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  className="rounded-0 w-668px h-489px"
                />
                <div className="flex flex-col justify-end rounded-0 w-473px h-fit space-y-58px">
                  <>
                    <div className="flex flex-col items-end rounded-0 w-473px h-fit space-y-24px">
                      <>
                        <Image
                          src={"/Group_48095925_vahMrBP.svg"}
                          alt={""}
                          width={"0"}
                          height={"0"}
                          sizes={"100vw"}
                          className="rounded-0 w-364px h-38px"
                        />
                        <p className="rounded-0 w-full h-fit text-424242 text-right text-sm">
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                          برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
                          با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
                          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                          و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                          را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
                          فرهنگ پیشرو در زبان فارسی ایجاد کرد....
                        </p>
                      </>
                    </div>
                    <div className="flex flex-row rounded-0 w-fit h-fit space-x-58px">
                      <>
                        <div className="flex flex-col rounded-0 w-175px h-49px min-h-40px">
                          <>
                            <div className="flex flex-col relative items-center justify-center border-1 border-1967d2 rounded-5 w-full h-full bg-ffffff">
                              <>
                                <p className="rounded-0 w-fit h-fit text-1967d2 text-1967d2 font-bold text-sm">
                                  دریافت pdf راهنما
                                </p>
                              </>
                            </div>
                          </>
                        </div>
                        <div className="flex flex-row items-center justify-center rounded-8 w-175px h-fit py-12px pb-12px px-20px pr-20px bg-1967d2">
                          <>
                            <p className="rounded-0 w-fit h-fit text-ffffff text-right font-medium text-sm">
                              ثبت‌نام کارجویان
                            </p>
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
        <Footer />
      </>
    </div>
  );
}
