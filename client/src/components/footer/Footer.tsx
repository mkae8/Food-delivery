"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import Link from "next/link";
// import { useRouter } from "next/navigation";

const GuestFooter: React.FC = () => {
  // const router = useRouter();

  // const navigate = (path: string) => {
  //   router.push(path);
  // };

  const routers = [
    {
      title: "Нүүр",
      href: "/",
    },
    {
      title: "Холбоо барих",
      href: "/footer-info/contact",
    },
    {
      title: "Хоолны цэс",
      href: "/menu",
    },
    {
      title: "Үйлчилгээний нөхцөл",
      href: "/footer-info/terms",
    },
    {
      title: "Хүргэлтийн бүс",
      href: "/footer-info/delivery-area",
    },
    {
      title: "Нууцлалын бодлого",
      href: "/footer-info/privacy-policy",
    },
  ];

  return (
    <Stack height="545px" bgcolor="green" position="relative">
      <Stack position="absolute">
        <Box
          sx={{
            bgcolor: "#18BA51",
            position: "relative",
            width: "100vw",
            height: "545px",
          }}>
          <Image
            src="https://res.cloudinary.com/djxo5odaa/image/upload/v1730557051/slkzz3x7vkqhajg6bem0.png"
            fill
            priority
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
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: "45px",
            width: "full",
            height: "544px",
          }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}>
            <Image
              src={
                "https://res.cloudinary.com/djxo5odaa/image/upload/v1730556256/aigfqgqtugjtukedrznw.png"
              }
              width={31.27}
              height={26.77}
              alt="Food Delivery"
            />
            <Typography
              fontWeight={700}
              fontSize={24}
              color="primary.contrastText">
              Food Delivery
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "1200px",
            }}>
            {routers.map(({ href, title }) => (
              <Link href={href} key={title} style={{ textDecoration: "none" }}>
                <Typography
                  color="primary.contrastText"
                  sx={{ cursor: "pointer" }}>
                  {title}
                </Typography>
              </Link>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
            }}>
            <Image
              src={
                "https://res.cloudinary.com/djxo5odaa/image/upload/v1730556781/fhymyjhqxlv56qdbnrei.png"
              }
              width={31.27}
              height={29.77}
              alt="Social Media 1"
              priority
            />
            <Image
              src={
                "https://res.cloudinary.com/djxo5odaa/image/upload/v1730556882/msxduyubqxyc1ghwreia.png"
              }
              width={31.27}
              height={29.77}
              alt="Social Media 2"
              priority
            />
            <Image
              src={
                "https://res.cloudinary.com/djxo5odaa/image/upload/v1730556905/qjnvngjkqadbpwz3sts2.png"
              }
              width={31.27}
              height={26.77}
              alt="Social Media 3"
              priority
            />
          </Box>

          <Box
            sx={{
              justifyContent: "center",
              display: "flex",
              width: "1200px",
              borderTop: "solid 1px white",
              pt: 1,
            }}>
            <Box
              sx={{
                display: "flex",
                height: "46px",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "25px",
                paddingBottom: "25px",
              }}>
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
