"use client";

import { Typography } from "@mui/material";
import { InputGlobal } from "../InputGlobal";
import { ButtonGlobal } from "../ButtonGlobal";
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Loading from "./Loading";

interface PasswordProps {
  clickHandler: () => void;
}

export const Password: React.FC<PasswordProps> = ({ clickHandler }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const nextStep = async () => {
    if (!email) {
      toast.error("Fill in your email");
      return;
    }

    try {
      await axios.post(`${process.env.BACKEND_URL}/sendMailer`, { email });
      clickHandler();
      setLoading(true);
    } catch (error) {
      toast.error("Email not found");
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
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "448px",
        height: "386px",
  
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
      <div style={{ marginTop: "32px" }}>
        <InputGlobal name="email" onChange={emailHandler} />
      </div>

      <div style={{ marginTop: "32px" }}>
        <ButtonGlobal
          text="Үргэлжлүүлэх"
          width="384px"
          height="56px"
          clickhandler={nextStep}
        />
      </div>
    </div>
  );
};
