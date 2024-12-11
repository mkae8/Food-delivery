/** @format */

"use client";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

interface FoodCategory {
  _id: string;
  categoryName: string;
}

interface FoodItem {
  _id: string;
  foodName: string;
  images: string;
  price: string;
  foodIngredients: string;
  foodCategory: foodCategoryType;
}

type foodCategoryType = {
  _id: string;
  categoryName: string;
  foodId: string[];
  createdAt: Date;
  updatedAt: Date;
};

type FoodListProps = {
  category: string;
};

const FoodList = ({ category }: FoodListProps) => {
  const [foods, setFoods] = useState<FoodItem[]>([]);

  const fetchFoodItems = async () => {
    try {
      const response = await axios.get<FoodItem[]>(
        `food-delivery-ily2.onrender.com/foods-get`
      );
      setFoods(response.data);
    } catch (error) {
      console.error("Error fetching food items", error);
    }
  };

  useEffect(() => {
    fetchFoodItems();
  }, []);

  const getFoodsByCategory = (
    foods: FoodItem[],
    filterCategory: string
  ): FoodItem[] => {
    return foods.filter(
      (food) => food.foodCategory?.categoryName === filterCategory
    );
  };
  const filteredFoods = getFoodsByCategory(foods, category);

  return (
    <Box sx={{ height: "344px", display: "flex", flexDirection: "column" }}>
      <Typography
        sx={{ fontSize: "22px", fontWeight: "700", mb: 2 }}
      ></Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          mt: 2,
        }}
      >
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <Box
              key={food._id}
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
          ))
        ) : (
          <Typography>No foods available for this category.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default FoodList;
