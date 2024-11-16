"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function aboutus() {
  return (
    <div className="flex flex-col items-center justify-center rounded-0 w-full min-h-screen space-y-60px bg-f5f5f5">
      <>
        <Header />
        <div className="flex flex-row items-center rounded-0 w-fit h-fit space-x-30px">
          <>
            <div className="flex flex-col items-end rounded-0 w-572px h-fit space-y-41px">
              <>
                <Image
                  src={"/Group_48095924_1fWs2j0.svg"}
                  alt={""}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  className="rounded-0 w-418px h-38px"
                />
                <p className="rounded-0 w-full h-fit text-424242 text-right text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد....
                </p>
                <p className="rounded-0 w-full h-fit text-424242 text-right text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد....
                </p>
              </>
            </div>
            <Image
              src={"/Group_48096340_6aWR1af.svg"}
              alt={""}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              className="rounded-24 w-572px h-527px"
            />
          </>
        </div>
        <div className="flex flex-row items-center rounded-0 w-fit h-fit space-x-17px">
          <>
            <div className="border-2 border-1967d2 rounded-0 w-274px h-fit"></div>
            <p className="rounded-0 w-fit h-fit text-212121 text-right font-bold text-2xl">
              با تیم ما آشنا شوید
            </p>
          </>
        </div>
        <div className="flex flex-col items-center rounded-0 w-full h-fit -space-y-110px">
          <>
            <>
              <Image
                src={"/Rectangle_29383_1_kque1Sf.png"}
                alt={"Rectangle 29383 1"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                className="rounded-0 w-1440px h-203px"
              />
            </>
            <div className="flex flex-col rounded-0 w-970px h-fit space-y-24px">
              <>
                <>
                  <Image
                    src={"/Rectangle_29382_JyLo2xf.png"}
                    alt={"Rectangle 29382"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    className="rounded-16 w-full h-419px"
                  />
                </>
                <p className="rounded-0 w-full h-fit text-424242 text-right text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد....
                </p>
              </>
            </div>
          </>
        </div>
        <Footer />
      </>
    </div>
  );
}
