"use client";

import { Typography } from "@mui/material";
import { InputPassword } from "../InputPassword";
import { ButtonGlobal } from "../ButtonGlobal";

export const NewPassword = () => {
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
          variant="h1"
          component={"h1"}
          sx={{
            fontSize: "28px",
            fontWeight: "700",
            width: "384px",
            height: "48px",
          }}
        >
          Шинэ нууц үг зохиох
        </Typography>

        <InputPassword text="Нууц үг " label="Шинэ нууц үг" />
        <InputPassword
          text="Нууц үг давтах "
          label="Шинэ нууц үгийг дахин давтана уу"
        />
        <ButtonGlobal text="Үргэлжлүүлэх" width="384px" height="56px" />
      </div>
    </>
  );
};
