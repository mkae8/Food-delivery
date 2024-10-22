"use client";

import { Box } from "@mui/material";

const HomePageHeader = () => {
  return (
    <>
      <Box
        sx={{
          width: "screen",
          height: "788px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="/homepage.png" alt="" />
      </Box>
    </>
  );
};

export default HomePageHeader;
