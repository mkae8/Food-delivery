"use client";
import { AvatarIcon } from "@/components/userProfile/AvatarIcon";
import { EditPhone } from "@/components/userProfile/EditPhone";
import { EditProfile } from "@/components/userProfile/EditProfile";
import { EmailIcon } from "@/components/userProfile/EmailIcon";
import { Exit } from "@/components/userProfile/Exit";
import { OrderHistory } from "@/components/userProfile/OrderHistory";
import { Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

interface UserInformation {
  username: string;
  phoneNumber: string;
  email: string;
}

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState<UserInformation | null>(null);
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get<UserInformation>(
          `http://localhost:8000/user/profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log(response.data);
        setUserInfo(response.data);
        setEmail(response.data.email);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);
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
      <Typography variant="h4">
        {userInfo ? userInfo.username : "Loading..."}
      </Typography>

      <EditProfile
        userName={userInfo ? userInfo.username : "Loading..."}
        onEditClick={() => console.log("Edit Profile Clicked")}
      />

      <EditPhone
        initialPhoneNumber={userInfo ? userInfo.phoneNumber : "99474747"}
        label="Утасны дугаар"
        onEditClick={async () => {
          console.log("Edit Phone Clicked!");
          return Promise.resolve();
        }}
      />

      <EmailIcon
        disabled={userInfo?.email ? false : true}
        email={email}
        setEmail={setEmail}
        label="Email"
        onEditClick={() => console.log("Edit Email Clicked")}
      />

      <OrderHistory />
      <Exit />
    </div>
  );
};

export default UserProfile;
