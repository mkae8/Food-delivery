"use client";

import React, { useState } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import {ItemModal} from "../modal/ItemModal";  


interface FoodItem {
  image: string;
  title: string;
  SalePrice?: string;
  price: string;
  percent?: string;
  ingredients: string;
}

export const HomePageFoods = () => {
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

 const saleFoods: FoodItem[] = [
  {
    image: "/hool1.png",
    title: "Өглөөний хоол",
    SalePrice: "14,800₮",
    price: "16,800₮",
    percent: "20%",
    ingredients: "",
  },
  {
    image: "/zairmag.png",
    title: "Зайрмаг",
    SalePrice: "4,800₮",
    price: "6,800₮",
    percent: "20%",
    ingredients: "",
  },
  {
    image: "/hool2.png",
    title: "Өглөөний хоол",
    SalePrice: "24,800₮",
    price: "26,800₮",
    percent: "20%",
    ingredients: "",
  },
  {
    image: "/hool3.png",
    title: "Breakfast",
    SalePrice: "24,800₮",
    price: "26,800₮",
    percent: "20%",
    ingredients: "",
  },
];
const undsenHool: FoodItem[] = [
  {
    image: "/pizza.png",
    title: "Main Pizza ",
    price: "34,800₮",
    ingredients: "",
  },
  {
    image: "/tart.png",
    title: "Food tart",
    price: "22,800₮",
    ingredients: "",
  },
  {
    image: "/breakfast.png",
    title: "Өглөөний хоол",
    price: "14,800₮",
    ingredients: "",
  },
  {
    image: "/soup.png",
    title: "Зутан шөл",
    price: "17,800₮",
    ingredients: "",
  },
];
const Zuush: FoodItem[] = [
  {
    image: "/chicken.png",
    title: "Чихэрлэг тахиа",
    price: "24,800₮",
    ingredients: "",
  },
  {
    image: "/lunch.png",
    title: "Lunch",
    price: "24,800₮",
    ingredients: "",
  },
  {
    image: "/sendvich.png",
    title: "Сэндвич",
    price: "14,800₮",
    ingredients: "",
  },
  {
    image: "/applePie.png",
    title: "Apple pie",
    price: "34,800₮",
    ingredients: "",
  },
];
const Amttan: FoodItem[] = [
  {
    image: "/cake.png",
    title: "Торт",
    price: "54,800₮",
    ingredients: "",
  },
  {
    image: "/oreoShake.png",
    title: "Oreo shake",
    price: "14,800₮",
    ingredients: "",
  },
  {
    image: "/chocolate.png",
    title: "Chocolate ",
    price: "14,800₮",
    ingredients: "",
  },
  {
    image: "/yoghurt.png",
    title: "Yoghurt",
    price: "14,800₮",
    ingredients: "",
  },]


  const handleOpenModal = (food: FoodItem) => {
    // setSelectedFood(food);
    setSelectedFood({
      image: food.image,
      title: food.title,
      SalePrice: food.SalePrice,
      price: food.price,
      percent: food.percent,
      ingredients: food.ingredients,
    });

    
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedFood(null);
  };
console.log(selectedFood);


  return (
    <>
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
        {/* Sale Foods Section */}
        <Box
          sx={{
            height: "344px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "700",
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            Хямдралтай
          </Typography>
          <Box
            sx={{
              display: "grid",
              width: "1200px",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {saleFoods.map((food, index) => (
              <Box
                key={index}
                sx={{
                  display: "column",
                  justifyContent: "start",
                  cursor: "pointer",
                }}
                onClick={() => handleOpenModal(food)}
              >
                <img
                  src={food.image}
                  alt={food.title}
                  style={{
                    height: "190px",
                    width: "295px",
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                />
                <Typography
                  sx={{
                    marginLeft: "10px",
                    textAlign: "start",
                    fontWeight: "bold",
                  }}
                >
                  {food.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* undsenHool Section */}

        <Box
          sx={{
            height: "344px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "700",
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            Хямдралтай
          </Typography>
          <Box
            sx={{
              display: "grid",
              width: "1200px",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {undsenHool.map((food, index) => (
              <Box
                key={index}
                sx={{
                  display: "column",
                  justifyContent: "start",
                  cursor: "pointer",
                }}
                onClick={() => handleOpenModal(food)} 
              >
                <img
                  src={food.image}
                  alt={food.title}
                  style={{
                    height: "190px",
                    width: "295px",
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                />
                <Typography
                  sx={{
                    marginLeft: "10px",
                    textAlign: "start",
                    fontWeight: "bold",
                  }}
                >
                  {food.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Zuush Section */}

        <Box
          sx={{
            height: "344px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "700",
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            Хямдралтай
          </Typography>
          <Box
            sx={{
              display: "grid",
              width: "1200px",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {Zuush.map((food, index) => (
              <Box
                key={index}
                sx={{
                  display: "column",
                  justifyContent: "start",
                  cursor: "pointer",
                }}
                onClick={() => handleOpenModal(food)} 
              >
                <img
                  src={food.image}
                  alt={food.title}
                  style={{
                    height: "190px",
                    width: "295px",
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                />
                <Typography
                  sx={{
                    marginLeft: "10px",
                    textAlign: "start",
                    fontWeight: "bold",
                  }}
                >
                  {food.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Amttan Section */}

        <Box
          sx={{
            height: "344px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "700",
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            Хямдралтай
          </Typography>
          <Box
            sx={{
              display: "grid",
              width: "1200px",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {Amttan.map((food, index) => (
              <Box
                key={index}
                sx={{
                  display: "column",
                  justifyContent: "start",
                  cursor: "pointer",
                }}
                onClick={() => handleOpenModal(food)} 
              >
                <img
                  src={food.image}
                  alt={food.title}
                  style={{
                    height: "190px",
                    width: "295px",
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                />
                <Typography
                  sx={{
                    marginLeft: "10px",
                    textAlign: "start",
                    fontWeight: "bold",
                  }}
                >
                  {food.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {selectedFood && (
          <ItemModal isOpen={isModalOpen} onClose={handleCloseModal} item={selectedFood}  />
        )}
      </Container>
    </>
  );
};
