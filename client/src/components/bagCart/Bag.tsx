"use client";

import { Box, Button, Drawer, List, Typography } from "@mui/material";
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

type BagProps = {
  open: boolean;
  toggleDrawer: (
    boolean: boolean
  ) =>
    | ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)
    | undefined;
};

export const Bag = ({ open, toggleDrawer }: BagProps) => {
  const cartData: any = localStorage.getItem("cart");
  const realData: CartItem[] = cartData ? JSON.parse(cartData) : [];

  const [foods, setFoods] = useState<CartItem[]>(realData);

  const [card, setCard] = useState<boolean>(true);
  const [totalPrice, setTotalPrice] = useState<number>(0);

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

    window.localStorage.setItem("cart", JSON.stringify(newArray));
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
    window.localStorage.setItem("cart", JSON.stringify(newArray));
    setFoods(newArray);
  };

  const closeBagCart = (foodId: string) => {
    const cartData: any = window.localStorage.getItem("cart");
    const realData: CartItem[] = cartData ? JSON.parse(cartData) : [];

    const newArray = realData.filter((el) => el.item._id != foodId);
    setFoods(newArray);
    window.localStorage.setItem("cart", JSON.stringify(newArray));
  };

  useEffect(() => {
    const cartData: any = window.localStorage.getItem("cart");
    const realData: CartItem[] = cartData ? JSON.parse(cartData) : [];

    const niitDun = realData.reduce((acc: any, cur: any) => {
      return acc + cur.item.price * cur.quantity;
    }, 0);

    setTotalPrice(niitDun);
  }, [foods]);

  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
      <Box
        sx={{
          backgroundColor: "white",
          width: "586px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button sx={{ width: "48px", height: "48px", padding: "0px" }}>
            <KeyboardArrowLeftIcon />
          </Button>
          <Typography sx={{ fontWeight: "bold" }}>Таны сагс</Typography>
          <Box sx={{ width: "70px" }} />
        </Box>

        <List
          sx={{
            width: "100%",
            borderBottom: " 1px solid #D6D8DB",
            borderTop: "1px solid #D6D8DB",
            overflow: "scroll",
          }}
        >
          {foods.length === 0 ? (
            <Typography variant="h3"> Sags hooson baina </Typography>
          ) : (
            foods.map((el, Item) => {
              // if (foods.length <= 0) {
              //   return <Typography> Sags hooson baina </Typography>;
              // }
              return (
                <BagCart
                  sx={{
                    display: card ? "flex" : "none",
                    padding: "16px",
                    gap: "16px",
                    height: "182px",
                    backgroundColor: "white",
                    justifyContent: "space-between",
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
            })
          )}
        </List>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "172px",
            paddingX: "32px",
            bottom: "0",
            backgroundColor: "white",
            width: "100%",
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
              {totalPrice}
            </Typography>
          </Box>
          <Button sx={{ width: "50%", height: "48px" }} variant="contained">
            Захиалах
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};
