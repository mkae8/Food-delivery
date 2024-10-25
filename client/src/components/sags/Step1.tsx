import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Address } from "./Address";
import { Step2 } from "./Step2";

export const Sags: React.FC = () => {
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
            src="/huleegdej bna.png"
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
        <Step2 />
      </Typography>
    </Container>
  );
};
