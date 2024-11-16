"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useAppSelector } from "@/store/HOCs";

export default function Drugstores_name(props: {
  params: { drugstores_name: string };
}) {
  const { drugstores_name } = props.params;
  const drugstores = useAppSelector((store) => store.DrugstoresmodelSlice);
  console.log(drugstores);

  const _drugstores = drugstores.find(
    (_d) => _d.name.replace(" ", "-") == drugstores_name
  );

  if (_drugstores === undefined) return;

  return (
    <div className="flex flex-col items-center rounded-0 w-full min-h-screen space-y-43px bg-f5f5f5">
      <>
        <div className="flex flex-col items-center rounded-0 w-full h-fit -space-y-100px">
          <>
            <div className="flex flex-col rounded-0 w-full h-fit">
              <>
                <Header />
                <div className="flex flex-col items-center justify-center rounded-0 w-full h-500px py-176px pb-176px px-279px pr-279px space-y-10px">
                  <>
                    <p className="rounded-0 w-882px h-fit text-ffffff text-center font-bold text-32px">
                      {_drugstores.name}
                    </p>
                    <div className="border-4 border-5e95e0 rounded-0 w-222px h-fit"></div>
                  </>
                </div>
              </>
            </div>
            <div className="flex flex-col rounded-16 w-1168px h-fit py-16px pb-16px px-32px pr-32px drop-shadow-0px4px-000000 bg-ffffff">
              <>
                <div className="flex flex-row rounded-16 w-1104px h-262px py-32px pb-32px px-32px pr-32px space-x-41px bg-e0eaff">
                  <>
                    <div className="flex flex-col items-end rounded-0 w-707px h-fit space-y-16px">
                      <>
                        <p className="rounded-0 w-full h-fit text-000000 text-000000 text-right font-medium text-lg">
                          {_drugstores.person}
                        </p>
                        <p className="rounded-0 w-full h-fit text-424242 text-right text-sm">
                          {_drugstores.desc}
                        </p>
                      </>
                    </div>
                    <div className="border-2 border-5f94fd rounded-0 w-0px h-198px"></div>
                    <div className="flex flex-col items-end rounded-0 w-251px h-fit space-y-8px">
                      <>
                        <p className="rounded-0 w-full h-fit text-000000 text-000000 text-right font-medium text-lg">
                          شماره تماس
                        </p>
                        <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-sm">
                          {_drugstores.phone1}
                        </p>
                        <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-sm">
                          {_drugstores.phone2}
                        </p>
                      </>
                    </div>
                  </>
                </div>
              </>
            </div>
          </>
        </div>
        <Footer />
      </>
    </div>
  );
}
