"use client";

import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import BagCart from "./BagCart";
import { useEffect, useState } from "react";

interface Item {
  _id: string;
  foodName: string;
  foodCategory: string;
  foodIngredients: string;
  price: string;
  images: string[];
  __v: number;
}

interface CartItem {
  item: Item;
  quantity: number;
}

export const Bag = () => {
  const cartData: any = localStorage.getItem("cart");
  const realData: CartItem[] = cartData ? JSON.parse(cartData) : [];

  const [foods, setFoods] = useState<CartItem[]>(realData);

  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [card, setCard] = useState<boolean>(true);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const toggleBag = () => {
    setIsVisible(!isVisible);
  };

  const incrementCount = (_id: string) => {
    const cartData: any = localStorage.getItem("cart");
    const realData: CartItem[] = cartData ? JSON.parse(cartData) : [];

    const newArray = realData.map((el) => {
      if (el.item._id === _id) {
        return { ...el, quantity: el.quantity + 1 };
      } else {
        return { ...el };
      }
    });

    localStorage.setItem("cart", JSON.stringify(newArray));
    setFoods(newArray);
  };

  const decrementCount = (_id: string) => {
    const cartData: any = localStorage.getItem("cart");
    const realData: CartItem[] = cartData ? JSON.parse(cartData) : [];

    const newArray = realData.map((el) => {
      if (el.item._id === _id && el.quantity === 0) {
        return el;
      }

      if (el.item._id === _id) {
        return { ...el, quantity: el.quantity - 1 };
      } else {
        return { ...el };
      }
    });
    localStorage.setItem("cart", JSON.stringify(newArray));
    setFoods(newArray);
  };

  const closeBagCart = (foodId: string) => {
    const cartData: any = localStorage.getItem("cart");
    const realData: CartItem[] = cartData ? JSON.parse(cartData) : [];

    const newArray = realData.filter((el) => el.item._id != foodId);
    setFoods(newArray);
    window.localStorage.setItem("cart", JSON.stringify(newArray));
  };

  useEffect(() => {
    const cartData: any = localStorage.getItem("cart");
    const realData: CartItem[] = cartData ? JSON.parse(cartData) : [];

    const niitDun = realData.reduce((acc: any, cur: any) => {
      return acc + cur.item.price * cur.quantity;
    }, 0);

    setTotalPrice(niitDun);
  }, []);

  if (!isVisible) return <></>;

  return (
    <div
      style={{
        display: isVisible ? "flex" : "none",
        position: "absolute",
        zIndex: "100",
        width: "100%",
        height: "full",
      }}
    >
      <div
        style={{
          width: "75%",
          color: "black",
          backgroundColor: "#00000080",
          opacity: "50%",
          height: "full",
        }}
      ></div>
      <div
        style={{
          width: "25%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "1439px",
            overflow: "scroll",
          }}
        >
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
              display: "flex",
              flexDirection: "column",
              overflow: "scroll",
              margin: "16px 0 16px px",
              borderBottom: " 1px solid #D6D8DB",
              borderTop: "1px solid #D6D8DB",
            }}
          >
            {foods.map((el, Item) => {
              return (
                <BagCart
                  sx={{
                    display: card ? "flex" : "none",
                    padding: "16px",
                    gap: "16px",
                    backgroundColor: "white",
                  }}
                  key={Item}
                  images={el.item.images}
                  foodName={el.item.foodName}
                  foodIngredients={el.item.foodIngredients}
                  price={el.item.price}
                  quantity={el.quantity}
                  incrementCount={() => incrementCount(el.item._id)}
                  decrementCount={() => decrementCount(el.item._id)}
                  closeBagCart={() => closeBagCart(el.item._id)}
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
              {totalPrice}
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
