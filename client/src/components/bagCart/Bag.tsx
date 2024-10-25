"use client";

import { Box, Button, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import BagCart from "./BagCart";
import { useEffect, useState } from "react";

const DataBaseInformation = [
  {
    foodId: "hool1",
    foodPic: "hool1.png",
    foodName: "dsda",
    price: 14500,
    foodIngredients: "orts1",
  },
  {
    foodId: "hool2",
    foodPic: "hool2.png",
    foodName: "dsda2",
    price: 15000,
    foodIngredients: "orts2",
  },
  {
    foodId: "hool3",
    foodPic: "hool3.png",
    foodName: "dsda3",
    price: 16000,
    foodIngredients: "orts3",
  },
];

// type DataBaseInformationProps = {
//   foodPic: string;
//   foodName: string;
//   price: number;
//   foodIngredients: string;
// };

export const Bag = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [count, setCount] = useState<any>({});
  const [oneFoodPrice, setoneFoodPrice] = useState<any>({});
  const [lastPrice, setLastPrice] = useState<number>(0);
  const toggleBag = () => {
    setIsVisible(!isVisible);
  };

  const incrementCount = (foodId: string) => {
    setCount((prev: any) => ({
      ...prev,
      [foodId]: prev[foodId] == undefined ? 1 : prev[foodId] + 1,
    }));
  };

  const decrementCount = (foodId: string) => {
    setCount((prev: any) => ({
      ...prev,
      [foodId]:
        prev[foodId] == undefined
          ? 0
          : prev[foodId] === 0
          ? 0
          : prev[foodId] - 1,
    }));
  };

  const closeCartItem = () => {
    setIsVisible(false);
    setCount(0);
  };
  console.log(DataBaseInformation);

  const totalPrice = DataBaseInformation.map((el) => {
    const foodCount = count[el.foodId];
    const totalPrice = el.price * foodCount;
    return totalPrice;
  });

  const handleCountChange = () => {};

  // useEffect(() => {
  //   const totalPrice = DataBaseInformation.reduce((total, item) => {
  //     const itemCount = count[item.foodId] || 0;
  //     return total + item.price * itemCount;
  //   }, 0);
  //   setLastPrice(totalPrice);
  // }, [count]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        display: isVisible ? "flex" : "none",
        position: "absolute",
        zIndex: "100",
        width: "100%",
        height: "100%",
        color: "black",
      }}
    >
      <div
        style={{
          width: "75%",
          backgroundColor: "#00000080",
          opacity: "50%",
        }}
      ></div>
      <div
        style={{
          width: "25%",
          backgroundColor: "white",
          right: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              onClick={toggleBag}
              style={{ width: "48px", height: "48px", padding: "0px" }}
            >
              <KeyboardArrowLeftIcon />
            </Button>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Таны сагс
            </p>
            <p style={{ width: "50px" }} />
          </div>
          <Box
            sx={{
              margin: "16px 0 16px px",
              borderBottom: " 1px solid #D6D8DB",
              borderTop: "1px solid #D6D8DB",
            }}
          >
            {DataBaseInformation.map((el, Item) => {
              return (
                <BagCart
                  key={Item}
                  foodPic={el.foodPic}
                  foodName={el.foodName}
                  foodIngredients={el.foodIngredients}
                  price={el.price}
                  onCountChange={handleCountChange}
                  incrementCount={() => incrementCount(el.foodId)}
                  decrementCount={() => decrementCount(el.foodId)}
                  count={count}
                  closeCartItem={closeCartItem}
                  totalPrice={totalPrice}
                />
              );
            })}
          </Box>
        </div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "172px",
            gap: "10px",
            paddingX: "32px",
            paddingTop: "10px",
            paddingBottom: "30px",
            width: "full",

            boxShadow: "3",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              width: "50%",
            }}
          >
            <Typography>Таны нийт төлөх дүн</Typography>
            <Typography sx={{ fontWeight: "700", fontSize: "18px" }}>
              {lastPrice}
            </Typography>
          </Box>
          <Button sx={{ width: "50%", height: "48px" }} variant="contained">
            Захиалах
          </Button>
        </Box>
      </div>
    </div>
  );
};
