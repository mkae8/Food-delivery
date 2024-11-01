import { Box, Container, Typography } from "@mui/material";
import { Zahialga } from "./Zahialga";

interface stepImgprops {
  stepImg: string;
}
export const Step2 = ({ stepImg }: stepImgprops) => {
  return (
    <Container sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "center",
            alignItems: "center ",
            gap: "16px",
            marginTop: "20px",
            padding: "16px",
          }}
        >
          <img
            src={stepImg}
            style={{ width: "48px", height: "48px", marginBottom: "8px" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography sx={{ color: "gray" }}>Алхам 2</Typography>
            <Typography sx={{ fontSize: "20px" }}>
              Захиалга баталгаажуулах
            </Typography>
            <Typography sx={{ color: "#0468C8" }}>Хүлээгдэж байна</Typography>
          </Box>
        </Box>
        <Typography>
          <Zahialga />
        </Typography>
      </Box>
    </Container>
  );
};
