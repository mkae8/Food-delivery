import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Stack height="100%">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ marginTop: "50px" }}>
            <Image
              src={"/mapArea.png"}
              width={1240}
              height={616}
              alt="area"
              priority
            />
          </Box>
        </Box>
      </Stack>
      <Box display="flex" marginLeft={5}>
        <Typography
          fontWeight={700}
          fontSize={20}
          display="flex"
          gap="10px"
          alignItems={"center"}
        >
          <Image
            style={{ display: "flex" }}
            src={"/Star.png"}
            width={20}
            height={20}
            priority
            alt="Food Delivery"
          />
          Хүргэлтийн бүс дэх хаягууд
        </Typography>
      </Box>
      <Box
        sx={{
          width: "1200px",

          display: "flex",
          gap: "10px",
          marginTop: "30px",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "560px",
            height: "388px",
            backgroundColor: "white",
            boxShadow: "0px 0px 20px 0 rgba(0, 0, 0, 0.20)",
            borderRadius: "16px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: "480px",
              height: "330px",
              gap: "16px",
              display: "flex",
              flexDirection: "column",
              padding: "16px",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>A Бүс</Typography>
            <hr style={{ color: "#18BA51" }} />
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                justifyContent: "space-between",
                rowGap: "10px",
              }}
            >
              <Box
                sx={{
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Typography>Нархан хотхон</Typography>
                <Typography>26-р байр</Typography>
                <Typography>26-р байр</Typography>
                <Typography>45-р байр</Typography>
                <Typography>3-р байр</Typography>
                <Typography>Хоймор хотхон </Typography>
                <Typography>Хоймор хотхон </Typography>
              </Box>
              <Box
                sx={{
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Typography>Нархан хотхон</Typography>
                <Typography>26-р байр</Typography>
                <Typography>26-р байр</Typography>
                <Typography>45-р байр</Typography>
                <Typography>3-р байр</Typography>
                <Typography>Хоймор хотхон </Typography>
                <Typography>Хоймор хотхон </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "560px",
            height: "388px",
            backgroundColor: "white",
            boxShadow: "0px 0px 20px 0 rgba(0, 0, 0, 0.20)",
            borderRadius: "16px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: "480px",
              height: "330px",
              gap: "16px",
              display: "flex",
              flexDirection: "column",
              padding: "16px",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Б Бүс</Typography>
            <hr style={{ color: "#18BA51" }} />
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                justifyContent: "space-between",
                rowGap: "10px",
              }}
            >
              <Box
                sx={{
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Typography>Нархан хотхон</Typography>
                <Typography>26-р байр</Typography>
                <Typography>26-р байр</Typography>
                <Typography>45-р байр</Typography>
                <Typography>3-р байр</Typography>
                <Typography>Хоймор хотхон </Typography>
                <Typography>Хоймор хотхон </Typography>
              </Box>
              <Box
                sx={{
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Typography>Нархан хотхон</Typography>
                <Typography>26-р байр</Typography>
                <Typography>26-р байр</Typography>
                <Typography>45-р байр</Typography>
                <Typography>3-р байр</Typography>
                <Typography>Хоймор хотхон </Typography>
                <Typography>Хоймор хотхон </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default page;
