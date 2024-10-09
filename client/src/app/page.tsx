

import { InputPassword } from "@/components/InputPassword";
import { Typography } from "@mui/material";

export default function Home() {
  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {};

  return (
    <div>
    <InputPassword label={"Password"} text={"Нууц үгээ оруулна уу"}/>

    </div>
  );
}
