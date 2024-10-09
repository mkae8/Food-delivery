"use client";
import { Input } from "@/components/Input";
import { TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { ChangeEvent } from "react";

export default function Home() {
  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {};

  return (
    <div>
      <Input
        id="outlined-basic"
        label="нэрээ оруулна уу"
        variant="filled"
        inputHandler={inputHandler}
      />
    </div>
  );
}
