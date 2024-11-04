// import { Box, Container, Typography } from "@mui/material";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { ItemModal } from "../modal/ItemModal";

// interface FoodItem {
//   _id: string;
//   foodName: string;
//   images: string;
//   price: string;
//   foodIngredients: string;
//   foodCategory: {
//     _id: string;
//     categoryName: string;
//   };
// }

// const FoodList = ({ selectedCategory }: { selectedCategory: string }) => {
//   const [foods, setFoods] = useState<FoodItem[]>([]);
//   const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
//   const [isModalOpen, setModalOpen] = useState(false);

//   const fetchFoodItems = async () => {
//     try {
//       const response = await axios.get<FoodItem[]>(
//         `${process.env.BACKEND_URL}/foods-get?category=${selectedCategory}`
//       );
//       setFoods(response.data);
//     } catch (error) {
//       console.error("Error fetching food items", error);
//     }
//   };

//   useEffect(() => {
//     if (selectedCategory) {
//       fetchFoodItems();
//     }
//   }, [selectedCategory]);

//   const handleOpenModal = (food: FoodItem) => {
//     setSelectedFood(food);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//     setSelectedFood(null);
//   };

//   return (
//     <Container>
//       <Box
//         sx={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: "20px",
//         }}
//       >
//         {foods.map((food) => (
//           <Box
//             key={food._id}
//             onClick={() => handleOpenModal(food)}
//             sx={{ cursor: "pointer" }}
//           >
//             <img
//               src={food.images}
//               alt={food.foodName}
//               style={{ width: "100%", borderRadius: "12px" }}
//             />
//             <Typography>{food.foodName}</Typography>
//             <Typography>{food.price}₮</Typography>
//           </Box>
//         ))}
//       </Box>
//       {selectedFood && (
//         <ItemModal
//           isOpen={isModalOpen}
//           onClose={handleCloseModal}
//           item={selectedFood}
//         />
//       )}
//     </Container>
//   );
// };

// export default FoodList;
