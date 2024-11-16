"use client";

import Header from "@/components/header";
import Link from "next/link";
import Footer from "@/components/footer";

export default function Page403() {
  return (
    <div className="flex flex-col items-center justify-center rounded-0 w-full min-h-screen space-y-83px bg-f5f5f5">
      <>
        <div className="flex flex-col rounded-0 w-full h-fit">
          <>
            <Header />
          </>
        </div>
        <div className="flex flex-col items-center justify-center rounded-20 w-995px h-414px py-108px pb-108px px-238px pr-238px space-y-89px bg-ffffff">
          <>
            <p className="rounded-0 w-fit h-fit text-000000 text-000000 font-bold text-xl">
              برای استفاده از پنل ابتدا باید وارد حساب کاربری خود شوید
            </p>
            <div className="flex flex-row items-center rounded-0 w-fit h-fit space-x-49px">
              <>
                <Link
                  href={"acceptkarjo"}
                  className="flex flex-row items-center justify-center rounded-10 w-210px h-62px py-16px pb-16px px-56px pr-56px bg-3658c7"
                >
                  <>
                    <p className="rounded-0 w-fit h-fit text-ffffff font-bold text-xl">
                      ثبت نام
                    </p>
                  </>
                </Link>
                <Link
                  href={"login"}
                  className="flex flex-row items-center justify-center rounded-10 w-210px h-62px py-16px pb-16px px-56px pr-56px bg-46a000"
                >
                  <>
                    <p className="rounded-0 w-fit h-fit text-ffffff font-bold text-xl">
                      ورود
                    </p>
                  </>
                </Link>
              </>
            </div>
          </>
        </div>
        <Footer />
      </>
    </div>
  );
}
