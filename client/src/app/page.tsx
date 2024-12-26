"use client";
import React from "react";

import HomePageHeader from "@/components/homepage/HomePageHeader";
import HomeInfoCards from "@/components/homepage/InfoCards";
import { HomePageFoods } from "@/components/homepage/HomePageFoods";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Box sx={{ marginTop: 5 }}>
        <HomePageHeader />
      </Box>

      <HomeInfoCards />
      <HomePageFoods />
    </div>
  );
}
