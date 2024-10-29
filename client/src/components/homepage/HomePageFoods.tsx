"use client";

import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { ItemModal } from "../modal/ItemModal";
import axios from "axios";

interface FoodItem {
  id: string;
  foodName: string;
  images: string;
  price: string;
  foodIngredients: string;
  foodCategory: string;
}

export const HomePageFoods = () => {
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
    (food) => food.foodCategory === "Main course"
  );
  const soups = foods.filter((food) => food.foodCategory === "Soup");
  const breakFast = foods.filter((food) => food.foodCategory === "Breakfast");
  const desserts = foods.filter((food) => food.foodCategory === "Desserts");

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
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
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
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
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
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
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
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
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
