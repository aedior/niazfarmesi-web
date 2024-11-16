"use client";

export default function message(props: { messages_time: string }) {
  return (
    <div className="flex flex-col justify-center rounded-8 w-fit h-fit py-4px pb-4px px-2px pr-2px space-y-10px bg-dfebfd">
      <>
        <div className="flex flex-row justify-end rounded-8 w-226px h-fit py-12px pb-12px px-16px pr-16px bg-deebfc">
          <>
            <p className="rounded-0 w-fit h-fit text-424242 text-right font-medium text-sm">
              <></>
              یک درخواست جدید دارید
            </p>
          </>
        </div>
        <p className="rounded-0 w-fit h-fit text-424242 text-right text-xs">
          <></>
          {props.messages_time}
        </p>
      </>
    </div>
  );
}
