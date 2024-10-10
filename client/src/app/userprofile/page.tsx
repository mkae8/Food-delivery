'use client';

import { AvatarIcon } from "@/components/userProfile/AvatarIcon";
import { EditProfile } from "@/components/userProfile/EditProfile";

import { Avatar, Typography } from "@mui/material";

const UserProfile = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '400px', 
    }}>
      <AvatarIcon />
      <Typography><h1>Mansont</h1></Typography>
      <EditProfile />
    </div>
  );
};

export default UserProfile;
