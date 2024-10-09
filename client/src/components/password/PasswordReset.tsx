"use client";

import { Typography } from "@mui/material";
import { InputPassword } from "../InputPassword";
import { ButtonGlobal } from "../ButtonGlobal";

export const PasswordReset = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "48px",
          width: "448px",
          height: "310px",
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
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            width: "384px",
            textAlign: "left",
          }}
        >
          Таны <span style={{ color: "green" }}>example@pornhub.mn</span> хаяг
          руу сэргээх код <br /> илгээх болно.
        </Typography>
        <InputPassword
          text="4 оронтой кодыг оруулна уу"
          label="Нууц үг сэргээх код"
        />
        <ButtonGlobal text="Үргэлжлүүлэх" width="384px" height="56px" />
      </div>
    </>
  );
};
