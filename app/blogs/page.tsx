"use client";

import Header from "@/components/header";
import Articles from "@/components/articles";
import Link from "next/link";
import Footer from "@/components/footer";
import { useAppSelector, useAppDispatch } from "@/store/HOCs";
import { useState, useEffect } from "react";
import { BlogsListThunk } from "@/store/thunk/blogs";
import { Button } from "@/components/UI";

export default function blogsPage() {
  const blogs = useAppSelector((store) => store.BlogsmodelSlice);
  const categories = useAppSelector((store) => store.category);
  const dispatch = useAppDispatch();

  console.log(blogs);

  useEffect(() => {
    dispatch(BlogsListThunk({}));
  }, []);
  const [name, nameHandler] = useState<string>("");

  return (
    <div className="flex flex-col items-center justify-center rounded-0 w-full min-h-screen space-y-130px bg-f5f5f5">
      <div className="flex flex-col rounded-0 w-full h-fit">
        <Header />
        <div
          // style={{ backgroundImage: `url(${_Frame_________Image.src})` }}
          className="flex flex-col items-center justify-center rounded-0 w-full h-500px space-y-24px bg-black/20"
        >
          <p className="rounded-0 w-fit h-fit text-ffffff text-center font-bold text-32px">
            وبلاگ
          </p>
          <div className="border-4 border-5e95e0 rounded-0 w-222px h-fit"></div>
          <p className="rounded-0 w-521px h-56px text-ffffff text-center font-medium text-lg">
            در این بخش، شما میتوانید جدیدترین مقالات مربوط به تکنولوژی را که در
            این دسته‌بندی قرار دارد، مشاهده و مطالعه کنید
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center rounded-0 w-full space-x-50px container">
        <div className="flex flex-col items-center justify-center rounded-20 w-full h-fit pt-10px pb-20px px-10px pr-10px space-y-54px">
          {blogs.map((_d) => (
            <Articles {..._d} />
          ))}
        </div>
        <div className="flex flex-col rounded-0 w-385px h-fit space-y-41px">
          <div className="flex flex-col rounded-0 w-373px h-fit">
            <div className="flex flex-col items-end justify-center rounded-0 w-full h-fit space-y-11px">
              <div className="flex flex-col items-end rounded-0 w-full h-fit min-h-40px space-y-8px">
                <p className="rounded-0 w-full h-fit text-1e1e1e text-right text-sm">
                  جست و جوی مقالات
                </p>
                <input
                  dir={"rtl"}
                  value={name}
                  onChange={(e) => nameHandler(e.target.value)}
                  placeholder={"متن جست و جو"}
                  className="flex flex-row items-center border-1 border-c4c4c4 rounded-5 w-full h-40px min-w-240px py-12px pb-12px px-16px pr-16px bg-ffffff outline-none"
                />
              </div>
              <Link
                href={{
                  pathname: "blogspage",
                  query: { blogs_name: name },
                }}
                className="flex flex-col rounded-0 w-111px h-fit min-h-40px"
              >
                <div className="flex flex-col items-center justify-center rounded-8 w-full h-40px bg-007ef3">
                  <p className="rounded-0 w-fit h-fit text-ffffff font-bold text-sm">
                    جست و جو
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-end rounded-0 w-373px h-fit space-y-6px">
            <p className="rounded-0 w-full h-fit text-212121 text-right font-bold text-lg">
              دسته‌بندی‌ها
            </p>
            <div className="flex flex-col items-center rounded-0 w-full h-fit space-y-16px">
              {categories.map((c) => (
                <div
                  // style={{
                  //   backgroundImage: `url(${_Frame_________Image.src})`,
                  // }}
                  className="flex flex-row items-center justify-center rounded-8 w-full h-80px py-25px pb-25px px-153px pr-153px"
                >
                  <p className="rounded-0 w-fit h-fit text-ffffff text-center font-bold text-xl">
                    {c.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-end rounded-16 w-373px py-24px pb-24px px-16px pr-16px space-y-12px drop-shadow-0px4px-000000 bg-ffffff">
            <p className="rounded-0 w-fit h-fit text-212121 text-right font-bold text-lg">
              مطالب برتر
            </p>
            <div className="flex flex-col items-end justify-center rounded-0 w-247px h-fit space-y-14px">
              {blogs
                .filter((b) => b.better)
                .map((b) => (
                  <Link
                    href={`blogs/${b.name}`}
                    className="flex flex-col items-end justify-center rounded-0 w-full h-fit px-10px pr-10px space-y-8px bg-ffffff"
                  >
                    <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-lg">
                      {b.name}
                    </p>
                    <p className="rounded-0 w-fit h-fit text-424242 text-right font-medium text-sm">
                      {new Date(b.created_at).toLocaleDateString("fa-IR")}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
