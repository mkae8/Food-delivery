"use client";

import React from "react";
import { ButtonGlobal } from "../ButtonGlobal";
import { Stack, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { Allfoot } from "./AllFoot";

interface ButtonData {
  text: string;
  variant: "outlined" | "contained" | "text";
}

const buttonData: ButtonData[] = [
  { text: "Breakfast", variant: "outlined" },
  { text: "Soup", variant: "outlined" },
  { text: "Main Course", variant: "outlined" },
  { text: "Dessert", variant: "outlined" },
];

const Foot: React.FC = () => {
  const { push } = useRouter();
  const pathname = usePathname();

  const handleChange = (item: string) => {
    push(`${pathname}?category=${item}`);
  };

  return (
    <>
      <Typography variant="h6" component="h2" marginBottom={2}></Typography>
      <Stack spacing={2} direction="row" gap={2} marginTop={10}>
        {buttonData.map((button, index) => (
          <ButtonGlobal
            key={index}
            text={button.text}
            variant={button.variant}
            width="280px"
            height="43px"
            background=""
            border=""
            color="black"
            clickhandler={() => handleChange(button.text)} // Ensure correct prop
          />
        ))}
      </Stack>
    </>
  );
};

export default Foot;
