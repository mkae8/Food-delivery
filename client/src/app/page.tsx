"use client";
import React from "react";

import HomePageHeader from "@/components/homepage/HomePageHeader";
import HomeInfoCards from "@/components/homepage/InfoCards";
import { HomePageFoods } from "@/components/homepage/HomePageFoods";

export default function Home() {
  // console.log(process.env.BACKEND_URL);

  return (
    <div>
      <HomePageHeader />

      <HomeInfoCards />

      <HomePageFoods />
    </div>
  );
}
