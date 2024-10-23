"use client";

import { Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

export default function BagCart() {
  const [count, setCount] = useState(0);
  const OneFoodPrice = 14500;

  const nemeh = () => {
    setCount(count + 1);
  };

  const hasah = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const AllFoodPrice = count * OneFoodPrice;

  return (
    <Card
      sx={{
        padding: "16px",
        display: "flex",
        gap: "16px",
        backgroundColor: "white",
      }}>
      <img
        style={{
          width: "245px",
          height: "150px",
        }}
        src="hool2.png"
        alt=""
      />
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <div>
            <p>Food name</p>
            <p>{AllFoodPrice}</p> {/* Display total price */}
          </div>
          <Button sx={{ color: "black", width: "48px", height: "48px" }}>
            <ClearIcon />
          </Button>
        </div>
        <div style={{ fontSize: "16px", color: "#767676", fontWeight: "400" }}>
          Хулуу, төмс, лууван, сонгино, цөцгийн тос, самрын үр
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <Button
            onClick={nemeh}
            sx={{ width: "45px", height: "40px" }}
            variant="contained">
            <AddIcon />
          </Button>
          <Typography>{count}</Typography>
          <Button
            onClick={hasah}
            sx={{ width: "45px", height: "40px" }}
            variant="contained">
            <RemoveIcon />
          </Button>
        </div>
      </div>
    </Card>
  );
}
