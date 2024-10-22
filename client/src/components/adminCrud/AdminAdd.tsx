"use client";

import axios from "axios";
import Image from "next/image";

import React, { useState, ChangeEvent } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  Modal,
  Switch,
  TextField,
  MenuItem,
  Typography,
} from "@mui/material";

interface FoodItem {
  foodName: string;
  category: string;
  ingredients: string;
  price: string;
  onSale: boolean;
}

export const AdminAdd: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [foodName, setFoodName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [ingredients, setIngredients] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [onSale, setOnSale] = useState<boolean>(false);

  const cloud_name = "djxo5odaa";
  const preset_name = "temuujin";
  const url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

  const [image, setImage] = useState("");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "587px",
    Height: "854px",
    bgcolor: "white",
    boxShadow: 24,
    p: 5,
    borderRadius: 2,
  };

  const handleSubmit = () => {
    const newFoodItem: FoodItem = {
      foodName,
      category,
      ingredients,
      price,
      onSale,
    };

    console.log(newFoodItem);
    handleClear();
  };

  const handleClear = () => {
    setFoodName("");
    setCategory("");
    setIngredients("");
    setPrice("");
    setOnSale(false);
  };

  const handleInputChange =
    (
      setter: React.Dispatch<React.SetStateAction<string>>,
      isNumber?: boolean
    ) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (isNumber) {
        const numericValue = value.replace(/[^0-9]/g, "");
        setter(numericValue);
      } else {
        setter(value);
      }
    };

  const HandleImageUpload = async (event: any) => {
    //body boldeh
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_name);
    console.log(file);

    // api huselt
    try {
      const response: any = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      setImage(response.data.secure_url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div style={{}}>
        <div>
          <Button
            style={{
              backgroundColor: "#18BA51",
              color: "white",
              fontStyle: "inherit",
            }}
            onClick={handleOpen}
          >
            Add new food
          </Button>
        </div>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="create-food-modal"
            aria-describedby="modal-to-add-food"
          >
            <Box sx={style}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ height: "12px", width: "12px", cursor: "pointer" }}
                  src="/image copy 10.png"
                  alt=""
                  color="error"
                  onClick={handleClose}
                />
                <h2 id="create-food-modal" style={{ textAlign: "center" }}>
                  Create food
                </h2>
                <div></div>
              </div>

              <TextField
                fullWidth
                label="Хоолны нэр"
                variant="outlined"
                margin="normal"
                value={foodName}
                onChange={handleInputChange(setFoodName)}
                sx={{ backgroundColor: "#F4F4F4" }}
              />

              <TextField
                fullWidth
                label="Хоолны ангилал"
                variant="outlined"
                margin="normal"
                select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                sx={{ backgroundColor: "#F4F4F4" }}
              >
                <MenuItem value="Main">Breakfast</MenuItem>
                <MenuItem value="Side">Soup</MenuItem>
                <MenuItem value="DMain course">Main course</MenuItem>
                <MenuItem value="Dessert">Desserts</MenuItem>
              </TextField>

              <TextField
                fullWidth
                label="Хоолны орц"
                variant="outlined"
                margin="normal"
                value={ingredients}
                onChange={handleInputChange(setIngredients)}
                sx={{ backgroundColor: "#F4F4F4" }}
              />

              <TextField
                fullWidth
                label="Хоолны үнэ ₮"
                variant="outlined"
                margin="normal"
                value={price ? `${price}` : "₮"}
                onChange={handleInputChange(setPrice, true)}
                sx={{ backgroundColor: "#F4F4F4" }}
              />

              <FormControlLabel
                control={
                  <Switch
                    checked={onSale}
                    onChange={(e) => setOnSale(e.target.checked)}
                  />
                }
                label="Хямдралтай эсэх"
                style={{ marginTop: "15px" }}
              />
              <TextField
                fullWidth
                label="Хямдралтай эсэх"
                variant="outlined"
                margin="normal"
                value={onSale}
                onChange={handleInputChange(setPrice, true)}
                sx={{ backgroundColor: "#F4F4F4" }}
              />

              <Typography variant="body1" style={{ marginTop: "15px" }}>
                Хоолны зураг
              </Typography>

              <Box
                sx={{
                  border: "1px dashed grey",
                  padding: "20px",
                  marginTop: "10px",
                  borderRadius: "10px",
                  textAlign: "center",
                  backgroundColor: "#f9f9f9",
                  width: "284px",
                  height: "122px",
                  position: "relative",
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    marginBottom: "10px",
                    color: "#525252",
                    fontSize: "16px",
                  }}
                >
                  Хоолны зургийг нэмнэ үү
                </Typography>
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    backgroundColor: "#333",
                    color: "white",
                    marginBottom: "10px",
                  }}
                >
                  Зураг нэмэх
                  <input
                    type="file"
                    hidden
                    onChange={HandleImageUpload}
                    id="picture"
                  />
                </Button>
                {image && (
                  <Image
                    width={284}
                    height={122}
                    alt="image"
                    src={image}
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                  />
                )}
              </Box>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "15px",
                }}
              >
                <div></div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <Button
                    variant="text"
                    color="secondary"
                    onClick={handleClear}
                  >
                    Clear
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
};
