"use client";

import { Box, Typography } from "@mui/material";
import { InputPassword } from "../InputPassword";
import { ButtonGlobal } from "../ButtonGlobal";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "./Loading";
import axios from "axios";

interface PasswordResetProps {
  clickHandler: () => void;
}

export const PasswordReset: React.FC<PasswordResetProps> = ({
  clickHandler,
}) => {
  const [otpCode, setOtpCode] = useState("");
  const [loading, setLoading] = useState(false);
  const email = JSON.parse(localStorage.getItem("email") || "null");

  const otpHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtpCode(event.target.value);
  };
  const nextStep = async () => {
    setLoading(true);

    try {
      const response = await axios.post(`food-delivery-ily2.onrender.com/check`, {
        otpCode: Number(otpCode),
        email,
      });

      if (response.status === 200) {
        toast.success("Амжилттай баталгаажууллаа");
        clickHandler();
      }
    } catch (error) {
      console.log(error);
      toast.error("Баталгаажуулж чадсангүй");
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
        width: "448px",
        height: "386px",
        marginTop: "200px",
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
      <Box
        sx={{
          width: "384px",
          height: "145px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            width: "384px",
            textAlign: "left",

            gap: "32px",
            color: "#695C08",
          }}
        >
          Таны <span style={{ color: "green" }}> {email} </span>
          хаяг руу сэргээх код илгээх болно.
        </Typography>
        <InputPassword
          text="4 оронтой кодыг оруулна уу"
          label="Нууц үг сэргээх код"
          name="otpCode"
          onChange={otpHandler}
        />
      </Box>

      <ButtonGlobal
        text="Үргэлжлүүлэх"
        width="384px"
        height="56px"
        clickhandler={nextStep}
      />
    </div>
  );
};
