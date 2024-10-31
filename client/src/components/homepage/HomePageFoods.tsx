"use client";

import React, { useEffect, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { ItemModal } from "../modal/ItemModal";
import axios from "axios";
import { useRouter } from "next/navigation";

export type FoodItem = {
  _id: string;
  foodName: string;
  images: string;
  price: string;
  foodIngredients: string;
  foodCategory: foodCategoryType;
};

type foodCategoryType = {
  _id: string;
  categoryName: string;
  foodId: string[];
  createdAt: Date;
  updatedAt: Date;
};

type GroupedFoods = {
  [categoryName: string]: FoodItem[];
};

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

  const groupedFoods = foods.reduce((acc: GroupedFoods, food) => {
    const categoryName = food.foodCategory.categoryName;
    const foodDetails: FoodItem = {
      foodName: food.foodName,
      foodIngredients: food.foodIngredients,
      price: food.price,
      images: food.images,
      _id: food._id,
      foodCategory: food.foodCategory,
    };

    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(foodDetails);
    return acc;
  }, {} as GroupedFoods);

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
      {Object.entries(groupedFoods).map(([categoryName, foods]) => {
        return (
          <Box
            sx={{ height: "344px", display: "flex", flexDirection: "column" }}
          >
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
                {categoryName}
              </Typography>
              <Button sx={{ color: "#18BA51", fontSize: "14px" }}>
                Бүгдийг харах {">"}
              </Button>
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
              {foods.map((food) => (
                <Box
                  key={food._id}
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
        );
      })}
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
