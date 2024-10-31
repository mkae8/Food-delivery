import { Box, Button, Typography, Modal, TextField } from "@mui/material";
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

const AdminPageComp = () => {
  const { setRefetch } = useCategory();
  const [categories, setCategories] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [newCategoryName, setNewCategoryName] = useState("");

  const { categoryNames } = useCategory();

  const [idStore, setIdStore] = useState("");
  const [currentCategory, setCurrentCategory] = useState<string>("");

  const addCategory = async (newCategory: string) => {
    try {
      const response = await axios.post<AddCategoryResponse>(
        `${process.env.BACKEND_URL}/category`,
        {
          categoryName: newCategory,
        }
      );

      const newCategoryObj: any = response.data.newCategory;
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
        `${process.env.BACKEND_URL}/editCategory/${categoryToEdit}`,
        updatedCategory
      );

      // Ангиллыг шинэчлэх
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
      // Устгах ангиллын id-г ашиглан устгана
      await axios.delete(
        `${process.env.BACKEND_URL}/deleteCategory/${idStore}`
      );

      // Устгасан ангиллыг жагсаалтаас хасна
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
          `${process.env.BACKEND_URL}/fetchCategory`
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

  // const addCategory = async (newCategory) => {
  //   // ... (your existing add category logic)
  // };

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${process.env.BACKEND_URL}/fetchCategory`
  //       );
  //       setCategories(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       toast.error("Failed to fetch categories.");
  //     }
  //   };

  //   fetchCategories();
  // }, []);

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
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Typography fontWeight={700} fontSize={22} color="#272727">
          Food Menu
        </Typography>
        <Box display="flex" flexDirection="column" gap="20px">
          {categories.map((category) => (
            <Button
              key={category._id}
              onClick={() => setSelectedCategory(category.categoryName)}
            >
              {category.categoryName}
            </Button>
          ))}
        </Box>
        <AddCategory addCategory={addCategory} />
      </div>

      <div style={{ width: "70%", display: "flex", flexDirection: "column" }}>
        <h2>{selectedCategory}</h2>
        <FoodList selectedCategory={selectedCategory} />{" "}
        {/* Шинэчлэгдсэн FoodList компонент */}
      </div>

      {/* Modal and other components */}
    </div>
  );
};

export default AdminPageComp;
