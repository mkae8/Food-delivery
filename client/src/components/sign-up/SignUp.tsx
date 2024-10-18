"use client";

import React, { useState } from "react";
import { InputGlobal } from "../InputGlobal";
import { InputPassword } from "../InputPassword";
import { ButtonGlobal } from "../ButtonGlobal";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Typography } from "@mui/material";

export const SignUp = () => {
  const { push } = useRouter();
  const [error, setError] = useState("");
  const [userDetail, setUserDetail] = useState({
    username: "",
    email: "",
    address: "",
    password: "",
    rePassword: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUserDetail((prev) => ({ ...prev, [name]: value }));
  };

  const handeSubmit = async () => {
    if (userDetail.password !== userDetail.rePassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const result = await axios.post("http://localhost:8000/user/signup", {
        username: userDetail.username,
        email: userDetail.email,
        address: userDetail.address,
        password: userDetail.password,
      });

      push("/login");
    } catch (error) {
      setError("error");
    }
  };

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
        <InputGlobal
          name="username"
          label="Нэр"
          placeholder="Нэрээ оруулна уу"
          onChange={handleChange}
        />
        <InputGlobal
          name="email"
          label="И-мэйл"
          placeholder="И-мэйл хаягаа оруулна уу"
          onChange={handleChange}
        />
        <InputGlobal
          name="address"
          label="Хаяг"
          placeholder="Та хаягаа оруулна уу"
          onChange={handleChange}
        />
        <InputPassword
          name="password"
          label="Нууц үг"
          text="Нууц үгээ оруулна уу"
          onChange={handleChange}
        />
        <InputPassword
          name="rePassword"
          label="Нууц үг давтах"
          text="Нууц үгээ оруулна уу"
          onChange={handleChange}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel
          control={<Checkbox />}
          label="Үйлчилгээний нөхцөл зөвшөөрөх"
        />
        <ButtonGlobal text="Бүртгүүлэх" clickhandler={handeSubmit} />
        <Typography sx={{ color: "Red" }}>{error}</Typography>
      </div>
    </div>
  );
};
