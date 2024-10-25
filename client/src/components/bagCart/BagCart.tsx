"use client";

import { Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

type DataBaseInformationProps = {
  foodPic: string;
  foodName: string;
  price: number;
  foodIngredients: string;
  onCountChange: (newCount: number) => void;
  incrementCount: () => void;
  decrementCount: () => void;
  count: number;
  closeCartItem: () => void;
  totalPrice: number[];
};

export default function BagCart({
  foodName,
  foodPic,
  price,
  foodIngredients,
  onCountChange,
  incrementCount,
  decrementCount,
  totalPrice,
}: DataBaseInformationProps) {
  const [count, setCount] = useState(0);
  const OneFoodPrice = 14500;

  const AllFoodPrice = count * OneFoodPrice;
  console.log(totalPrice);

  return (
    <Card
      sx={{
        padding: "16px",
        display: "flex",
        gap: "16px",
        backgroundColor: "white",
      }}
    >
      <img
        style={{
          width: "245px",
          height: "150px",
        }}
        src={foodPic}
        alt=""
      />
      <div style={{ width: "245px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p>{foodName}</p>
            <p>{totalPrice}</p>
          </div>
          <Button /* onclick={} */
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
            onClick={incrementCount}
            sx={{ width: "45px", height: "40px" }}
            variant="contained"
          >
            <AddIcon />
          </Button>
          <Typography>{count}</Typography>
          <Button
            onClick={decrementCount}
            sx={{ width: "45px", height: "40px" }}
            variant="contained"
          >
            <RemoveIcon />
          </Button>
        </div>
      </div>
    </Card>
  );
}
