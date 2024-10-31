"use client";

import axios from "axios";
import { useState, useEffect } from "react";

interface FoodCategory {
  id: string;
  foodName: string;
  images: string;
  price: string;
  foodIngredients: string;
  foodCategory: string;
}

export const Test = () => {
  const [foodCategories, setFoodCategories] = useState<FoodCategory[]>([]);

  useEffect(() => {
    foodHandler();
  }, []);

  const foodHandler = async () => {
    try {
      const response = await axios.get<FoodCategory[]>(
        `${process.env.BACKEND_URL}/foods-get`
      );
      setFoodCategories(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  return (
    <div>
      <ul>
        {foodCategories.length > 0 ? (
          foodCategories.map((category) => (
            <li key={category.id} style={{ marginBottom: "20px" }}>
              <h3>{category.foodName}</h3>
              <img
                src={category.images}
                alt={category.foodName}
                style={{ width: "200px", height: "auto" }}
              />
              <p>{category.foodIngredients}</p>
              <p>{category.price}</p>
            </li>
          ))
        ) : (
          <p>No food categories available.</p>
        )}
      </ul>
    </div>
  );
};

// "use client";
// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   IconButton,
//   Typography,
//   Box,
//   Button,
//   TextField,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";

// type FoodItem = {
//   image: string;
//   title: string;
//   SalePrice?: string;
//   price: string;
//   percent?: string;
//   ingredients?: string;
// };

// interface ItemModalProps {
//   item: FoodItem;
//   isOpen: boolean;
//   onClose: () => void;
// }

// export const ItemModal: React.FC<ItemModalProps> = ({
//   item,
//   isOpen,
//   onClose,
// }) => {
//   const [quantity, setQuantity] = useState(1);

//   const handleIncrease = () => {
//     setQuantity((prev) => prev + 1);
//   };

//   const handleDecrease = () => {
//     if (quantity > 1) {
//       setQuantity((prev) => prev - 1);
//     }
//   };

//   return (
//     <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
//       <DialogTitle sx={{ backgroundColor: "white" }}>
//         <IconButton
//           edge="end"
//           color="inherit"
//           onClick={onClose}
//           aria-label="close"
//           sx={{ position: "absolute", right: 8, top: 8 }}
//         >
//           <CloseIcon />
//         </IconButton>
//       </DialogTitle>

//       <DialogContent
//         sx={{ display: "flex", flexDirection: "row", gap: 4, bgcolor: "#fff" }}
//       >
//         <Box sx={{ display: "flex", justifyContent: "center" }}>
//           <img
//             src={item.image}
//             alt={item.title}
//             style={{
//               borderRadius: "8px",
//               width: "500px",
//               height: "500px",
//               objectFit: "contain",
//             }}
//           />
//         </Box>
//         <Box>
//           <Typography variant="h5" gutterBottom>
//             {item.title}
//           </Typography>
//           <Typography variant="h6" color="green" gutterBottom></Typography>

//           <Typography variant="subtitle1" gutterBottom>
//             Орц
//           </Typography>
//           <Typography variant="body2" color="textSecondary" gutterBottom>
//             {item.ingredients}
//           </Typography>

//           <Box sx={{ display: "flex", alignitem: "center", my: 2 }}>
//             <IconButton onClick={handleDecrease}>
//               <RemoveIcon />
//             </IconButton>
//             <TextField
//               type="number"
//               value={quantity}
//               inputProps={{ style: { textAlign: "center" } }}
//               sx={{ width: "50px", mx: 1 }}
//               disabled
//             />
//             <IconButton onClick={handleIncrease}>
//               <AddIcon />
//             </IconButton>
//           </Box>

//           <Button
//             variant="contained"
//             color="success"
//             fullWidth
//             onClick={() => console.log("Add to cart", quantity)}
//           >
//             Сагслах
//           </Button>
//         </Box>
//       </DialogContent>
//     </Dialog>
//   );
// };

// "use client";

// import React, { useState } from "react";
// import { Box, Container, Typography, IconButton } from "@mui/material";
// import {ItemModal} from "../modal/ItemModal";

// interface FoodItem {
//   image: string;
//   title: string;
//   SalePrice?: string;
//   price: string;
//   percent?: string;
//   ingredients: string;
// }

// export const HomePageFoods = () => {
//   const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
//   const [isModalOpen, setModalOpen] = useState(false);

//  const saleFoods: FoodItem[] = [
//   {
//     image: "/hool1.png",
//     title: "Өглөөний хоол",
//     SalePrice: "14,800₮",
//     price: "16,800₮",
//     percent: "20%",
//     ingredients: "",
//   },
//   {
//     image: "/zairmag.png",
//     title: "Зайрмаг",
//     SalePrice: "4,800₮",
//     price: "6,800₮",
//     percent: "20%",
//     ingredients: "",
//   },
//   {
//     image: "/hool2.png",
//     title: "Өглөөний хоол",
//     SalePrice: "24,800₮",
//     price: "26,800₮",
//     percent: "20%",
//     ingredients: "",
//   },
//   {
//     image: "/hool3.png",
//     title: "Breakfast",
//     SalePrice: "24,800₮",
//     price: "26,800₮",
//     percent: "20%",
//     ingredients: "",
//   },
// ];
// const undsenHool: FoodItem[] = [
//   {
//     image: "/pizza.png",
//     title: "Main Pizza ",
//     price: "34,800₮",
//     ingredients: "",
//   },
//   {
//     image: "/tart.png",
//     title: "Food tart",
//     price: "22,800₮",
//     ingredients: "",
//   },
//   {
//     image: "/breakfast.png",
//     title: "Өглөөний хоол",
//     price: "14,800₮",
//     ingredients: "",
//   },
//   {
//     image: "/soup.png",
//     title: "Зутан шөл",
//     price: "17,800₮",
//     ingredients: "",
//   },
// ];
// const Zuush: FoodItem[] = [
//   {
//     image: "/chicken.png",
//     title: "Чихэрлэг тахиа",
//     price: "24,800₮",
//     ingredients: "",
//   },
//   {
//     image: "/lunch.png",
//     title: "Lunch",
//     price: "24,800₮",
//     ingredients: "",
//   },
//   {
//     image: "/sendvich.png",
//     title: "Сэндвич",
//     price: "14,800₮",
//     ingredients: "",
//   },
//   {
//     image: "/applePie.png",
//     title: "Apple pie",
//     price: "34,800₮",
//     ingredients: "",
//   },
// ];
// const Amttan: FoodItem[] = [
//   {
//     image: "/cake.png",
//     title: "Торт",
//     price: "54,800₮",
//     ingredients: "",
//   },
//   {
//     image: "/oreoShake.png",
//     title: "Oreo shake",
//     price: "14,800₮",
//     ingredients: "",
//   },
//   {
//     image: "/chocolate.png",
//     title: "Chocolate ",
//     price: "14,800₮",
//     ingredients: "",
//   },
//   {
//     image: "/yoghurt.png",
//     title: "Yoghurt",
//     price: "14,800₮",
//     ingredients: "",
//   },]

//   const handleOpenModal = (food: FoodItem) => {
//     // setSelectedFood(food);
//     setSelectedFood({
//       image: food.image,
//       title: food.title,
//       SalePrice: food.SalePrice,
//       price: food.price,
//       percent: food.percent,
//       ingredients: food.ingredients,
//     });

//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//     setSelectedFood(null);
//   };
// console.log(selectedFood);

//   return (
//     <>
//       <Container
//         sx={{
//           width: "1200px",
//           height: "1616px",
//           display: "flex",
//           alignItems: "center",
//           flexDirection: "column",
//           gap: "50px",
//           marginTop: "122px",
//         }}
//       >
//         {/* Sale Foods Section */}
//         <Box
//           sx={{
//             height: "344px",
//             display: "flex",
//             flexDirection: "column",
//           }}
//         >
//           <Typography
//             sx={{
//               fontSize: "22px",
//               fontWeight: "700",
//               display: "flex",
//               gap: "10px",
//               alignItems: "center",
//             }}
//           >
//             Хямдралтай
//           </Typography>
//           <Box
//             sx={{
//               display: "grid",
//               width: "1200px",
//               gridTemplateColumns: "repeat(4, 1fr)",
//               gap: "20px",
//               marginTop: "20px",
//             }}
//           >
//             {saleFoods.map((food, index) => (
//               <Box
//                 key={index}
//                 sx={{
//                   display: "column",
//                   justifyContent: "start",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => handleOpenModal(food)}
//               >
//                 <img
//                   src={food.image}
//                   alt={food.title}
//                   style={{
//                     height: "190px",
//                     width: "295px",
//                     borderRadius: "12px",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <Typography
//                   sx={{
//                     marginLeft: "10px",
//                     textAlign: "start",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   {food.title}
//                 </Typography>
//               </Box>
//             ))}
//           </Box>
//         </Box>

//         {/* undsenHool Section */}

//         <Box
//           sx={{
//             height: "344px",
//             display: "flex",
//             flexDirection: "column",
//           }}
//         >
//           <Typography
//             sx={{
//               fontSize: "22px",
//               fontWeight: "700",
//               display: "flex",
//               gap: "10px",
//               alignItems: "center",
//             }}
//           >
//             Хямдралтай
//           </Typography>
//           <Box
//             sx={{
//               display: "grid",
//               width: "1200px",
//               gridTemplateColumns: "repeat(4, 1fr)",
//               gap: "20px",
//               marginTop: "20px",
//             }}
//           >
//             {undsenHool.map((food, index) => (
//               <Box
//                 key={index}
//                 sx={{
//                   display: "column",
//                   justifyContent: "start",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => handleOpenModal(food)}
//               >
//                 <img
//                   src={food.image}
//                   alt={food.title}
//                   style={{
//                     height: "190px",
//                     width: "295px",
//                     borderRadius: "12px",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <Typography
//                   sx={{
//                     marginLeft: "10px",
//                     textAlign: "start",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   {food.title}
//                 </Typography>
//               </Box>
//             ))}
//           </Box>
//         </Box>

//         {/* Zuush Section */}

//         <Box
//           sx={{
//             height: "344px",
//             display: "flex",
//             flexDirection: "column",
//           }}
//         >
//           <Typography
//             sx={{
//               fontSize: "22px",
//               fontWeight: "700",
//               display: "flex",
//               gap: "10px",
//               alignItems: "center",
//             }}
//           >
//             Хямдралтай
//           </Typography>
//           <Box
//             sx={{
//               display: "grid",
//               width: "1200px",
//               gridTemplateColumns: "repeat(4, 1fr)",
//               gap: "20px",
//               marginTop: "20px",
//             }}
//           >
//             {Zuush.map((food, index) => (
//               <Box
//                 key={index}
//                 sx={{
//                   display: "column",
//                   justifyContent: "start",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => handleOpenModal(food)}
//               >
//                 <img
//                   src={food.image}
//                   alt={food.title}
//                   style={{
//                     height: "190px",
//                     width: "295px",
//                     borderRadius: "12px",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <Typography
//                   sx={{
//                     marginLeft: "10px",
//                     textAlign: "start",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   {food.title}
//                 </Typography>
//               </Box>
//             ))}
//           </Box>
//         </Box>

//         {/* Amttan Section */}

//         <Box
//           sx={{
//             height: "344px",
//             display: "flex",
//             flexDirection: "column",
//           }}
//         >
//           <Typography
//             sx={{
//               fontSize: "22px",
//               fontWeight: "700",
//               display: "flex",
//               gap: "10px",
//               alignItems: "center",
//             }}
//           >
//             Хямдралтай
//           </Typography>
//           <Box
//             sx={{
//               display: "grid",
//               width: "1200px",
//               gridTemplateColumns: "repeat(4, 1fr)",
//               gap: "20px",
//               marginTop: "20px",
//             }}
//           >
//             {Amttan.map((food, index) => (
//               <Box
//                 key={index}
//                 sx={{
//                   display: "column",
//                   justifyContent: "start",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => handleOpenModal(food)}
//               >
//                 <img
//                   src={food.image}
//                   alt={food.title}
//                   style={{
//                     height: "190px",
//                     width: "295px",
//                     borderRadius: "12px",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <Typography
//                   sx={{
//                     marginLeft: "10px",
//                     textAlign: "start",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   {food.title}
//                 </Typography>
//               </Box>
//             ))}
//           </Box>
//         </Box>

//         {selectedFood && (
//           <ItemModal isOpen={isModalOpen} onClose={handleCloseModal} item={selectedFood}  />
//         )}
//       </Container>
//     </>
//   );
// };
