"use client";
import Loading from "@/components/password/Loading";
import { AvatarIcon } from "@/components/userProfile/AvatarIcon";
import { EditPhone } from "@/components/userProfile/EditPhone";
import { EditProfile } from "@/components/userProfile/EditProfile";
import { EmailIcon } from "@/components/userProfile/EmailIcon";
import { Exit } from "@/components/userProfile/Exit";
import { OrderHistory } from "@/components/userProfile/OrderHistory";
import { Typography, CircularProgress, Button, Container } from "@mui/material";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("You need to be logged in to access profile information.");
        setLoading(false);
        return;
      }

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
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserDetail((prev) => (prev ? { ...prev, [name]: value } : prev));
  };

  // const handleSubmit = async () => {
  //   if (!userDetail) return;

  //   try {
  //     const result = await axios.post(
  //       `${process.env.BACKEND_URL}/updateProfile`,
  //       userDetail
  //     );
  //     toast.success("Profile updated successfully.");
  //   } catch (error) {
  //     toast.error("Update failed. Please try again.");
  //   }
  // };

  if (loading) {
    return <Loading />;
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "700px",
        width: "600px",
        marginTop: "200px",
      }}
    >
      <AvatarIcon />
      <Typography variant="h4">
        {userDetail ? userDetail.username : "No user data available"}
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
        onEditClick={(initialPhoneNumber) =>
          setUserDetail((prev) =>
            prev ? { ...prev, phoneNumber: initialPhoneNumber } : prev
          )
        }
      />
      <EmailIcon
        disabled={!userDetail?.email}
        email={userDetail?.email || ""}
        setEmail={(email) =>
          setUserDetail((prev) => (prev ? { ...prev, email: email } : prev))
        }
        label="Email"
        onEditClick={(email) =>
          setUserDetail((prev) => (prev ? { ...prev, email: email } : prev))
        }
      />
      <OrderHistory />
      <Exit />

      {/* <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{
          marginTop: "20px",
          width: "384px",
          height: "48px",
          padding: "8px, 16px",
        }}
      >
        Хадгалах
      </Button> */}
    </Container>
  );
};

export default UserProfile;
