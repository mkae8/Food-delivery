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
import { toast } from "react-toastify";

interface UserInformation {
  username: string;
  phoneNumber: string;
  email: string;
}

const UserProfile = () => {
  const [userDetail, setUserDetail] = useState<UserInformation | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get<UserInformation>(
          `${process.env.BACKEND_URL}/user/profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUserDetail(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error("Failed to load user data.");
      }
    };
    fetchUserData();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserDetail((prev) => (prev ? { ...prev, [name]: value } : prev));
  };

  const handleSubmit = async () => {
    if (!userDetail) return;

    try {
      const result = await axios.post(
        `${process.env.BACKEND_URL}/updateProfile`,
        userDetail
      );
      console.log(result);
      toast.success("Profile updated successfully.");
    } catch (error) {
      toast.error("Update failed. Please try again.");
    }
  };

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
        {userDetail ? userDetail.username : "Loading..."}
      </Typography>

      <EditProfile
        userName={userDetail?.username || ""}
        onEditClick={(newName) =>
          setUserDetail((prev) =>
            prev ? { ...prev, username: newName } : prev
          )
        }
        onChange={handleChange}
      />

      <EditPhone
        initialPhoneNumber={userDetail?.phoneNumber || ""}
        label="Phone Number"
        onChange={handleChange}
      />

      <EmailIcon
        disabled={!userDetail?.email}
        email={userDetail?.email || ""}
        setEmail={(email) =>
          setUserDetail((prev) => (prev ? { ...prev, email } : prev))
        }
        label="Email"
        onChange={handleChange}
      />

      <OrderHistory />
      <Exit />
    </div>
  );
};

export default UserProfile;
