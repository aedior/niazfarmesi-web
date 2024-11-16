"use client";

export default function EVENTS() {
  return (
    <div className="flex flex-col rounded-0 w-fit h-fit space-y-20px">
      <div className="flex flex-col items-end rounded-16 w-870px h-206px py-24px pb-24px px-24px pr-24px space-y-24px drop-shadow-0px4px-000000 bg-ffffff">
        <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-lg">
          هشدارهای امنیتی
        </p>
        <div className="flex flex-row items-center justify-between rounded-8 w-822px h-90px py-16px pb-16px px-14px pr-14px space-x-392px bg-ffc7c7">
          <div className="flex flex-row items-center justify-center rounded-8 w-137px h-fit py-8px pb-8px px-16px pr-16px bg-e13636">
            <p className="rounded-0 w-fit h-fit text-ffffff text-right font-medium text-sm">
              متوجه شدم
            </p>
          </div>
          <div className="flex flex-col items-end rounded-0 w-263px h-fit space-y-8px">
            <p className="rounded-0 w-full h-fit text-e13636 text-e13636 text-right font-medium text-base">
              کارجو 1 برای آگهی 1
            </p>
            <p className="rounded-0 w-full h-fit text-e13636 text-e13636 text-right text-sm">
              لطفا مدارک شخص را با رزومه‌ی وی مقایسه کنید
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col relative items-end rounded-16 w-870px h-166px py-24px pb-24px px-22px pr-22px space-y-24px drop-shadow-0px4px-000000 bg-ffffff">
        <p className="rounded-0 w-fit h-fit text-212121 text-right font-medium text-lg">
          رویدادهای مهم
        </p>
        <div className="rounded-8 w-822px h-50px bg-deebfc"></div>
        <p className="absolute top-[88px] left-[692px] rounded-0 w-140px h-26px text-212121 text-right font-medium text-base">
          دوره‌ی بازآموزی گوارش
        </p>
        <p className="absolute top-[88px] left-[367px] rounded-0 w-141px h-26px text-212121 text-right font-medium text-base">
          مهلت تا 30 اردیبهشت
        </p>
        <div className="absolute top-[83px] left-[34px] flex flex-row items-center justify-center rounded-8 w-141px h-fit py-8px pb-8px px-16px pr-16px bg-1967d2">
          <p className="rounded-0 w-fit h-fit text-ffffff text-right font-medium text-sm">
            مشاهده‌ی دوره
          </p>
        </div>
      </div>
    </div>
  );
}
