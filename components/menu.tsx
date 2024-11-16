"use client";

import { useAppSelector } from "@/store/HOCs";
import { UserEnum } from "@/store/user/slice";
import Image from "next/image";

function MenuItem(props: {
  verbose: string;
  select: boolean;
  handler: any;
  name: string;
}) {
  return (
    <button
      onClick={() => {
        props.handler(props.name);
      }}
      style={{
        backgroundColor: props.select ? "#bad1f1" : "#0000",
      }}
      className="flex flex-row items-center justify-end rounded-8 w-full h-44px py-8px pb-8px px-8px pr-8px space-x-8px bg-bad1f1"
    >
      <p
        style={{
          color: props.select ? "#1967d2" : "#212121",
        }}
        className="rounded-0 w-fit h-fit  text-right font-medium text-base"
      >
        {props.verbose}
      </p>
    </button>
  );
}

export default function Menu(props: {
  select: any;
  handler: any;
  menu_items: any;
}) {
  const user = useAppSelector((store) => store.user).user;

  return (
    <div className="flex flex-col items-end rounded-16 w-274px h-fit py-16px pb-16px px-16px pr-16px space-y-24px drop-shadow-0px4px-000000 bg-ffffff">
      <div className="flex flex-row items-center rounded-0 w-fit h-fit space-x-16px">
        <div className="flex flex-col items-end rounded-0 w-137px h-fit space-y-6px">
          <div className="flex flex-row justify-end rounded-0 w-fit h-fit">
            <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-lg">
              {user?.name}
            </p>
          </div>
          <div className="text-sm flex-row w-full flex justify-between">
            <p>{user?.location}</p>
            <p>{user?.type === UserEnum.KARFARMA ? "کارفرما" : "کارجو"}</p>
          </div>
        </div>
        <Image
          src={"/Ellipse_27_wwFyG3p.svg"}
          alt={""}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          className="rounded-full w-88px h-88px"
        />
      </div>
      <div className="flex flex-col items-center rounded-0 w-242px h-fit space-y-8px">
        {Object.entries(props.menu_items).map(([select, name]) => (
          <MenuItem
            select={props.select === select}
            name={select}
            handler={props.handler}
            verbose={name}
          />
        ))}
        <div className="flex flex-row items-center justify-end rounded-0 w-full h-44px py-8px pb-8px px-8px pr-8px space-x-8px">
          <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-base">
            خروج
          </p>
        </div>
      </div>
    </div>
  );
}
