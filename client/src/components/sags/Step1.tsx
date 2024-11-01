"use client";

import { Box, Container, Typography } from "@mui/material";
import { Address } from "./Address";
import { Step2 } from "./Step2";
import { useState } from "react";

export const Sags: React.FC = () => {
  const [stepImg, setStepImg] = useState<string>(
    "https://res.cloudinary.com/djxo5odaa/image/upload/v1730436521/ydnukh2nkns5t9fyd4uy.png"
  );
  return (
    <Container sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "center",
            alignItems: "center ",
            gap: "16px",
            marginTop: "20px",
            padding: "16px",
          }}
        >
          <img
            src={stepImg}
            style={{ width: "48px", height: "48px", marginBottom: "8px" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography sx={{ color: "gray" }}>Алхам 1</Typography>
            <Typography sx={{ fontSize: "20px" }}>
              Хаягийн мэдээлэл оруулах
            </Typography>
            <Typography sx={{ color: "#0468C8" }}>Хүлээгдэж байна</Typography>
          </Box>
        </Box>
        <Typography>
          <Address />
        </Typography>
      </Box>
      <Typography>
        <Step2 stepImg={stepImg} />
      </Typography>
    </Container>
  );
};
