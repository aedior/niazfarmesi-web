"use client";

import Header from "@/components/header";
// import _Frame_________Image from "@/public/selectType_fBRKpQ3.png";
import Link from "next/link";
import Repotagecard from "@/components/repotageCard";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/store/HOCs";
import { getRepotages } from "@/store/thunk/repotage";
import { Button } from "@/components/UI";

export default function repotages() {
  const [keywords, keywordsHandler] = useState<string>("");
  const [type, typeHandler] = useState<number | undefined>();
  const [isFori, isForiHandler] = useState(false);

  const repotage = useAppSelector((store) => store.RepotagemodelSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRepotages({}));
  }, []);

  return (
    <div className="flex flex-col items-center rounded-0 min-w-scxeen min-h-screen space-y-69px">
      <div className="flex flex-col rounded-0 w-full h-fit">
        <Header />
        <div
          // style={{ backgroundImage: `url(${_Frame_________Image.src})` }}
          className="flex flex-col items-center justify-center rounded-0 w-full h-500px bg-black/20"
        >
          <div className="flex flex-col items-center rounded-0 w-676px h-fit space-y-52px">
            <div className="flex flex-col items-center rounded-0 w-fit h-fit space-y-32px">
              <p className="rounded-0 w-fit h-fit text-ffffff text-center font-bold text-32px">
                لیست آگهی‌ها
              </p>
              <div className="border-4 border-5e95e0 rounded-0 w-130px h-fit"></div>
            </div>
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
            <div className="flex flex-row relative items-center rounded-0 w-fit h-fit space-x-24px">
              <Button
                onClick={() => {
                  isForiHandler(!isFori);
                }}
                style={{
                  backgroundColor: isFori ? "#1653c3" : "#ffffff",
                }}
                className="rounded-21 w-129px h-42px flex bg-212121 items-center justify-center"
              >
                <p
                  style={{
                    color: isFori ? "#FFF" : "#212121",
                  }}
                  className="rounded-0 w-83px h-24px text-212121 text-right font-medium text-sm"
                >
                  آگهی‌های فوری
                </p>
              </Button>
              <Button
                onClick={() => {
                  typeHandler(type !== 1 ? 1 : undefined);
                }}
                style={{
                  backgroundColor: type === 1 ? "#1653c3" : "#ffffff",
                }}
                className="rounded-21 w-129px h-42px bg-ffffff flex items-center justify-center"
              >
                <p
                  style={{
                    color: type === 1 ? "#FFF" : "#212121",
                  }}
                  className="rounded-0 w-97px h-26px text-212121 text-right font-medium text-base"
                >
                  تکنسین دارویی
                </p>
              </Button>
              <Button
                onClick={() => {
                  typeHandler(type !== 2 ? 2 : undefined);
                }}
                style={{
                  backgroundColor: type === 2 ? "#1653c3" : "#ffffff",
                }}
                className="rounded-21 w-129px h-42px bg-ffffff flex items-center justify-center"
              >
                <p
                  style={{
                    color: type === 2 ? "#FFF" : "#212121",
                  }}
                  className="rounded-0 w-58px h-26px text-212121 text-right font-medium text-base"
                >
                  قائم‌مقام
                </p>
              </Button>
              <Button
                onClick={() => {
                  typeHandler(type !== 3 ? 3 : undefined);
                }}
                style={{
                  backgroundColor: type === 3 ? "#1653c3" : "#ffffff",
                }}
                className="rounded-21 w-129px h-42px bg-ffffff flex items-center justify-center"
              >
                <p
                  style={{
                    color: type === 3 ? "#FFF" : "#212121",
                  }}
                  className="rounded-0 w-96px h-26px text-212121 text-right font-medium text-base"
                >
                  کارمند داروخانه
                </p>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid py-16px pb-16px px-16px pr-16px gap-5">
        {repotage.map((_d) => (
          <Repotagecard {..._d} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
