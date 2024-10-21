"use client";

import { Box, Container, TextField, Typography } from "@mui/material";

import { InputPassword } from "../InputPassword";
import { ButtonGlobal } from "../ButtonGlobal";
import Link from "next/link";

export const Login = () => {
  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: "448px",
          height: "549px",

          justifyContent: "space-around",
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
          Нэвтрэх
        </Typography>

        <Box
          sx={{
            width: "384px",
            height: "179px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Имэйл "
            variant="outlined"
            placeholder="Имэйл хаягаа оруулна уу"
            sx={{ width: "384px", height: "48px" }}
          />
          <InputPassword text="Нууц үг " label="Нууц үг " name="password" />
          <div
            style={{
              fontSize: "14px",
              textAlign: "end",
              width: "384px",
            }}
          >
            Нууц үг сэргээх
          </div>
        </Box>

        <Box
          sx={{
            width: "384px",
            height: "177px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            justifyContent: "space-between",
          }}
        >
          <ButtonGlobal
            text="Нэвтрэх"
            width="384px"
            height="56px"
            variant="outlined"
            background="#EEEFF2"
            border="none"
            color="black"
          />

          <div style={{ fontSize: "14px" }}>Эсвэл</div>
          <Link href="/register">
            <ButtonGlobal
              text="Бүртгүүлэх"
              width="384px"
              height="56px"
              variant="outlined"
              color="black"
            />
          </Link>
        </Box>
      </Container>
    </>
  );
};
