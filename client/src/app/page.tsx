import React, { ChangeEvent } from "react";
import { Input } from "@/components/Input"; 
import { Typography } from "@mui/material";

export default function Home() {
  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value); 
  };

  return (
    <div>
      <Input
        id="password"
        label={"Нууц үг"}
        variant="filled"
        
      />
      <Input
        id="name"
        label="Нэрээ оруулна уу"
        variant="filled"
        
      />
    </div>
  );
}
