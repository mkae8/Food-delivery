"use client";

// password update (OTP)
// profile edit
// fix view all


import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { ItemModal } from "../modal/ItemModal";
import axios from "axios";
import { useRouter } from "next/navigation";

interface FoodItem {
  id: string;
  foodName: string;
  images: string;
  price: string;
  foodIngredients: string;
  foodCategory: string;
}
export const HomePageFoods = () => {
  const router = useRouter();
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [foods, setFoods] = useState<FoodItem[]>([]);
  useEffect(() => {
    foodHandler();
  }, []);

  const foodHandler = async () => {
    try {
      const response = await axios.get<FoodItem[]>(
        `${process.env.BACKEND_URL}/foods-get`
      );
      setFoods(response.data);
    } catch (error) {
      console.log(`Error fetching data: ${error}`);
    }
  };

  const handleOpenModal = (food: FoodItem) => {
    setSelectedFood(food);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedFood(null);
  };

  const mainDishes = foods.filter(
    (food) => food.foodCategory === "6720ddce56cc1a086ed07970"
  );
  const soups = foods.filter(
    (food) => food.foodCategory === "67205fbf8781ea178e2239ac"
  );
  const breakFast = foods.filter(
    (food) => food.foodCategory === "6720ddd656cc1a086ed07973"
  );
  const desserts = foods.filter(
    (food) => food.foodCategory === "672061645853cd40b5ea2782"
  );

  return (
    <Container
      sx={{
        width: "1200px",
        height: "1616px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "50px",
        marginTop: "122px",
      }}
    >
      {mainDishes.length > 0 && (
        <Box sx={{ height: "344px", display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "1190px",
              height: "64px",
              paddingTop: "16px",
              paddingBottom: "16px",
              marginRight: "5px",
            }}
          >
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="/Star.png"
                alt=""
                style={{ width: "32px", height: "32px", padding: "7px" }}
              />
              Main Course
            </Typography>
            <Typography sx={{ color: "#18BA51", fontSize: "14px" }}>
              Бүгдийг харах {">"}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              width: "1200px",
              height: "256",
              gap: "20px",
              overflow: "scroll",
              mt: 2,
            }}
          >
            {mainDishes.map((food) => (
              <Box
                key={food.id}
                onClick={() => handleOpenModal(food)}
                sx={{
                  cursor: "pointer",
                  width: "282px",
                  height: "256px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={food.images}
                  alt={food.foodName}
                  style={{
                    height: "186px",
                    width: "282px",
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    height: "56px",
                    width: "282px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography sx={{ textAlign: "start", fontWeight: "bold" }}>
                    {food.foodName}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold", color: "#18BA51" }}>
                    {food.price}₮
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}
      {soups.length > 0 && (
        <Box sx={{ height: "344px", display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "1190px",
              height: "64px",
              paddingTop: "16px",
              paddingBottom: "16px",
              marginRight: "5px",
            }}
          >
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="/Star.png"
                alt=""
                style={{ width: "32px", height: "32px", padding: "7px" }}
              />
              Soup
            </Typography>
            <Typography sx={{ color: "#18BA51", fontSize: "14px" }}>
              Бүгдийг харах {">"}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "1200px",
              height: "256",
              gap: "20px",
              overflow: "scroll",
              mt: 2,
            }}
          >
            {soups.map((food) => (
              <Box
                key={food.id}
                onClick={() => handleOpenModal(food)}
                sx={{
                  cursor: "pointer",
                  width: "282px",
                  height: "256px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={food.images}
                  alt={food.foodName}
                  style={{
                    height: "186px",
                    width: "282px",
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    height: "56px",
                    width: "282px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography sx={{ textAlign: "start", fontWeight: "bold" }}>
                    {food.foodName}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold", color: "#18BA51" }}>
                    {food.price}₮
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {breakFast.length > 0 && (
        <Box sx={{ height: "344px", display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "1190px",
              height: "64px",
              paddingTop: "16px",
              paddingBottom: "16px",
              marginRight: "5px",
            }}
          >
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="/Star.png"
                alt=""
                style={{ width: "32px", height: "32px", padding: "7px" }}
              />
              Breakfast
            </Typography>
            <Typography sx={{ color: "#18BA51", fontSize: "14px" }}>
              Бүгдийг харах {">"}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "1200px",
              height: "256",
              gap: "20px",
              overflow: "scroll",
              mt: 2,
            }}
          >
            {breakFast.map((food) => (
              <Box
                key={food.id}
                onClick={() => handleOpenModal(food)}
                sx={{
                  cursor: "pointer",
                  width: "282px",
                  height: "256px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={food.images}
                  alt={food.foodName}
                  style={{
                    height: "186px",
                    width: "282px",
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    height: "56px",
                    width: "282px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography sx={{ textAlign: "start", fontWeight: "bold" }}>
                    {food.foodName}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold", color: "#18BA51" }}>
                    {food.price}₮
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {desserts.length > 0 && (
        <Box sx={{ height: "344px", display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "1190px",
              height: "64px",
              paddingTop: "16px",
              paddingBottom: "16px",
              marginRight: "5px",
            }}
          >
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="/Star.png"
                alt=""
                style={{ width: "32px", height: "32px", padding: "7px" }}
              />
              Desserts
            </Typography>
            <Typography sx={{ color: "#18BA51", fontSize: "14px" }}>
              Бүгдийг харах {">"}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "1200px",
              height: "256",
              gap: "20px",
              overflow: "scroll",
              mt: 2,
            }}
          >
            {desserts.map((food) => (
              <Box
                key={food.id}
                onClick={() => handleOpenModal(food)}
                sx={{
                  cursor: "pointer",
                  width: "282px",
                  height: "256px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={food.images}
                  alt={food.foodName}
                  style={{
                    height: "186px",
                    width: "282px",
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    height: "56px",
                    width: "282px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography sx={{ textAlign: "start", fontWeight: "bold" }}>
                    {food.foodName}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold", color: "#18BA51" }}>
                    {food.price}₮
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}
      {selectedFood && (
        <ItemModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          item={selectedFood}
        />
      )}
    </Container>
  );
};
