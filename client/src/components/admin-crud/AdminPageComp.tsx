"use client";

import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { AddCategory } from "./AddCategory";
import { AdminAdd } from "./AdminAdd";

import { toast } from "react-toastify";
import axios from "axios";
import { useCategory } from "@/provider/CategoryProvider";
import FoodList from "./FetchFoods";

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
  _id: string;
  categoryName: string;
}

interface NewCategoryResponse {
  _id: string;
  categoryName: string;
}

interface AddCategoryResponse {
  newCategory: NewCategoryResponse;
}

const AdminPageComp = () => {
  const { setRefetch } = useCategory();
  const { categoryNames } = useCategory();
  const [categories, setCategories] = useState<Category[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [newCategoryName, setNewCategoryName] = useState<string>("");
  const [idStore, setIdStore] = useState("");
  const [currentCategory, setCurrentCategory] = useState<string>("");

  const addCategory = async (newCategory: string) => {
    try {
      const response = await axios.post<AddCategoryResponse>(
        `food-delivery-ily2.onrender.com/category`,
        {
          categoryName: newCategory,
        }
      );

      const newCategoryObj: NewCategoryResponse = response.data.newCategory;
      setCategories((prevCategories) => [...prevCategories, newCategoryObj]);
      setRefetch((prev) => !prev);

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
      const categoryToEdit = idStore;

      if (!categoryToEdit) {
        toast.error("Category not found.");
        return;
      }

      const updatedCategory = {
        categoryName: newCategoryName,
      };

      const response = await axios.put(
        `food-delivery-ily2.onrender.com/editCategory/${categoryToEdit}`,
        updatedCategory
      );

      setCategories((prevCategories) =>
        prevCategories.map((cat) =>
          cat._id === categoryToEdit
            ? { ...cat, categoryName: newCategoryName }
            : cat
        )
      );

      toast.success(`Edited ${selectedCategory} to ${newCategoryName}`);
      setIdStore("");
      handleCloseModal();
    } catch (error) {
      console.error("Error editing category:", error);
      toast.error("Failed to edit category.");
    }
  };

  const handleDelete = async () => {
    try {

      await axios.delete(
        `food-delivery-ily2.onrender.com/deleteCategory/${idStore}`
      );


      setCategories((prevCategories) =>
        prevCategories.filter((category) => category._id !== idStore)
      );

      toast.success(`Deleted ${selectedCategory}`);
      handleCloseModal();
    } catch (error) {
      console.error("Error deleting category:", error);
      toast.error("Fail delete");
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get<Category[]>(
          `food-delivery-ily2.onrender.com/fetchCategory`
        );

        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch categories.");
      }
    };

    fetchCategories();
  }, []);

  const [clicked, setClicked] = useState<string>("");

  const handleCatClick = (name: string) => {
    setClicked(name);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        margin: "auto",
        paddingTop: "20px",
        gap: "55px",
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
          Food Menu
        </Typography>

        <Box display="flex" flexDirection="column" marginTop="20px" gap="20px ">
          {categories.map((category) => (
            <Button
              onClick={() => {
                handleCatClick(category.categoryName);
              }}
              key={category._id}
              style={{
                color: "black",
                border: "1px solid #D6D8DB",
                fontStyle: "inherit",
                display: "flex",
                justifyContent: "space-between",
                paddingLeft: "15px",
                paddingRight: "15px",
                backgroundColor:
                  category.categoryName === clicked ? "#18BA51" : "white",
              }}
            >
              {category.categoryName}
              <div style={{ width: "25px", height: "100%" }}>
                <svg
                  width="12"
                  height="12"
                  cursor="pointer"
                  viewBox="0 0 4 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  key={category._id}
                  onClick={() => {
                    handleOpenModal(category.categoryName);
                    setIdStore(category._id);
                    setCurrentCategory(category.categoryName);
                  }}
                >
                  <path
                    d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14C0 13.45 0.195833 12.9792 0.5875 12.5875C0.979167 12.1958 1.45 12 2 12C2.55 12 3.02083 12.1958 3.4125 12.5875C3.80417 12.9792 4 13.45 4 14C4 14.55 3.80417 15.0208 3.4125 15.4125C3.02083 15.8042 2.55 16 2 16ZM2 10C1.45 10 0.979167 9.80417 0.5875 9.4125C0.195833 9.02083 0 8.55 0 8C0 7.45 0.195833 6.97917 0.5875 6.5875C0.979167 6.19583 1.45 6 2 6C2.55 6 3.02083 6.19583 3.4125 6.5875C3.80417 6.97917 4 7.45 4 8C4 8.55 3.80417 9.02083 3.4125 9.4125C3.02083 9.80417 2.55 10 2 10ZM2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4Z"
                    fill="#1C1B1F"
                  />
                </svg>
              </div>
            </Button>
          ))}
        </Box>

        <AddCategory addCategory={addCategory} />
      </div>

      <div
        style={{
          width: "70%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div>
            <h2>{clicked}</h2>
          </div>
          <AdminAdd />
        </div>
        <FoodList category={clicked} />
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
