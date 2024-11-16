"use client";

import { useAppSelector } from "@/store/HOCs";
import { UserEnum } from "@/store/user/slice";
import { redirect } from "next/navigation";

export default function Gaurd() {
  const type = useAppSelector((store) => store.user).user?.type;

  if (type === UserEnum.KARFARMA) return redirect("/auth/karfarma");
  if (type === UserEnum.KARJO) return redirect("/auth/karjo");
  return redirect("/auth/role");
}
