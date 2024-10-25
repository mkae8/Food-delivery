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
          width: "448px",
          height: "386px",
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

        <div style={{ marginTop: "48px" }}>
          <InputPassword text="Нууц үг " label="Шинэ нууц үг" name="password" />
        </div>
        <div style={{ marginTop: "24px" }}>
          <InputPassword
            name="password"
            text="Нууц үг давтах "
            label="Шинэ нууц үгийг дахин давтана уу"
          />
        </div>
        <ButtonGlobal text="Үргэлжлүүлэх" width="384px" height="56px" />
      </div>
    </>
  );
};
