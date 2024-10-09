"use client";

import { Button } from "@mui/material";

interface ButtonGlobalProps {
  text: string;
  width?: string;
  height?: string;
}

export const ButtonGlobal: React.FC<ButtonGlobalProps> = ({
  text,
  width = "384px",
  height = "56px",
}) => {
  return (
    <Button variant="contained" sx={{ width, height }}>
      {text}
    </Button>
  );
};
