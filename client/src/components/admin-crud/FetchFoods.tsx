"use client";
import { Box, Container, Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { ItemModal } from "../modal/ItemModal";

interface FoodCategory {
  id: string;
  foodName: string;
  images: string;
  price: string;
  foodIngredients: string;
  foodCategory: string;
}

interface FoodItem {
  id: string;
  foodName: string;
  images: string;
  price: string;
  foodIngredients: string;
  foodCategory: string;
}

const FoodList = () => {
  const [foodCategories, setFoodCategories] = useState<FoodCategory[]>([]);
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const fetchFoodCategories = async () => {
    try {
      const response = await axios.get<FoodCategory[]>(
        `https://food-delivery-lrqy.onrender.com/foods-get`
      );
      setFoodCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  const fetchFoodItems = async () => {
    try {
      const response = await axios.get<FoodItem[]>(
        `${process.env.BACKEND_URL}/foods-get`
      );
      setFoods(response.data);
    } catch (error) {
      console.error("Error fetching food items", error);
    }
  };

  useEffect(() => {
    fetchFoodCategories();
    fetchFoodItems();
  }, []);

  const handleOpenModal = (food: FoodItem) => {
    setSelectedFood(food);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedFood(null);
  };

  const renderFoodItemsByCategory = (category: string) => {
    const filteredFoods = foods.filter(
      (food) => food.foodCategory === category
    );

    const mainDishes = foods.filter(
      (food) => food.foodCategory === "Main course"
    );
    const soups = foods.filter((food) => food.foodCategory === "Soup");
    const breakFast = foods.filter((food) => food.foodCategory === "Breakfast");
    const desserts = foods.filter((food) => food.foodCategory === "Desserts");
    if (filteredFoods.length === 0) return null;

    return (
      <Box sx={{ height: "344px", display: "flex", flexDirection: "column" }}>
        <Typography sx={{ fontSize: "22px", fontWeight: "700" }}>
          {category}
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            mt: 2,
          }}
        >
          {filteredFoods.map((food) => (
            <Box key={food.id} onClick={() => food} sx={{ cursor: "pointer" }}>
              {" "}
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
              <Box sx={{ mt: 1 }}>
                <Typography sx={{ textAlign: "start", fontWeight: "bold" }}>
                  {food.foodName}
                </Typography>
                <Typography sx={{ fontWeight: "bold", color: "#18BA51" }}>
                  {food.price}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    );
  };

  return (
    // <Container
    //   sx={{
    //     width: "1200px",
    //     marginTop: "122px",
    //     display: "flex",
    //     flexDirection: "column",
    //     gap: "50px",
    //   }}
    // >
    //   {["Main course", "Soup", "Breakfast", "Desserts"].filter((category) =>
    //     renderFoodItemsByCategory(category)
    //   )}

    //   {selectedFood && (
    //     <ItemModal
    //       isOpen={isModalOpen}
    //       onClose={handleCloseModal}
    //       item={selectedFood}
    //     />
    //   )}
    // </Container>
    <div></div>
  );
};

export default FoodList;
