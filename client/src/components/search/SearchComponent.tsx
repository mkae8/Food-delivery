"use client";
import React, { useState } from "react";
import { FoodItem } from "../homepage/HomePageFoods";
import { Box, Typography } from "@mui/material";
import { ItemModal } from "../modal/ItemModal";

type SearchComponentProps = {
  food: FoodItem;
};

export const SearchComponent = ({ food }: SearchComponentProps) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (food: FoodItem) => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <ItemModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          item={food}
        />
      )}
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
          marginTop: "61px",
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
    </>
  );
};
