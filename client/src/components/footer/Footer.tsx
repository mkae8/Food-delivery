"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

const GuestFooter: React.FC = () => {
  return (
    <Stack height="545px" bgcolor="green" position="relative">
      <Stack position="absolute">
        <Box
          sx={{
            bgcolor: "#18BA51",
            position: "relative",
            width: "100vw",
            height: "545px",
          }}
        >
          <Image
            src="/image copy.png"
            fill
            alt="Background image"
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Stack>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          position: "absolute",
          width: "100vw",
          height: "545px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: "45px",
            width: "full",
            height: "544px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Image
              src={"/image.png"}
              width={31.27}
              height={26.77}
              alt="Food Delivery"
            />
            <Typography
              fontWeight={700}
              fontSize={20}
              color="primary.contrastText"
            >
              Food Delivery
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "1200px",
            }}
          >
            <a href="/" style={{ textDecoration: "none" }}>
              <Typography color="primary.contrastText">Home</Typography>
            </a>
            <a href="/contact" style={{ textDecoration: "none" }}>
              <Typography color="primary.contrastText">Холбоо барих</Typography>
            </a>
            <a href="/menu" style={{ textDecoration: "none" }}>
              <Typography color="primary.contrastText">Хоолны цэс</Typography>
            </a>
            <a href="/terms" style={{ textDecoration: "none" }}>
              <Typography color="primary.contrastText">
                Үйлчилгээний нөхцөл
              </Typography>
            </a>
            <a href="/delivery-area" style={{ textDecoration: "none" }}>
              <Typography color="primary.contrastText">
                Хүргэлтийн бүс
              </Typography>
            </a>
            <a href="/privacy-policy" style={{ textDecoration: "none" }}>
              <Typography color="primary.contrastText">
                Нууцлалын бодлого
              </Typography>
            </a>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Image
              src={"/image copy 2.png"}
              width={31.27}
              height={26.77}
              alt="Social Media 1"
            />
            <Image
              src={"/image copy 3.png"}
              width={31.27}
              height={26.77}
              alt="Social Media 2"
            />
            <Image
              src={"/image copy 4.png"}
              width={31.27}
              height={26.77}
              alt="Social Media 3"
            />
          </Box>

          <Box
            sx={{
              justifyContent: "center",
              display: "flex",
              width: "1200px",
              borderTop: "solid 1px white",
              pt: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                height: "46px",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "25px",
                paddingBottom: "25px",
              }}
            >
              <Typography variant="caption" color="primary.contrastText">
                © 2024 Pinecone Foods LLC
              </Typography>
              <Typography variant="caption" color="primary.contrastText">
                Зохиогчийн эрх хуулиар хамгаалагдсан
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default GuestFooter;
