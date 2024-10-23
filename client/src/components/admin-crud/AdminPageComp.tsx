"use client";

import { Box, Button, Typography, Modal, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { AddCategory } from "./AddCategory";
import { AdminAdd } from "./AdminAdd";
import { toast } from "react-toastify";
import axios from "axios";

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

interface Category {
  id: string;
  categoryName: string;
}

interface NewCategoryResponse {
  id: string;
  categoryName: string;
}

interface AddCategoryResponse {
  newCategory: NewCategoryResponse;
}

const AdminPageComp = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [newCategoryName, setNewCategoryName] = useState<string>("");

  const addCategory = async (newCategory: string) => {
    try {
      // Серверт шинэ ангилал нэмэх хүсэлт
      const response = await axios.post<AddCategoryResponse>(
        "http://localhost:8000/category",
        {
          categoryName: newCategory,
        }
      );

      // const newCategoryObj = response.data.newCategory;
      const newCategoryObj: NewCategoryResponse = response.data.newCategory;
      setCategories((prevCategories) => [...prevCategories, newCategoryObj]);
      toast.success(`${newCategory} added successfully!`);
    } catch (error) {
      console.error("Error adding category:", error);
      toast.error("Failed to add category.");
    }
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

  const handleEdit = async () => {
    try {
      const updatedCategory = {
        ...categories.find((cat) => cat.categoryName === selectedCategory),
        name: newCategoryName,
      };
      await axios.put(
        `http://localhost:8000/category/${updatedCategory.id}`,
        updatedCategory

        // setCategories((prevCategories) =>
        //   prevCategories.map((category) =>
        //     category.name === selectedCategory ? updatedCategory : category
        //   )
      );
      toast.success(`Edited ${selectedCategory} to ${newCategoryName}`);
      handleCloseModal();
    } catch (error) {
      console.error("Error editing category:", error);
      toast.error("Failed to edit category.");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/category/${selectedCategory}`); // Устгах хүсэлт
      setCategories((prevCategories) =>
        prevCategories.filter(
          (category) => category.categoryName !== selectedCategory
        )
      );
      toast.success(`Deleted ${selectedCategory}`);
      handleCloseModal();
    } catch (error) {
      console.error("Error deleting category:", error);
      toast.error("Failed to delete category.");
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get<Category[]>(
        "http://localhost:8000/fetchCategory"
      );
      setCategories(response.data); // Серверээс авсан категориуд
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch categories.");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        width: "full",
        margin: "auto",
        paddingTop: "20px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Typography fontWeight={700} fontSize={22} color="#272727">
          Food Menu
        </Typography>

        <Box display="flex" flexDirection="column" marginTop="20px" gap="20px">
          {categories.map((category) => (
            <Button
              key={category.id}
              style={{
                color: "black",
                border: "1px solid #D6D8DB",
                fontStyle: "inherit",
                display: "flex",
                justifyContent: "space-between",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
              onClick={() => handleOpenModal(category.categoryName)}
            >
              {category.categoryName}
              <img
                style={{ height: "16px", width: "4px" }}
                src="/image copy 11.png"
                alt="Edit/Delete"
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
