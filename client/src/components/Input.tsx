"use client";

import React, { ChangeEvent } from "react";
import { TextField, TextFieldVariants } from "@mui/material";

type InputProps = {
  id: string;
  label: string;
  variant: TextFieldVariants;
  inputHandler: (_event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ id, label, variant, inputHandler }: InputProps) => {
  return (
    <div>
      <TextField
        id={id}
        label={label}
        variant={variant}
        onChange={inputHandler}
      />
    </div>
  );
};
