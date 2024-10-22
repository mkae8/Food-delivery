"use client";

import { Box, Button, Typography, Modal, TextField } from "@mui/material";
import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { AdminAdd } from "./AdminAdd";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const AdminPageComp = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [newCategoryName, setNewCategoryName] = useState<string>("");

  const addCategory = (newCategory: string) => {
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  };

  const handleOpenModal = (category: string) => {
    setSelectedCategory(category);
    setNewCategoryName(category);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedCategory("");
    setNewCategoryName("");
  };

  const handleEdit = () => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category === selectedCategory ? newCategoryName : category
      )
    );
    console.log(`Editing ${selectedCategory} to ${newCategoryName}`);
    handleCloseModal();
  };

  const handleDelete = () => {
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category !== selectedCategory)
    );
    console.log(`Deleting ${selectedCategory}`);
    handleCloseModal();
  };

  return (
    <div
      style={{
        display: "flex",
        width: "full",
        margin: "auto",
        paddingTop: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Typography fontWeight={700} fontSize={22} color="#272727">
          Food menu
        </Typography>

        <Box display="flex" flexDirection="column" marginTop="20px" gap="20px">
          {categories.map((category, index) => (
            <Button
              key={index}
              style={{
                color: "black",
                border: "1px solid #D6D8DB",
                fontStyle: "inherit",
                display: "flex",
                justifyContent: "space-between",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
              onClick={() => handleOpenModal(category)}
            >
              {category}
              <img
                style={{ height: "16px", width: "4px" }}
                src="/image copy 11.png"
                alt=""
              />
            </Button>
          ))}
        </Box>

        <AddCategory addCategory={addCategory} />
      </div>
      <div>
        <AdminAdd />
      </div>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={style}>
          <Typography variant="h6">Edit or Delete</Typography>
          <TextField
            fullWidth
            label="New Category Name"
            variant="outlined"
            margin="normal"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
          <Button onClick={handleEdit} fullWidth style={{ marginTop: "10px" }}>
            Edit Name
          </Button>
          <Button
            onClick={handleDelete}
            fullWidth
            style={{ marginTop: "10px" }}
          >
            Delete Category
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AdminPageComp;
