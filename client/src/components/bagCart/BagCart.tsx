"use client";

import { Box, Button, List, Menu, Tab, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

type DataBaseInformationProps = {
  images: string[];
  foodName: string;
  price: string;
  foodIngredients: string;
  incrementCount: () => void;
  decrementCount: () => void;
  quantity: number;
  closeBagCart: () => void;
  sx: any;
};

export default function BagCart({
  foodName,
  images,
  foodIngredients,
  incrementCount,
  decrementCount,
  closeBagCart,
  quantity,
  sx,
  price,
}: DataBaseInformationProps) {
  const totalPrice = Number(price) * Number(quantity);

  return (
    <Box sx={sx}>
      <Box>
        <img
          style={{
            height: "150px",
            objectFit: "cover",
            width: "245px",
          }}
          src={images[0]}
          alt=""
        />
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>{foodName}</Typography>
            <Typography>{totalPrice}</Typography>
          </Box>
          <Button
            onClick={closeBagCart}
            sx={{ color: "black", width: "45px", height: "40px" }}
          >
            <ClearIcon />
          </Button>
        </Box>
        <Box
          sx={{
            fontSize: "16px",
            color: "#767676",
            fontWeight: "400",
            overflow: "visible",
            wordSpacing: "1px",
            lineHeight: 1.2,
          }}
        >
          {foodIngredients}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            onClick={decrementCount}
            sx={{ width: "45px", height: "40px" }}
            variant="contained"
          >
            <RemoveIcon />
          </Button>

          <Typography>{quantity}</Typography>

          <Button
            onClick={incrementCount}
            sx={{ width: "45px", height: "40px" }}
            variant="contained"
          >
            <AddIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
