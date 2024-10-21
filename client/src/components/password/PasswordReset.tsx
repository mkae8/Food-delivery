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
          width: "448px",
          height: "386px",
          // border: "1px solid black"
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
            marginTop: "48px",
          }}
        >
          Таны <span style={{ color: "green" }}>example@pinecone.mn</span> хаяг
          руу сэргээх код <br /> илгээх болно.
        </Typography>
        <div style={{ marginTop: "32px" }}>
          <InputPassword
            text="4 оронтой кодыг оруулна уу"
            label="Нууц үг сэргээх код"
            name="passoword"
          />
          <ButtonGlobal text="Үргэлжлүүлэх" width="384px" height="56px" />
        </div>
      </div>
    </>
  );
};
