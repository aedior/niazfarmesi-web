"use client";

import { axiosUser } from "@/core/axios";
import { useAppDispatch, useAppSelector } from "@/store/HOCs";
import { inSignup, UserEnum } from "@/store/user/slice";
import { redirect, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function Gaurd(props: { children: ReactNode }) {
  // HOCs
  const { user, inLogin } = useAppSelector((store) => store.user);
  const router = useRouter();
  const access = user?.access;
  console.log("access token: ", access);

  const userTypeString =
    user?.user?.usertype === UserEnum.KARFARMA ? "karfarma" : "karjo";
  console.log(inLogin);

  // route to another pages
  useEffect(() => {
    if (inLogin === "signup") router.push(`/auth/accept`);
    else if (inLogin === "accepted") redirect(`/panel/${userTypeString}`);

    // check for access create
    if (access) axiosUser.defaults.headers.Authorization = `Bearer ${access}`;
    console.log(access);
  }, [inLogin]);

  return <>{props.children}</>;
}
