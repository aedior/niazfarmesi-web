"use client";

import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/HOCs";
import { kifpoolThunk } from "@/store/thunk/kifpool";
import {
  FaWallet,
  FaPlus,
  FaDollarSign,
  FaMoneyBillWave,
  FaInfoCircle,
  FaCoins,
} from "react-icons/fa";

interface User {
  kifpool: number;
}

interface PriceSectionProps {
  price: number;
  onClick: () => void;
}

const PriceSection: React.FC<PriceSectionProps> = ({ price, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-gradient-to-br from-yellow-300 to-orange-400 rounded-2xl p-4 text-center h-full flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-lg"
    >
      <FaDollarSign className="text-white text-2xl mb-2" />
      <h4 className="text-white text-xl font-bold m-0">
        + {new Intl.NumberFormat("fa-IR").format(price)}
      </h4>
      <p className="text-white">تومان</p>
    </div>
  );
};

const Kifpool: React.FC = () => {
  const [price, setPrice] = useState<number>(100000);
  const user = useAppSelector((store) => store.user.user)?.user as
    | User
    | undefined;
  const dispatch = useAppDispatch();

  const handlePriceChange = (value: number | null) => {
    if (value !== null) {
      setPrice(value);
    }
  };

  const handleAddToWallet = () => {
    dispatch(kifpoolThunk({ price }));
  };

  return (
    <div className="w-full bg-white rounded-3xl shadow-xl p-6" dir="rtl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            {[50000, 100000, 200000].map((amount) => (
              <PriceSection
                key={amount}
                price={amount}
                onClick={() => setPrice((p) => p + amount)}
              />
            ))}
          </div>
          <div className="relative">
            <FaMoneyBillWave className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="number"
              value={price}
              onChange={(e) => handlePriceChange(Number(e.target.value))}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-label="مبلغ مورد نظر"
            />
          </div>
          <button
            onClick={handleAddToWallet}
            className="w-full h-14 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center"
          >
            <FaPlus className="ml-2" />
            رفتن به صفحه پرداخت
          </button>
          <div className="flex justify-between items-center bg-gray-100 rounded-lg p-4">
            <span className="text-gray-600">مبلغ قابل پرداخت:</span>
            <span className="text-blue-600 font-bold text-lg">
              {new Intl.NumberFormat("fa-IR").format(price)} تومان
            </span>
          </div>
          <div className="text-gray-600 text-sm">
            <p>
              <FaInfoCircle className="inline ml-2" />
              موجودی کیف پول پس از خرید:{" "}
              <span
                className={
                  user?.kifpool || 0 - price <= 0
                    ? "text-red-500"
                    : "text-green-500"
                }
              >
                {user?.kifpool || 0 - price <= 0
                  ? "موجودی ناکافی"
                  : `${new Intl.NumberFormat("fa-IR").format(
                      user?.kifpool || 0 - price
                    )} تومان`}
              </span>
            </p>
            <p>
              <FaInfoCircle className="inline ml-2" />
              پیامک‌ها بلافاصله پس از پرداخت به حساب شما اضافه می‌شوند.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-3xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="bg-white rounded-full p-4">
              <FaWallet className="text-blue-600 text-5xl" />
            </div>
            <h3 className="text-white text-2xl font-bold">موجودی کیف پول</h3>
            <h1 className="text-white text-5xl font-bold m-0">
              {new Intl.NumberFormat("fa-IR").format(user?.kifpool || 0)}
            </h1>
            <p className="text-white text-2xl font-semibold">تومان</p>
            <div className="flex items-center space-x-2 bg-blue-700 bg-opacity-30 rounded-full px-4 py-2">
              <FaCoins className="text-yellow-300" />
              <span className="text-white mr-2">موجودی فعلی</span>
            </div>
          </div>
          <p className="mt-6 text-white text-center">
            <FaInfoCircle className="inline ml-2" />
            کیف پول شما امن و قابل استفاده برای تمام خدمات ما است.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kifpool;
