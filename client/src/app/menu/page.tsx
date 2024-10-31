/** @format */

"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios"; // Make sure to import axios
import { toast } from "react-toastify"; // Ensure you have toast for notifications
import FoodList from "@/components/admin-crud/FetchFoods";
import MenuFoods from "@/components/menuComponents/FetchMenuFoods";

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
  foodCategory: FoodCategory;
}

interface Category {
  _id: string;
  categoryName: string;
  foodId: string[];
  createdAt: Date;
  updatedAt: Date;
}

type FoodListProps = {
  category: string;
};

const MenuPage = ({ category }: FoodListProps) => {
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [clicked, setClicked] = useState<string>("");

  const fetchFoodItems = async () => {
    try {
      const response = await axios.get<FoodItem[]>(
        `${process.env.BACKEND_URL}/foods-get`
      );
      setFoods(response.data);
    } catch (error) {
      console.error("Error fetching food items", error);
      toast.error("Failed to fetch food items.");
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get<Category[]>(
        `${process.env.BACKEND_URL}/fetchCategory`
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories", error);
      toast.error("Failed to fetch categories.");
    }
  };
  console.log(category, "dasda");

  useEffect(() => {
    fetchFoodItems();
    fetchCategories();
  }, []);

  const getFoodsByCategory = (
    foods: FoodItem[],
    filterCategory: string
  ): FoodItem[] => {
    return foods.filter(
      (food) => food.foodCategory.categoryName === filterCategory
    );
  };

  const filteredFoods = getFoodsByCategory(foods, category);

  const handleCatClick = (name: string) => {
    setClicked(name);
  };

  return (
    <Container>
      <Box display="flex" justifyContent="center" marginTop="20px" gap="20px">
        {categories.map((category) => (
          <Button
            onClick={() => handleCatClick(category.categoryName)}
            key={category._id}
            style={{
              color: "black",
              border: "1px solid #D6D8DB",
              fontStyle: "inherit",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              paddingLeft: "15px",
              paddingRight: "15px",
              width: "280px",
              height: "40px",
              backgroundColor:
                category.categoryName === clicked ? "#18BA51" : "white",
            }}
          >
            {category.categoryName}
          </Button>
        ))}
      </Box>

      <Box sx={{ height: "344px", display: "flex", flexDirection: "column" }}>
        <Typography sx={{ fontSize: "22px", fontWeight: "700", mb: 2 }}>
          <MenuFoods category={clicked} />
        </Typography>
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
            <Typography></Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default MenuPage;
