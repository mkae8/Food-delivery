"use client";

import Loading from "@/components/password/Loading";
import { NewPassword } from "@/components/password/NewPassword";
import { Password } from "@/components/password/Password";
import { PasswordReset } from "@/components/password/PasswordReset";
import PasswordSuccess from "@/components/password/PasswordSuccess";

// const steps = [Password, PasswordReset, NewPassword, PasswordSuccess];

const ForgotPassword = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Password />
        <PasswordReset />
        <NewPassword />
        <Loading />
        <PasswordSuccess />
      </div>
    </>
  );
};

export default ForgotPassword;
