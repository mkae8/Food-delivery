"use client";

import { Button } from "@mui/material";

interface ButtonGlobalProps {
  text: string;
  variant?: "text" | "outlined" | "contained";
  width?: string;
  height?: string;
  background?: string;
  border?: string;
  color?: string;
}

export const ButtonGlobal: React.FC<ButtonGlobalProps> = ({
  text,
  variant = "contained",
  width = "384px",
  height = "56px",
  background = "",
  border = "",
  color = "",
}) => {
  return (
    <Button variant={variant} sx={{ width, height, background, border, color }}>
      {text}
    </Button>
  );
};
