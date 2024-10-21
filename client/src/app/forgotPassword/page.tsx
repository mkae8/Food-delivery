"use client";

import { NewPassword } from "@/components/password/NewPassword";
import { Password } from "@/components/password/Password";
import { PasswordReset } from "@/components/password/PasswordReset";
import PasswordSuccess from "@/components/password/PasswordSuccess";
import { useRouter } from "next/navigation";
import { useState } from "react";

type StepComponent = {
  clickHandler: () => void;
};

const steps: React.FC<StepComponent>[] = [
  Password,
  PasswordReset,
  NewPassword,
  PasswordSuccess,
];

const ForgotPassword = () => {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const StepComponent = steps[step];

  const continueHandler = () => {
    if (step === 3) {
      router.push("/");
      return;
    }
    setStep((prev) => prev + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <StepComponent clickHandler={continueHandler} />
    </div>
  );
};

export default ForgotPassword;
