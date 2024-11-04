"use client";

import { Box, Button, Drawer, List, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import BagCart from "./BagCart";
import { useEffect, useState } from "react";
import { useUser } from "@/provider/UserProvider";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

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
  setOpen: (boolean: boolean) => void;
  toggleDrawer: (boolean: boolean) => void;
};

export const Bag = ({ open, toggleDrawer, setOpen }: BagProps) => {
  const { isLoggedIn, loginHandler } = useUser();
  const { push } = useRouter();

  const getFromLocalStrage = () => {
    if (typeof window !== "undefined") {
      const cartData: any = window.localStorage.getItem("cart");
      const realData: CartItem[] = cartData ? JSON.parse(cartData) : [];
      return realData;
    }
  };

  const [foods, setFoods] = useState<CartItem[]>([]);

  const [card, setCard] = useState<boolean>(true);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const setToLocalStorage = (newArray: any) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("cart", JSON.stringify(newArray));
    }
  };

  useEffect(() => {
    const data = getFromLocalStrage() || [];
    setFoods(data);
  }, []);

  const incrementCount = (_id: string, isIncrement: boolean) => {
    const realData = getFromLocalStrage() || [];

    const newArray = realData.map((el) => {
      if (el.item._id === _id) {
        return {
          ...el,
          quantity: isIncrement ? el.quantity + 1 : el.quantity - 1,
        };
      } else {
        return { ...el };
      }
    });

    setToLocalStorage(newArray);
    setFoods(newArray);
  };

  const closeBagCart = (foodId: string) => {
    const realData = getFromLocalStrage() || [];

    const newArray = realData.filter((el) => el.item._id != foodId);
    setFoods(newArray);
    setToLocalStorage(newArray);
  };

  useEffect(() => {
    const realData = getFromLocalStrage() || [];

    const niitDun = realData.reduce((acc: any, cur: any) => {
      return acc + cur.item.price * cur.quantity;
    }, 0);

    setTotalPrice(niitDun);
  }, [foods]);

  const handleSagsClick = () => {
    if (isLoggedIn) {
      toggleDrawer(false);
    } else {
      push("/login");
      toast.error("You need to be log in");
    }
  };

  return (
    <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
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
          <Button
            sx={{ width: "48px", height: "48px", padding: "0px" }}
            onClick={() => setOpen(false)}
          >
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
                  incrementCount={() => incrementCount(el.item._id, true)}
                  decrementCount={() => incrementCount(el.item._id, false)}
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
            </Typography>
          </Box>
          <Button
            onClick={handleSagsClick}
            sx={{ width: "50%", height: "48px" }}
            variant="contained"
          >
            Захиалах
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};
