"use client";

import { useAppDispatch, useAppSelector } from "@/store/HOCs";
import { useState } from "react";
import { Button } from "reactstrap";
import { TitledNumber } from "../UI";
import { smsThunk } from "@/store/thunk/sms";
import { SMS_PRICE } from "@/core";

function PriceSection(props: { count: number }) {
  return (
    <div className="bg-212121/10 group hover:bg-1967d2/50 aspect-square p-5 rounded-xl w-full h-36 flex items-center justify-center flex-col space-y-2">
      <p className="text-3xl group-hover:text-white font-bold">
        {Intl.NumberFormat("fa-IR").format(props.count)}
      </p>
      <p className="group-hover:text-white">عدد</p>
    </div>
  );
}
export default function SMS_PANEL() {
  const [count, countHandler] = useState(0);
  const user = useAppSelector((store) => store.user).user;
  if (user?.user === undefined) return <></>;
  const dispatch = useAppDispatch();
  const price = count * SMS_PRICE;

  return (
    <div className="flex flex-col rounded-16 w-full h-full bg-ffffff p-5">
      <div className="w-full h-full flex flex-row justify-between space-x-20">
        <div className="bg-1967d2/10 rounded-xl w-full h-auto flex flex-col p-5 space-y-5 text-right">
          <div
            className="flex w-full p-5 bg-5790df h-1/2 rounded-xl 
            space-x-2 flex-row items-center justify-center"
          >
            <small className="text-white text-xl">عدد</small>
            <p className=" text-white font-bold text-3xl">
              {Intl.NumberFormat("fa-IR").format(user.user.sms)}
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-10 w-full px-5">
          <div className="flex flex-row w-full h-full justify-between space-x-5">
            {[50, 100, 200].map((count) => (
              <Button onClick={() => countHandler(count)}>
                <PriceSection count={count} />
              </Button>
            ))}
          </div>
          <TitledNumber
            title="مبلغ مورد نظر را وارد کنید"
            input={{
              value: count,
              onChange: (e) => countHandler(e.target.value),
            }}
          />
          <div className="flex flex-row justify-between">
            <Button
              onClick={() => {
                dispatch(smsThunk({ count }));
                countHandler(0);
              }}
              className="bg-1967d2 p-3 rounded-xl px-10"
            >
              <p className="text-white">رفتن به صفحه پرداخت</p>
            </Button>
            <div className="flex flex-col items-end">
              <div className="flex flex-row space-x-2 items-center">
                <p>تومان</p>
                <p className="font-bold text-xl">
                  {Intl.NumberFormat("fa-IR").format(price)}
                </p>
              </div>
              <div className="felx flex-row items-center justify-center">
                <p className="text-xs">موجودی کیف پول پس از خرید</p>
                <p
                  style={{
                    color: user.user.kifpool - price <= 0 ? "red" : "black",
                  }}
                  className="text-xs"
                >
                  {user.user.kifpool - price <= 0
                    ? "موجودی ناکافی"
                    : Intl.NumberFormat("fa-IR").format(
                        user.user.kifpool - price
                      )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
