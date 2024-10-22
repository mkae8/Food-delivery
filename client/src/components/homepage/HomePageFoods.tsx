"use client";

import { Box, Container, Typography } from "@mui/material";

export const HomePageFoods = () => {
  return (
    <>
      <Container
        sx={{
          width: "screen",
          height: "1616px",
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          gap: "80px",
          marginTop: "122px",
        }}
      >
        <Box
          sx={{
            height: "344px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "screen",
              height: "64px",
            }}
          >
            <Typography sx={{ fontSize: "22px", fontWeight: "700" }}>
              Хямдралтай
            </Typography>
            <Typography sx={{ color: "#18BA51" }}>Бүгдийг харах</Typography>
          </Box>
          <Box></Box>
        </Box>
      </Container>
    </>
  );
};
