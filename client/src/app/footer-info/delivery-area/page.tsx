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
          <Box>
            <Image
              src={"/image copy 5.png"}
              width={1200}
              height={616}
              alt="area"
              priority
            />
          </Box>
          <Box display="flex">
            <Typography
              fontWeight={700}
              fontSize={20}
              display="flex"
              gap="10px"
            >
              <Image
                style={{ display: "flex", alignItems: "center" }}
                src={"/image copy 6.png"}
                width={31.27}
                height={26.77}
                priority
                alt="Food Delivery"
              />
              Хүргэлтийн бүс дэх хаягууд
            </Typography>
          </Box>
          <Box>
            <Image
              src={"/image copy 7.png"}
              width={588}
              height={338}
              alt="area"
              priority
            />

            <Image
              src={"/image copy 8.png"}
              width={588}
              height={338}
              alt="area"
              priority
            />
          </Box>
        </Box>
      </Stack>
    </div>
  );
};

export default page;
