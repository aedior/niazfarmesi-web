"use client";

import Image from "next/image";

export default function uploading() {
  return (
    <div className="flex flex-col items-center justify-center rounded-0 w-full min-h-screen space-y-77px bg-ffffff">
      <>
        <>
          <Image
            src={"/Ellipse_34_80S9Efg.svg"}
            alt={""}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            className="rounded-full w-348px h-348px"
          />

        </>
        <p className="rounded-0 w-635px h-116px text-000000 text-000000 text-center font-bold text-4xl">

          در حال آپلود ...
        </p>
      </>
    </div>
  );
}
