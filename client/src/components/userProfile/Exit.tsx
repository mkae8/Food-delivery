"use client";

import { Button, Stack, Typography } from "@mui/material";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { useRouter } from "next/navigation";

export const Exit = () => {
  const router = useRouter();

  const handleExitClick = () => {
    router.push("/"); // Нүүр хуудас руу шилжих!!!
  };

  return (
    <div onClick={handleExitClick} style={{ cursor: "pointer" }}>
      <div
        style={{
          width: "394px",
          height: "64px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingInline: "12px",
          borderRadius: "8px",
          marginTop: "20px",
          transition: "background-color 0.3s",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              border: "1px solid #EEEFF2",
              backgroundColor: "#FFFFFF",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ExitToAppOutlinedIcon
              sx={{
                width: "24px",
                height: "24px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingInline: "5px",
            }}
          >
            <Button style={{ fontSize: "16px", color: "#0D1118" }}>
              Гарах
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
