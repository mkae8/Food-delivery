"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function GuestFooter() {
  return (
    <Paper
      sx={{ marginTop: "calc(10% + 100px)", bottom: 0 }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg" sx={{ height: "544px" }}>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",

            my: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              gap: "25px",
              width: "full",
              height: "544px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                paddingTop: "100px",
              }}
            >
              <Image
                src={"/image.png"}
                width={31.27}
                height={26.77}
                alt="imagedesc"
              />
              <Typography fontWeight={700} fontSize={20} color="text.secondary">
                Food Delivery
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              <Typography color="text.secondary">Home</Typography>
              <Typography color="text.secondary">Холбоо барих</Typography>
              <Typography color="text.secondary">Хоолны цэс</Typography>
              <Typography color="text.secondary">
                Үйлчилгээний нөхцөл
              </Typography>
              <Typography color="text.secondary">Хүргэлтийн бүс</Typography>
              <Typography color="text.secondary">Нууцлалын бодлого</Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "center",
                display: "flex",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="caption" color="text.secondary">
                  © 2024 Pinecone Foods LLC
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Зохиогчийн эрх хуулиар хамгаалагдсан
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
}
