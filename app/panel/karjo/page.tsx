"use client";

import Header from "@/components/header";
import Karfarmapanel from "@/components/panel";
import Footer from "@/components/footer";
import UserGaurd from "@/app/userGaurd";

export default function karfarma() {
  return (
    <UserGaurd usertype={0}>
      <div className="flex flex-col items-center rounded-0 w-full min-h-screen space-y-56px bg-f5f5f5">
        <Header />
        <Karfarmapanel />
        <Footer />
      </div>
    </UserGaurd>
  );
}
