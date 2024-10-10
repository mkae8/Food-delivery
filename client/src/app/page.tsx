"use client";
import React, { ChangeEvent } from "react";
import { Typography } from "@mui/material";

export default function Home() {
  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return <div>s</div>;
}
