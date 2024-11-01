"use client";

import { Typography } from "@mui/material";
import { InputPassword } from "../InputPassword";
import { ButtonGlobal } from "../ButtonGlobal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import Loading from "./Loading";
import axios from "axios";

interface NewPasswordProps {
  clickHandler: () => void;
}

export const NewPassword: React.FC<NewPasswordProps> = ({ clickHandler }) => {
  const { push } = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
    rePassword: "",
  });

  const email = JSON.parse(localStorage.getItem("email") || "null");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserDetail((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    const { password, rePassword } = userDetail;

    if (!password || !rePassword) {
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
      const result = await axios.put(
        `${process.env.BACKEND_URL}/passwordUpdate`,
        { email, password }
      );
      console.log(result);
      toast.success("Нууц үг амжилттай шинэчлэгдлээ");
      clickHandler();
      push("/login");
    } catch (error) {
      console.log(error);
      toast.error("Амжилгүй боллоо. Дахин оролдоно уу!");
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
        justifyContent: "space-around",
        textAlign: "center",
        width: "448px",
        height: "403px",
        marginTop: "200px",
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

      <div>
        <InputPassword
          text="Нууц үг "
          label="Шинэ нууц үг"
          name="password"
          onChange={handleChange}
        />
      </div>
      <div>
        <InputPassword
          name="rePassword"
          text="Нууц үг давтах "
          label="Шинэ нууц үгийг дахин давтана уу"
          onChange={handleChange}
        />
      </div>
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
        text="Үргэлжлүүлэх"
        width="384px"
        height="56px"
        clickhandler={handleSubmit}
      />
    </div>
  );
};
