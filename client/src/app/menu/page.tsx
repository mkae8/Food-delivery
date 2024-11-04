"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios"; // Make sure to import axios
import { toast } from "react-toastify"; // Ensure you have toast for notifications
import FoodList from "@/components/admin-crud/FetchFoods";
import MenuFoods from "@/components/menuComponents/FetchMenuFoods";
import Modal from "@mui/material/Modal";
import { ItemModal } from "@/components/modal/ItemModal";
import { FoodItem } from "@/components/homepage/HomePageFoods";

interface FoodCategory {
  _id: string;
  categoryName: string;
}

export type FoodItems = {
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
    try {
      setLoading(true);
      const response = await axios.get<FoodItem[]>(
        `${process.env.BACKEND_URL}/foods-get`
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
        `${process.env.BACKEND_URL}/fetchCategory`
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories", error);
      toast.error("Failed to fetch categories.");
    }
  };

  const getFoodsByCategory = (
    foods: FoodItem[],
    filterCategory: string
  ): FoodItem[] => {
    return foods.filter(
      (food) => food.foodCategory.categoryName === filterCategory
    );
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

  return (
    <Container>
      <Box display="flex" justifyContent="center" marginTop="20px" gap="20px">
        {categories.map((category) => (
          <Button
            onClick={() => handleCatClick(category.categoryName)}
            key={category._id}
            style={{
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
              color: category.categoryName === clicked ? "white" : "black",
            }}
          >
            {category.categoryName}
          </Button>
        ))}
      </Box>

      <Box sx={{ height: "344px", display: "flex", flexDirection: "column" }}>
        <Typography sx={{ fontSize: "22px", fontWeight: "700", mb: 2 }}>
          <MenuFoods category={clicked} openModal={handleOpenModal} />
        </Typography>
      </Box>

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

export default MenuPage;
