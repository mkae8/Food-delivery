"use client";

import { Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { StyleHTMLAttributes, useState } from "react";

type DataBaseInformationProps = {
  foodPic: string;
  foodName: string;
  price: number;
  foodIngredients: string;
  onCountChange: (newCount: number) => void;
  incrementCount: () => void;
  decrementCount: () => void;
  count: any;
  closeBagCart: () => void;
  totalPrice: number[];
  sx: any;
};

export default function BagCart({
  foodName,
  foodPic,
  foodIngredients,
  incrementCount,
  decrementCount,
  totalPrice,
  closeBagCart,
  sx,
}: // count,
DataBaseInformationProps) {
  return (
    <Card sx={sx}>
      <div>
        <img
          style={{
            width: "245px",
            height: "150px",
            objectFit: "cover",
          }}
          src={foodPic}
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
            <p>{totalPrice}</p>
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
            onClick={incrementCount}
            sx={{ width: "45px", height: "40px" }}
            variant="contained"
          >
            <AddIcon />
          </Button>
          <Typography>{"count"}</Typography>
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
