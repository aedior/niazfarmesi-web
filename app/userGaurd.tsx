"use client";

import { ReactNode, useEffect } from "react";
import { RedirectType, redirect } from "next/navigation";
import { useAppSelector } from "@/store/HOCs";
import { UserEnum } from "@/store/user/slice";

export default function UserGaurd(props: {
  children: ReactNode;
  usertype: UserEnum;
}) {
  // const user = useAppSelector((store) => store.user);
  // if (props.usertype !== user.user?.type) {
  //   redirect(`403`, RedirectType.replace);
  // }
  return <>{props.children}</>;
}
