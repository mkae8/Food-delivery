"use client";

import React, { useState } from "react";
import { InputGlobal } from "../InputGlobal";
import { InputPassword } from "../InputPassword";
import { ButtonGlobal } from "../ButtonGlobal";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Container, Typography } from "@mui/material";
import Loading from "../password/Loading";
import { toast } from "react-toastify";

export const SignUp = () => {
  const { push } = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userDetail, setUserDetail] = useState({
    username: "",
    email: "",
    address: "",
    password: "",
    rePassword: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserDetail((prev) => ({ ...prev, [name]: value }));
  };

  const handeSubmit = async () => {
    setError("");
    setLoading(true);
    const { username, email, address, password, rePassword } = userDetail;

    if (!username || !email || !address || !password || !rePassword) {
      setError("Дутуу бөглөсөн байна !");
      setLoading(false);
      return;
    }

    if (password !== rePassword) {
      setError("Нууц үг таарахгүй байна");
      setLoading(false);
      return;
    }
    try {
      const result = await axios.post("http://localhost:8000/user/signup", {
        username,
        email,
        address,
        password,
      });
      console.log(result);
      
      toast.success(" Бүртгэл амжилттай үүслээ! ");
      push("/login");
    } catch (error) {
      setError(`Backendtei server unasan bn ${error}`);
      toast.error("Бүртгэл амжилгүй боллоо. Дахин оролдоно уу!");
      setLoading(false);
    }
  };
  if (loading) {
    return <Loading />;
  }
  const isFormFilled = Object.values(userDetail).every(
    (value) => value.trim() !== ""
  );

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "131px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "48px",
          width: "448px",
          height: "722px",
          padding: "32px",
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
          <Typography
            sx={{
              color: "Red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            {error}
          </Typography>
          <ButtonGlobal
            text="Бүртгүүлэх"
            clickhandler={handeSubmit}
            background={isFormFilled ? "#18ba51" : "#EEEFF2"}
            color={isFormFilled ? "#FFFFFF" : "#000000"}
          />
        </div>
      </div>
    </Container>
  );
};


