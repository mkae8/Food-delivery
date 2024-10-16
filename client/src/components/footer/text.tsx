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
              position: "relative", // Necessary for the image
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%", // Full width
                height: "100%", // Full height
              }}
            >
              <Image
                priority
                src="/image copy.png" // Update to your image path
                fill // Use 'fill' to fill the parent container
                alt="description" // Descriptive alt text
                style={{ objectFit: "cover" }} // Set the style directly
              />
            </Box>

            <Typography fontWeight={700} fontSize={20} color="text.secondary">
              Food Delivery
            </Typography>

            {/* Other content here... */}
          </Box>
        </Box>
      </Container>
    </Paper>
  );
}
