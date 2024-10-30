"use client";

import { Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
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
    <Card sx={sx}>
      <div>
        <img
          style={{
            width: "245px",
            height: "150px",
            objectFit: "cover",
          }}
          src={images[0]}
          alt=""
        />
      </div>
      <div style={{ width: "245px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p>{foodName}</p>
            <p>{price}</p>
          </div>
          <Button
            onClick={closeBagCart}
            sx={{ color: "black", width: "48px", height: "48px" }}
          >
            <ClearIcon />
          </Button>
        </div>
        <div style={{ fontSize: "16px", color: "#767676", fontWeight: "400" }}>
          {foodIngredients}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            onClick={decrementCount}
            sx={{ width: "45px", height: "40px" }}
            variant="contained"
          >
            <RemoveIcon />
          </Button>

          <Typography>{totalPrice}</Typography>

          <Button
            onClick={incrementCount}
            sx={{ width: "45px", height: "40px" }}
            variant="contained"
          >
            <AddIcon />
          </Button>
        </div>
      </div>
    </Card>
  );
}
