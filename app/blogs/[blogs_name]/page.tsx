"use client";

import Link from "next/link";
import Image from "next/image";
// import _Frame_________Image from "@/public/selectType_fBRKpQ3.png";
import Markdown from "react-markdown";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";
import { useAppSelector } from "@/store/HOCs";

export default function Blogs_name(props: { params: { blogs_name: string } }) {
  const { blogs_name } = props.params;
  const blogs = useAppSelector((store) => store.BlogsmodelSlice);
  const _blogs = blogs.find((_d) => _d.name.replace(" ", "-") === blogs_name);

  if (_blogs === undefined) return;

  const writer = useAppSelector((store) => store.writer).find(
    (w) => w.id === _blogs.writer_id
  );

  return (
    <div className="flex flex-col items-center rounded-0 min-w-screen min-h-screen space-y-43px bg-f5f5f5">
      <div className="flex flex-col items-center rounded-0 w-full h-fit -space-y-100px">
        <div className="flex flex-col rounded-0 w-full h-fit">
          <Header />
          <div
            // style={{
            //   backgroundImage: `url(${_Frame_________Image.src})`,
            // }}
            className="flex flex-col items-center justify-center rounded-0 w-full h-500px py-176px pb-176px px-279px pr-279px space-y-10px"
          >
            <p className="rounded-0 w-882px h-fit text-ffffff text-center font-bold text-32px">
              {_blogs.name}
            </p>
            <div className="border-4 border-5e95e0 rounded-0 w-222px h-fit"></div>
          </div>
        </div>
        <div className="flex flex-col rounded-16 w-1168px h-fit py-16px pb-16px px-32px pr-32px space-y-30px drop-shadow-0px4px-000000 bg-ffffff">
          <div className="flex flex-row items-center justify-end rounded-0 w-full h-fit space-x-9px">
            <p className="rounded-0 w-fit h-fit text-424242 text-right font-extrabold text-sm">
              {writer?.name}
            </p>
            <p className="rounded-0 w-fit h-fit text-424242 text-right font-medium text-sm">
              نویسنده :
            </p>
          </div>
          <div className="flex flex-row rounded-16 w-1104px h-262px py-32px pb-32px px-32px pr-32px space-x-41px bg-e0eaff">
            <div className="flex flex-col items-end rounded-0 w-707px h-fit space-y-16px">
              <p className="rounded-0 w-full h-fit text-000000 text-right font-medium text-lg">
                چکیده
              </p>
              <p className="rounded-0 w-full h-fit text-424242 text-right text-sm">
                {_blogs.desc}
              </p>
            </div>
            <div className="border-2 border-5f94fd rounded-0 w-0px h-198px"></div>
            <div className="flex flex-col items-end rounded-0 w-251px h-fit space-y-8px">
              <p className="rounded-0 w-full h-fit text-000000 text-right font-medium text-lg">
                فهرست مطالب
              </p>
              <div className="flex flex-row rounded-0 w-fit h-fit py-5px pb-5px px-8px pr-8px">
                <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-sm">
                  برنامه نویسی چیست ؟
                </p>
              </div>
              <div className="flex flex-row rounded-0 w-full h-fit py-5px pb-5px px-8px pr-8px">
                <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-sm">
                  آیا برنامه نویسی ارزش سرمایه‌گذاری دارد؟
                </p>
              </div>
              <div className="flex flex-row rounded-0 w-fit h-fit py-5px pb-5px px-8px pr-8px">
                <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-sm">
                  طراحی سایت یا برنامه نویسی ؟
                </p>
              </div>
            </div>
          </div>
          <div dir={"rtl"}>
            <Markdown>{_blogs.blogText}</Markdown>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
