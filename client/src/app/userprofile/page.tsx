"use client";

import { AvatarIcon } from "@/components/userProfile/AvatarIcon";
import { EditPhone } from "@/components/userProfile/EditPhone";
import { EditProfile } from "@/components/userProfile/EditProfile";
import { X } from "@mui/icons-material";

import { Avatar, Typography } from "@mui/material";

const UserProfile = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
      }}
    >
      <AvatarIcon />
      <Typography>
        <h1>Mansont</h1>
      </Typography>

      <EditProfile />
      <EditPhone />
    </div>
  );
};

export default UserProfile;
