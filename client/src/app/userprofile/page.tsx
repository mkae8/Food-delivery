"use client";

import { AvatarIcon } from "@/components/userProfile/AvatarIcon";
import { EditPhone } from "@/components/userProfile/EditPhone";
import { EditProfile } from "@/components/userProfile/EditProfile";
import { EmailIcon } from "@/components/userProfile/EmailIcon";
import { Exit } from "@/components/userProfile/Exit";
import { OrderHistory } from "@/components/userProfile/OrderHistory";

import { Typography } from "@mui/material";

const UserProfile = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
        marginTop: "200px",
      }}
    >
      <AvatarIcon />
      <Typography>
        <h1>Mansont</h1>
      </Typography>

      <EditProfile
        userName="Hahaha"
        onEditClick={() => console.log("Edit Profile Clicked")}
      />

      <EditPhone
        initialPhoneNumber="123123123"
        label="Утасны дугаар"
        onEditClick={async () => {
          console.log("Edit Phone Clicked!");
          return Promise.resolve();
        }}
      />

      <EmailIcon
        initialEmail="test@gmail.com"
        label="Email"
        onEditClick={() => console.log("Edit Email Clicked")}
      />

      <OrderHistory />
      <Exit />
    </div>
  );
};

export default UserProfile;
