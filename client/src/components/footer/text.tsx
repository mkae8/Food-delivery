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
              position: "relative", 
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%", 
                height: "100%",
              }}
            >
              {/* <Image
                priority
                src="/image copy.png" 
                fill 
                alt="description" 
                style={{ objectFit: "cover" }} 
              /> */}
            </Box>

            <Typography fontWeight={700} fontSize={20} color="text.secondary">
              Food Delivery
            </Typography>

          </Box>
        </Box>
      </Container>
    </Paper>
  );
}
