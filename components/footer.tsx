"use client";

import Link from "next/link";
import Image from "next/image";

export default function FooterComponent() {
  return (
    <footer className="bg-[#212121] text-white py-16 px-4 sm:px-8 lg:px-16 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-right">برای کارجویان</h3>
            <ul className="space-y-2 text-right">
              <li>
                <Link href="/repotages" className="hover:underline">
                  لیست آگهی ها
                </Link>
              </li>
              <li>
                <Link href="/karfarma" className="hover:underline">
                  داشبورد کارجو
                </Link>
              </li>
              <li>
                <Link href="/karfarma" className="hover:underline">
                  هشدارهای شغلی
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:underline">
                  آموزش استفاده از سایت
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-right">
              برای کارفرمایان
            </h3>
            <ul className="space-y-2 text-right">
              <li>
                <Link href="/karfarma" className="hover:underline">
                  داشبورد کارفرما
                </Link>
              </li>
              <li>
                <Link href="/karfarma" className="hover:underline">
                  ارسال شغل
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:underline">
                  آموزش استفاده از سایت
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-right">درباره‌ی ما</h3>
            <ul className="space-y-2 text-right">
              <li>
                <Link href="/contactus" className="hover:underline">
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="hover:underline">
                  درباره‌ ما
                </Link>
              </li>
              <li>
                <Link href="/fq" className="hover:underline">
                  سوالات متداول
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-end">
            <Image
              src="/logo.png"
              alt="نیازفارمسی logo"
              width={146}
              height={146}
              className="mb-2"
            />
            <h2 className="text-2xl font-bold mb-1">نیازفارمسی</h2>
            <p className="text-sm">
              اولین سامانه‌ی آنلاین کاریابی داروخانه‌ای در کشور
            </p>
          </div>
        </div>
        <div className="my-8 bg-white border w-full" />
        <div className="flex justify-center space-x-8">
          <Link href="#" aria-label="Facebook">
            <Image src="/Vector_AFNjpy5.svg" alt="" width={24} height={24} />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Image src="/Vector_NWEsd2a.svg" alt="" width={24} height={24} />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Image src="/Vector_FeMBMfe.svg" alt="" width={24} height={21} />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Image src="/Vector_N3qWD7J.svg" alt="" width={23} height={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
