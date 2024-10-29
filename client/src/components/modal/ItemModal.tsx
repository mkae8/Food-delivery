"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  Button,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

type FoodItem = {
  image: string;
  title: string;
  SalePrice?: string;
  price: string;
  percent?: string;
  ingredients?: string;
};

interface ItemModalProps {
  item: FoodItem;
  isOpen: boolean;
  onClose: () => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({
  item,
  isOpen,
  onClose,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle sx={{ backgroundColor: "white" }}>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent
        sx={{ display: "flex", flexDirection: "row", gap: 4, bgcolor: "#fff" }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={item.image}
            alt={item.title}
            style={{
              borderRadius: "8px",
              width: "500px",
              height: "500px",
              objectFit: "contain",
            }}
          />
        </Box>
        <Box>
          <Typography variant="h5" gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="h6" color="green" gutterBottom></Typography>

          <Typography variant="subtitle1" gutterBottom>
            Орц
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {item.ingredients}
          </Typography>

          <Box sx={{ display: "flex", alignitem: "center", my: 2 }}>
            <IconButton onClick={handleDecrease}>
              <RemoveIcon />
            </IconButton>
            <TextField
              type="number"
              value={quantity}
              inputProps={{ style: { textAlign: "center" } }}
              sx={{ width: "50px", mx: 1 }}
              disabled
            />
            <IconButton onClick={handleIncrease}>
              <AddIcon />
            </IconButton>
          </Box>

          <Button
            variant="contained"
            color="success"
            fullWidth
            onClick={() => console.log("Add to cart", quantity)}
          >
            Сагслах
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
