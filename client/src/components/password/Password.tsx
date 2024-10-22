"use client";

import { Typography } from "@mui/material";
import { InputGlobal } from "../InputGlobal";
import { ButtonGlobal } from "../ButtonGlobal";
import React from "react";

export const Password: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        // border: "1px solid black",

        width: "448px",
        height: "386px",
      }}
    >
      <Typography
        sx={{
          fontSize: "28px",
          fontWeight: "700",
          width: "384px",
          height: "48px",
        }}
      >
        Нууц үг сэргээх
      </Typography>
      <div style={{ marginTop: "32px" }}>
        <InputGlobal name="password" />
      </div>

      <div style={{ marginTop: "32px" }}>
        <ButtonGlobal text="Үргэлжлүүлэх" width="384px" height="56px" />
      </div>
    </div>
  );
};
