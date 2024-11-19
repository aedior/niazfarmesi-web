"use client";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/HOCs";
import { smsThunk } from "@/store/thunk/sms";
import { SMS_PRICE } from "@/core";
import { Button, Input, Progress } from "antd";
import { FaSms, FaWallet, FaShoppingCart, FaEnvelope } from "react-icons/fa";

function PriceSection({
  count,
  onClick,
}: {
  count: number;
  onClick: () => void;
}) {
  return (
    <Button
      onClick={onClick}
      className="bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white aspect-square p-5 rounded-xl w-full h-36 flex items-center justify-center flex-col space-y-2 transition duration-300 shadow-lg hover:shadow-xl"
    >
      <p className="text-3xl font-bold">
        {Intl.NumberFormat("fa-IR").format(count)}
      </p>
      <p className="text-sm">عدد</p>
    </Button>
  );
}

export default function SMS_PANEL() {
  const [count, setCount] = useState(0);
  const user = useAppSelector((store) => store.user).user;
  const dispatch = useAppDispatch();
  const price = count * SMS_PRICE;

  if (!user?.user) return null;

  const maxSMS = 1000; // Assuming a max of 1000 SMS for the progress bar
  const smsPercentage = (user.user.sms / maxSMS) * 100;

  return (
    <div
      className="flex flex-col rounded-lg w-full h-full bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg"
      dir="rtl"
    >
      <div className="w-full h-full flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6 md:space-x-reverse">
        <div className="bg-white rounded-xl w-full md:w-1/3 h-auto flex flex-col p-6 space-y-6 shadow-md">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative">
              <FaEnvelope className="text-blue-500 text-6xl" />
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {user.user.sms}
              </div>
            </div>
            <Progress
              type="circle"
              percent={Math.round(smsPercentage)}
              format={() =>
                `${Intl.NumberFormat("fa-IR").format(user.user.sms)}`
              }
              strokeColor={{
                "0%": "#3B82F6",
                "100%": "#1D4ED8",
              }}
              className="text-2xl font-bold"
            />
            <p className="text-gray-600 text-sm">پیامک های باقی مانده</p>
          </div>
        </div>
        <div className="flex flex-col space-y-6 w-full md:w-2/3">
          <div className="grid grid-cols-3 gap-4">
            {[50, 100, 200].map((value) => (
              <PriceSection
                key={value}
                count={value}
                onClick={() => setCount(value)}
              />
            ))}
          </div>
          <div className="space-y-2">
            <label
              htmlFor="custom-count"
              className="block text-sm font-medium text-gray-700"
            >
              مبلغ مورد نظر را وارد کنید
            </label>
            <Input
              id="custom-count"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <Button
              onClick={() => {
                dispatch(smsThunk({ count }));
                setCount(0);
              }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center space-x-2 space-x-reverse shadow-md hover:shadow-lg"
            >
              <FaShoppingCart className="text-xl" />
              <span>رفتن به صفحه پرداخت</span>
            </Button>
            <div className="flex flex-col items-end">
              <div className="flex flex-row space-x-2 space-x-reverse items-center">
                <p className="font-bold text-2xl text-blue-600">
                  {Intl.NumberFormat("fa-IR").format(price)}
                </p>
                <p className="text-gray-600">تومان</p>
              </div>
              <div className="flex flex-row items-center justify-center space-x-2 space-x-reverse">
                <FaWallet className="text-gray-500" />
                <p className="text-sm text-gray-500">
                  موجودی کیف پول پس از خرید:
                </p>
                <p
                  className={`text-sm font-medium ${
                    user.user.kifpool - price <= 0
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
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
