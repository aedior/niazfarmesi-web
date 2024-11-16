"use client";

import { axiosUser } from "@/core/axios";
import { useAppDispatch, useAppSelector } from "@/store/HOCs";
import { ReactNode, useEffect } from "react";

export default function Gaurd(props: { children: ReactNode }) {
  const { user, inLogin } = useAppSelector((store) => store.user);
  const access = user?.access;
  console.log("access token: ", access);

  useEffect(() => {
    // check for access create
    if (access) axiosUser.defaults.headers.Authorization = `Bearer ${access}`;
    console.log(access);
  }, [user]);
  return <>{props.children}</>;
}
