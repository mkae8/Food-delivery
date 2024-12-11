"use client";

import {
  Box,
  Container,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ItemModal } from "@/components/modal/ItemModal";

export interface FoodCategory {
  _id: string;
  categoryName: string;
  foodId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type FoodItem = {
  _id: string;
  foodName: string;
  images: string;
  price: string;
  foodIngredients: string;
  foodCategory: FoodCategory;
};

interface Category {
  _id: string;
  categoryName: string;
  foodId: string[];
  createdAt: Date;
  updatedAt: Date;
}

const MenuPage = () => {
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [clicked, setClicked] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const fetchFoodItems = async () => {
    setLoading(true);
    try {
      const response = await axios.get<FoodItem[]>(
        `food-delivery-ily2.onrender.com/foods-get`
      );
      setFoods(response.data);
    } catch (error) {
      console.error("Error fetching food items", error);
      toast.error("Failed to fetch food items.");
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get<Category[]>(
        `food-delivery-ily2.onrender.com/fetchCategory`
      );
      setCategories(response.data);
    } catch (error) {
      console.log("Error fetching categories", error);
      toast.error("Failed to fetch categories.");
    }
  };

  const handleCatClick = (name: string) => {
    setClicked(name);
  };

  const handleOpenModal = (food: FoodItem) => {
    setSelectedFood(food);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedFood(null);
  };

  useEffect(() => {
    fetchFoodItems();
    fetchCategories();
  }, []);

  const filteredFoods = clicked
    ? foods.filter((food) => food.foodCategory?.categoryName === clicked)
    : foods;

  return (
    <Container>
      <Box display="flex" justifyContent="center" marginTop="20px" gap="20px">
        {categories.map((category) => (
          <Button
            key={category._id}
            onClick={() => handleCatClick(category.categoryName)}
            sx={{
              border: "1px solid #D6D8DB",
              fontStyle: "inherit",
              fontWeight: "bold",
              width: "280px",
              height: "40px",
              backgroundColor:
                category.categoryName === clicked ? "#18BA51" : "white",
              color: category.categoryName === clicked ? "white" : "black",
            }}
          >
            {category.categoryName}
          </Button>
        ))}
      </Box>

      {loading ? (
        <CircularProgress />
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            mt: 2,
            marginBottom: "100px",
            marginTop: "50px",
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
                onClick={() => handleOpenModal(food)}
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
            <Typography>No foods available in this category.</Typography>
          )}
        </Box>
      )}

      {selectedFood && (
        <ItemModal
          item={selectedFood as any}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </Container>
  );
};

export default MenuPage;
