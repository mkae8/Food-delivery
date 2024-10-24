"use client";

import {  Typography } from "@mui/material";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import { useRouter } from "next/navigation";

export const OrderHistory = () => {
  const router = useRouter();

  const handleOrderHistoryClick = () => {
    router.push("/order-history"); // ХЭСЭГ РҮҮ ШИЛЖИХ!!!
  };

  return (
    <div onClick={handleOrderHistoryClick} style={{ cursor: "pointer" }}>
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
            <HistoryOutlinedIcon
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
            <Typography style={{ fontSize: "16px", color: "#0D1118" }}>
              Таны захиалга
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
