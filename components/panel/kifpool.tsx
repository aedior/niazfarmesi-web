"use client";

import { useAppDispatch, useAppSelector } from "@/store/HOCs";
import { Button, TitledNumber } from "../UI";
import { useState } from "react";
import { kifpoolThunk } from "@/store/thunk/kifpool";

function PriceSection(props: { price: number }) {
  return (
    <div className="bg-212121/10 group hover:bg-1967d2/50 aspect-square p-5 rounded-xl w-full h-36 flex items-center justify-center flex-col space-y-2">
      <p className="text-xl group-hover:text-white font-bold">
        + {Intl.NumberFormat("fa-IR").format(props.price)}
      </p>
      <p className="group-hover:text-white">تومان</p>
    </div>
  );
}

export default function Kifpool() {
  const [price, priceHandler] = useState(100000);
  const user = useAppSelector((store) => store.user.user.user);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col rounded-16 w-full h-full bg-ffffff p-5">
      <div className="w-full h-full flex flex-row justify-between space-x-20">
        <div className=" rounded-xl w-full h-auto flex flex-col p-5 px-20 space-y-5 text-right">
          <p className="text-xl">موجودی کیف پول</p>
          <div
            className="flex w-full p-5 bg-5790df h-1/2 rounded-xl 
            space-x-2 flex-row items-center justify-center"
          >
            <small className="text-white text-xl">تومان</small>
            <p className=" text-white font-bold text-3xl">
              {Intl.NumberFormat("fa-IR").format(user?.kifpool)}
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-10 w-full px-5">
          <div className="flex flex-row w-full h-full justify-between space-x-5">
            {[50000, 100000, 200000].map((price) => (
              <Button onClick={() => priceHandler((p) => p + price)}>
                <PriceSection price={price} />
              </Button>
            ))}
          </div>
          <TitledNumber
            title="مبلغ مورد نظر را وارد کنید"
            input={{
              value: price,
              onChange: (e) => priceHandler(e.target.value),
            }}
          />
          <Button
            onClick={() => {
              dispatch(kifpoolThunk({ price }));
            }}
            className="bg-1967d2 p-3 rounded-xl"
          >
            <p className="text-white">رفتن به صفحه پرداخت</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
