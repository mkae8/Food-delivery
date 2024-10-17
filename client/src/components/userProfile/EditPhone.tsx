"use client";
import { Stack, Typography } from "@mui/material";

import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

export const EditPhone = () => {
  return (
    <>
      <div>
        <div
          style={{
            width: "394px",
            height: "64px",
            backgroundColor: "#F6F6F6",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingInline: "12px",
            borderRadius: "8px",
            marginTop: "20px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <LocalPhoneOutlinedIcon
              style={{
                width: "48px",
                height: "48px",
                border: "1px solid #EEEFF2",
                borderRadius: "50%",
              }}
            ></LocalPhoneOutlinedIcon>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingInline: "5px",
              }}
            >
              <Typography style={{ fontSize: "12px", color: "#888A99" }}>
                Утасны дугаар
              </Typography>
              <Typography style={{ fontSize: "16px", color: "#0D1118" }}>
                99119911
              </Typography>
            </div>
          </div>
          <Stack
            sx={{
              width: "34px",
              height: "34px",
              color: "#18BA51",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ModeEditOutlineOutlinedIcon></ModeEditOutlineOutlinedIcon>
          </Stack>
        </div>
      </div>
    </>
  );
};
