"use client";

import { NewPassword } from "@/components/password/NewPassword";
import { Password } from "@/components/password/Password";
import { PasswordReset } from "@/components/password/PasswordReset";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface StepProps {
  clickHandler: () => void;
}

const steps: React.FC<StepProps>[] = [Password, PasswordReset, NewPassword];

const ForgotPassword = () => {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const StepComponent = steps[step];

  const continueHandler = () => {
    if (step === 2) {
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
