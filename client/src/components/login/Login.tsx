"use client";

import { Box, colors, Container, TextField, Typography } from "@mui/material";

import { InputPassword } from "../InputPassword";
import { ButtonGlobal } from "../ButtonGlobal";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/provider/UserProvider";

export const Login = () => {
  const { push } = useRouter();
  const { isLoggedIn, loginHandler } = useUser();
  const [error, setError] = useState("");
  const [userDetail, setUserDetail] = useState({ email: "", password: "" });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    console.log(event.target.value);

    setUserDetail((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = async () => {
    if (!userDetail.email || !userDetail.password) {
      setError("Бөглөөрэй хө");
      return;
    }
    try {
      await loginHandler(userDetail.email, userDetail.password);
      push("/");
    } catch (error: any) {
      setError("Нууц үг эсвэл хэрэглэгчийн нэр буруу байна");
      console.log();
    }
  };

  if (isLoggedIn) {
    push("/");
  }
  console.log(userDetail);

  const isFormFilled = userDetail.email !== "" && userDetail.password !== "";

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
            name="email"
            placeholder="Имэйл хаягаа оруулна уу"
            sx={{ width: "384px", height: "48px" }}
            onChange={handleChange}
          />
          <InputPassword
            text="Нууц үг "
            label="Нууц үг"
            onChange={handleChange}
            name="password"
          />
          <Link href={"/forgotPassword"}>
            <div
              style={{
                fontSize: "14px",
                textAlign: "end",
                width: "384px",
              }}
            >
              Нууц үг сэргээх
            </div>
          </Link>
        </Box>

        <Typography sx={{ color: "red" }}>{error}</Typography>

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
            border="none"
            color="black"
            clickhandler={handleClick}
            background={isFormFilled ? "#18ba51" : "#EEEFF2"}
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
