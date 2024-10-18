"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";

interface InputGlobalProps {
  label?: string;
  width?: string;
  placeholder?: string;
  name: string;
  height?: string;
  backgroundColor?: string;
  textColor?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputGlobal: React.FC<InputGlobalProps> = ({
  label = "Email",
  placeholder = "Имэйл хаягаа оруулах",
  width = "384px",
  height = "56px",
  backgroundColor = "F7F7F8",
  name,
  textColor = "",
  onChange,
}) => {
  return (
    <TextField
      name={name}
      id="outlined-textarea"
      label={label}
      placeholder={placeholder}
      multiline
      onChange={onChange}
      sx={{
        width,
        height,
        fontSize: "16px",
        backgroundColor,
        "& .MuiInputBase-input": {
          color: textColor,
        },
      }}
    />
  );
};
