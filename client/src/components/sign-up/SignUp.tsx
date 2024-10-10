"use client";

import React from "react";
import { InputGlobal } from "../InputGlobal";
import { InputPassword } from "../InputPassword";
import { ButtonGlobal } from "../ButtonGlobal";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export const SignUp = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "48px",
        width: "448px",
        height: "722px",
        padding: "32px",
        margin: "auto",
      }}
    >
      <div
        style={{ fontSize: "28px", fontWeight: "bold", textAlign: "center" }}
      >
        Бүртгүүлэх
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <InputGlobal label="Нэр" placeholder="Нэрээ оруулна уу" />
        <InputGlobal label="И-мэйл" placeholder="И-мэйл хаягаа оруулна уу" />
        <InputGlobal label="Хаяг" placeholder="Та хаягаа оруулна уу" />
        <InputPassword label="Нууц үг" text="Нууц үгээ оруулна уу" />
        <InputPassword label="Нууц үг давтах" text="Нууц үгээ оруулна уу" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel
          control={<Checkbox />}
          label="Үйлчилгээний нөхцөл зөвшөөрөх"
        />
        <ButtonGlobal text="Бүртгүүлэх" marginTop="32px" />
      </div>
    </div>
  );
};
