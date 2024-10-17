// "use client";

// import Image from "next/image";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import { Stack } from "@mui/material";
// import { useRouter } from "next/navigation"; // useRouter-г импортолж байна

// const GuestFooter: React.FC = () => {
//   const router = useRouter(); // router hook-ийг ашиглаж байна

//   const navigate = (path: string) => {
//     router.push(path); // өгөгдсөн зам руу шилжих үйлдэл
//   };

//   const routers = [
//     {
//       title: "Home",
//       href: "/",
//     },
//     {
//       title: "Contact",
//       href: "/contact",
//     },
//     {
//       title: "menu",
//       href: "/about",
//     },
//     {
//       title: "terms",
//       href: "/signUp",
//     },
//   ];

//   return (
//     <Stack height="545px" bgcolor="green" position="relative">
//       <Stack position="absolute">
//         <Box
//           sx={{
//             bgcolor: "#18BA51",
//             position: "relative",
//             width: "100vw",
//             height: "545px",
//           }}
//         >
//           <Image
//             src="/image copy.png"
//             fill
//             alt="Background image"
//             style={{ objectFit: "cover" }}
//           />
//         </Box>
//       </Stack>
//       <Box
//         sx={{
//           justifyContent: "center",
//           display: "flex",
//           position: "absolute",
//           width: "100vw",
//           height: "545px",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: "45px",
//             width: "full",
//             height: "544px",
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: "10px",
//             }}
//           >
//             <Image
//               src={"/image.png"}
//               width={31.27}
//               height={26.77}
//               alt="Food Delivery"
//             />
//             <Typography
//               fontWeight={700}
//               fontSize={20}
//               color="primary.contrastText"
//             >
//               Food Delivery
//             </Typography>
//           </Box>

//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               width: "1200px",
//             }}
//           >
//             {routers.map(({ href, title }) => (
//               <Link href={href} key={title}>
//                 {title}
//               </Link>
//             ))}
//             <Typography
//               color="primary.contrastText"
//               onClick={() => navigate("/")}
//               sx={{ cursor: "pointer" }}
//             >
//               Home
//             </Typography>
//             <Typography
//               color="primary.contrastText"
//               onClick={() => navigate("/contact")}
//               sx={{ cursor: "pointer" }}
//             >
//               Холбоо барих
//             </Typography>
//             <Typography
//               color="primary.contrastText"
//               onClick={() => navigate("/menu")}
//               sx={{ cursor: "pointer" }}
//             >
//               Хоолны цэс
//             </Typography>
//             <Typography
//               color="primary.contrastText"
//               onClick={() => navigate("/terms")}
//               sx={{ cursor: "pointer" }}
//             >
//               Үйлчилгээний нөхцөл
//             </Typography>
//             <Typography
//               color="primary.contrastText"
//               onClick={() => navigate("/delivery-area")}
//               sx={{ cursor: "pointer" }}
//             >
//               Хүргэлтийн бүс
//             </Typography>
//             <Typography
//               color="primary.contrastText"
//               onClick={() => navigate("/privacy-policy")}
//               sx={{ cursor: "pointer" }}
//             >
//               Нууцлалын бодлого
//             </Typography>
//           </Box>

//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: "10px",
//             }}
//           >
//             <Image
//               src={"/image copy 2.png"}
//               width={31.27}
//               height={26.77}
//               alt="Social Media 1"
//             />
//             <Image
//               src={"/image copy 3.png"}
//               width={31.27}
//               height={26.77}
//               alt="Social Media 2"
//             />
//             <Image
//               src={"/image copy 4.png"}
//               width={31.27}
//               height={26.77}
//               alt="Social Media 3"
//             />
//           </Box>

//           <Box
//             sx={{
//               justifyContent: "center",
//               display: "flex",
//               width: "1200px",
//               borderTop: "solid 1px white",
//               pt: 1,
//             }}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 height: "46px",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 paddingTop: "25px",
//                 paddingBottom: "25px",
//               }}
//             >
//               <Typography variant="caption" color="primary.contrastText">
//                 © 2024 Pinecone Foods LLC
//               </Typography>
//               <Typography variant="caption" color="primary.contrastText">
//                 Зохиогчийн эрх хуулиар хамгаалагдсан
//               </Typography>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Stack>
//   );
// };

// export default GuestFooter;

"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const GuestFooter: React.FC = () => {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };
  console.log(navigate);

  const routers = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Contact",
      href: "/footer-info/contact",
    },
    {
      title: "Menu",
      href: "/footer-info/menu",
    },
    {
      title: "Terms",
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
          }}
        >
          <Image
            src="/image copy.png"
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
            {routers.map(({ href, title }) => (
              <Link href={href} key={title} style={{ textDecoration: "none" }}>
                <Typography
                  color="primary.contrastText"
                  sx={{ cursor: "pointer" }}
                >
                  {title}
                </Typography>
              </Link>
            ))}
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
              priority
            />
            <Image
              src={"/image copy 3.png"}
              width={31.27}
              height={26.77}
              alt="Social Media 2"
              priority
            />
            <Image
              src={"/image copy 4.png"}
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
