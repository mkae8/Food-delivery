"use client";

import { Box, Button, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import BagCart from "./BagCart";
import { useState } from "react";

export const Bag = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleBag = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <div
      style={{
        display: isSidebarVisible ? "flex" : "none",
        position: "fixed",
        zIndex: "100",
        width: "100vw",
        height: "100vh",
      }}>
      <div
        style={{
          width: "65%",
          backgroundColor: "#00000080",
          opacity: "50%",
        }}></div>
      <div
        style={{
          width: "35%",
          backgroundColor: "white",
          right: "0",
        }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <Button
            onClick={toggleBag}
            style={{ width: "48px", height: "48px", padding: "0px" }}>
            <KeyboardArrowLeftIcon />
          </Button>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            Таны сагс
          </p>
          <p style={{ width: "50px" }} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "16px",
            paddingTop: "16px",
            gap: "16px",
            borderTop: "1px solid #D6D8DB",
          }}>
          <BagCart />
        </div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "172px",
            gap: "10px",
            paddingX: "32px",
            paddingTop: "10px",
            paddingBottom: "30px",
            width: "full",
            position: "fixed",
            bottom: "0px",
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
            }}>
            <Typography>Таны нийт төлөх дүн</Typography>
            <Typography sx={{ fontWeight: "700", fontSize: "18px" }}>
              {"Total"}
            </Typography>
          </Box>
          <Button sx={{ width: "50%" }} variant="contained">
            Захиалах
          </Button>
        </Box>
      </div>
    </div>
  );
};
