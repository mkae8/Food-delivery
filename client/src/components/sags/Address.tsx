import { Box, Select } from "@mui/material";
import { SagsSelect } from "./SagsSelect";

export const Address = () => {
  return (
    <>
      <Box
        sx={{
          border: "1px none ",
          width: "432px",
          height: "612px",
          paddingY: "8px",
          borderRadius: "16px",
          boxShadow: "0px 0px 20px 0px #0000000D",
        }}
      >
        <SagsSelect />
      </Box>
    </>
  );
};
