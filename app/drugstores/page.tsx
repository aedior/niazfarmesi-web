"use client";

import Header from "@/components/header";
import Link from "next/link";
import Pakshcard from "@/components/pakshCard";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/store/HOCs";
import { DrugStoresThunk } from "@/store/thunk/drugStores";

export default function stores() {
  const [name, nameHandler] = useState<string>("");
  const drugstores = useAppSelector((store) => store.DrugstoresmodelSlice);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(DrugStoresThunk({}));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center rounded-0 w-full min-h-screen space-y-83px bg-f5f5f5">
      <>
        <div className="flex flex-col rounded-0 w-full h-fit">
          <>
            <Header />
            <div
              // style={{ backgroundImage: `url(${_Frame_________Image.src})` }}
              className="flex flex-col items-center justify-center rounded-0 w-full h-500px bg-black/20"
            >
              <>
                <div className="flex flex-col items-center rounded-0 w-620px h-fit space-y-36px">
                  <>
                    <div className="flex flex-col items-center rounded-0 w-fit h-fit space-y-32px">
                      <>
                        <p className="rounded-0 w-fit h-fit text-ffffff text-center font-bold text-32px">
                          لیست شرکت‌های دارویی
                        </p>
                        <div className="border-4 border-5e95e0 rounded-0 w-222px h-fit"></div>
                      </>
                    </div>
                    <div className="flex flex-row items-center rounded-0 w-fit h-fit space-x-11px">
                      <>
                        <Link
                          href={{
                            pathname: "stores",
                            query: { stores_name: name },
                          }}
                          className="flex flex-col rounded-0 w-111px h-fit min-h-40px"
                        >
                          <>
                            <div className="flex flex-col items-center justify-center rounded-8 w-full h-40px bg-007ef3">
                              <>
                                <p className="rounded-0 w-fit h-fit text-ffffff font-bold text-sm">
                                  جست و جو
                                </p>
                              </>
                            </div>
                          </>
                        </Link>
                        <div className="flex flex-col items-end rounded-0 w-full h-fit min-h-40px space-y-8px">
                          <input
                            dir={"rtl"}
                            value={name}
                            onChange={(e) => nameHandler(e.target.value)}
                            placeholder={"کار یا مهارت خود را جست و جو کنید"}
                            className="flex flex-row items-center border-1 border-c4c4c4 rounded-5 w-full h-40px min-w-240px py-12px pb-12px px-16px pr-16px bg-ffffff outline-none"
                          />
                        </div>
                      </>
                    </div>
                    <p className="rounded-0 w-full h-fit text-ffffff text-center font-medium text-base">
                      در این قسمت می‌توانید شرکت پخش یا رابط مورد نظر خود را
                      پیدا کنید
                    </p>
                  </>
                </div>
              </>
            </div>
          </>
        </div>
        <div className="flex flex-col rounded-0 w-fit h-fit">
          {drugstores.map((_d) => (
            <Pakshcard
              drugstores_name={_d.name}
              drugstores_city={_d.city}
              drugstores_person={_d.person}
              drugstores_phone={_d.phone}
            />
          ))}
        </div>
        <Footer />
      </>
    </div>
  );
}
