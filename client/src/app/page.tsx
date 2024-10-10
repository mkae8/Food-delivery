"use client";
import React, { ChangeEvent } from "react";

export default function Home() {
  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return <></>;
}
