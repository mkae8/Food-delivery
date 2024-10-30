// "use client";
// import { Box, Container, Typography } from "@mui/material";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { ItemModal } from "../modal/ItemModal";
// import { Category } from "@mui/icons-material";
// interface FoodCategory {
//   id: string;
//   foodName: string;
//   images: string;
//   price: string;
//   foodIngredients: string;
//   foodCategory: string;
// }
// interface FoodItem {
//   id: string;
//   foodName: string;
//   images: string;
//   price: string;
//   foodIngredients: string;
//   foodCategory: string;
// }
// const FoodList = () => {
//   const [foodCategories, setFoodCategories] = useState<FoodCategory[]>([]);
//   const [selectedCategoy, setSelectedCategory] = useState<FoodCategory | null>(
//     null
//   );
//   const fetchFoodCategories = async () => {
//     try {
//       const response = await axios.get<FoodCategory[]>(
//         `https://food-delivery-lrqy.onrender.com/foods-get`
//       );
//       console.log(response);
//       setFoodCategories(response.data);
//     } catch (error) {
//       console.log("Error fetching data", error);
//     }
//   };
//   useEffect(() => {
//     fetchFoodCategories();
//   }, []);

//   // const categories = foodCategories.filter();

//   const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [foods, setFoods] = useState<FoodItem[]>([]);

//   useEffect(() => {
//     foodHandler();
//   }, []);

//   const foodHandler = async () => {
//     try {
//       const response = await axios.get<FoodItem[]>(
//         `${process.env.BACKEND_URL}/foods-get`
//       );
//       setFoods(response.data);
//     } catch (error) {
//       console.log(`Error fetching data: ${error}`);
//     }
//   };

//   const handleOpenModal = (food: FoodItem) => {
//     setSelectedFood(food);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//     setSelectedFood(null);
//   };

//   const mainDishes = foods.filter(
//     (food) => food.foodCategory === "Main course"
//   );
//   const soupFoods = foods.filter((food) => food.foodCategory === "Soup");
//   const breakFast = foods.filter((food) => food.foodCategory === "Breakfast");
//   const desserts = foods.filter((food) => food.foodCategory === "Desserts");
//   console.log(desserts);

//   return (
//     <div>
//       {/* <ul>
//         {foodCategories.length > 0 ? (
//           foodCategories.map((category) => (
//             <div key={category.id} style={{ marginBottom: "20px" }}>
//               <img
//                 src={category.images}
//                 alt={category.foodName}
//                 style={{
//                   width: "282px",
//                   height: "186px",
//                   borderRadius: "10px",
//                 }}
//               />
//               <p
//                 style={{
//                   fontWeight: "600",
//                   fontStyle: "inherit",
//                 }}
//               >
//                 {category.foodName}
//               </p>

//               <p
//                 style={{
//                   color: "#18BA51",
//                   fontWeight: "600",
//                   fontStyle: "inherit",
//                 }}
//               >
//                 {category.price}₮
//               </p>
//             </div>
//           ))
//         ) : (
//           <p>No food categories available.</p>
//         )}
//       </ul> */}
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
//         {mainDishes.length > 0 && (
//           <Box
//             sx={{ height: "344px", display: "flex", flexDirection: "column" }}
//           >
//             <Typography sx={{ fontSize: "22px", fontWeight: "700" }}>
//               Main Course
//             </Typography>
//             <Box
//               sx={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(3, 1fr)",
//                 gap: "20px",
//                 mt: 2,
//               }}
//             >
//               {mainDishes.map((food) => (
//                 <Box
//                   key={food.id}
//                   onClick={() => handleOpenModal(food)}
//                   sx={{ cursor: "pointer" }}
//                 >
//                   <img
//                     src={food.images}
//                     alt={food.foodName}
//                     style={{
//                       height: "186px",
//                       width: "282px",
//                       borderRadius: "12px",
//                       objectFit: "cover",
//                     }}
//                   />
//                   <Box sx={{ mt: 1 }}>
//                     <Typography sx={{ textAlign: "start", fontWeight: "bold" }}>
//                       {food.foodName}
//                     </Typography>
//                     <Typography sx={{ fontWeight: "bold", color: "#18BA51" }}>
//                       {food.price}
//                     </Typography>
//                   </Box>
//                 </Box>
//               ))}
//             </Box>
//           </Box>
//         )}
//         {soupFoods.length > 0 && (
//           <Box
//             sx={{ height: "344px", display: "flex", flexDirection: "column" }}
//           >
//             <Typography sx={{ fontSize: "22px", fontWeight: "700" }}>
//               Soup
//             </Typography>
//             <Box
//               sx={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(3, 1fr)",
//                 gap: "20px",
//                 mt: 2,
//               }}
//             >
//               {soupFoods.map((food) => (
//                 <Box
//                   key={food.id}
//                   onClick={() => handleOpenModal(food)}
//                   sx={{ cursor: "pointer" }}
//                 >
//                   <img
//                     src={food.images}
//                     alt={food.foodName}
//                     style={{
//                       height: "186px",
//                       width: "282px",
//                       borderRadius: "12px",
//                       objectFit: "cover",
//                     }}
//                   />
//                   <Box sx={{ mt: 1 }}>
//                     <Typography sx={{ textAlign: "start", fontWeight: "bold" }}>
//                       {food.foodName}
//                     </Typography>
//                     <Typography sx={{ fontWeight: "bold", color: "#18BA51" }}>
//                       {food.price}
//                     </Typography>
//                   </Box>
//                 </Box>
//               ))}
//             </Box>
//           </Box>
//         )}

//         {breakFast.length > 0 && (
//           <Box
//             sx={{ height: "344px", display: "flex", flexDirection: "column" }}
//           >
//             <Typography sx={{ fontSize: "22px", fontWeight: "700" }}>
//               Breakfast
//             </Typography>
//             <Box
//               sx={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(3, 1fr)",
//                 gap: "20px",
//                 mt: 2,
//               }}
//             >
//               {breakFast.map((food) => (
//                 <Box
//                   key={food.id}
//                   onClick={() => handleOpenModal(food)}
//                   sx={{ cursor: "pointer" }}
//                 >
//                   <img
//                     src={food.images}
//                     alt={food.foodName}
//                     style={{
//                       height: "186px",
//                       width: "282px",
//                       borderRadius: "12px",
//                       objectFit: "cover",
//                     }}
//                   />
//                   <Box sx={{ mt: 1 }}>
//                     <Typography sx={{ textAlign: "start", fontWeight: "bold" }}>
//                       {food.foodName}
//                     </Typography>
//                     <Typography sx={{ fontWeight: "bold", color: "#18BA51" }}>
//                       {food.price}
//                     </Typography>
//                   </Box>
//                 </Box>
//               ))}
//             </Box>
//           </Box>
//         )}

//         {desserts.length > 0 && (
//           <Box
//             sx={{ height: "344px", display: "flex", flexDirection: "column" }}
//           >
//             <Typography sx={{ fontSize: "22px", fontWeight: "700" }}>
//               Desserts
//             </Typography>
//             <Box
//               sx={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(3, 1fr)",
//                 gap: "20px",
//                 mt: 2,
//               }}
//             >
//               {desserts.map((food) => (
//                 <Box
//                   key={food.id}
//                   onClick={() => handleOpenModal(food)}
//                   sx={{ cursor: "pointer" }}
//                 >
//                   <img
//                     src={food.images}
//                     alt={food.foodName}
//                     style={{
//                       height: "186px",
//                       width: "282px",
//                       borderRadius: "12px",
//                       objectFit: "cover",
//                     }}
//                   />
//                   <Box sx={{ mt: 1 }}>
//                     <Typography sx={{ textAlign: "start", fontWeight: "bold" }}>
//                       {food.foodName}
//                     </Typography>
//                     <Typography sx={{ fontWeight: "bold", color: "#18BA51" }}>
//                       {food.price}
//                     </Typography>
//                   </Box>
//                 </Box>
//               ))}
//             </Box>
//           </Box>
//         )}
//         {selectedFood && (
//           <ItemModal
//             isOpen={isModalOpen}
//             onClose={handleCloseModal}
//             item={selectedFood}
//           />
//         )}
//       </Container>
//     </div>
//   );
// };
// export default FoodList;

"use client";
import { Box, Container, Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { ItemModal } from "../modal/ItemModal";

interface FoodCategory {
  id: string;
  foodName: string;
  images: string;
  price: string;
  foodIngredients: string;
  foodCategory: string;
}

interface FoodItem {
  id: string;
  foodName: string;
  images: string;
  price: string;
  foodIngredients: string;
  foodCategory: string;
}

const FoodList = () => {
  const [foodCategories, setFoodCategories] = useState<FoodCategory[]>([]);
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const fetchFoodCategories = async () => {
    try {
      const response = await axios.get<FoodCategory[]>(
        `https://food-delivery-lrqy.onrender.com/foods-get`
      );
      setFoodCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  const fetchFoodItems = async () => {
    try {
      const response = await axios.get<FoodItem[]>(
        `${process.env.BACKEND_URL}/foods-get`
      );
      setFoods(response.data);
    } catch (error) {
      console.error("Error fetching food items", error);
    }
  };

  useEffect(() => {
    fetchFoodCategories();
    fetchFoodItems();
  }, []);

  const handleOpenModal = (food: FoodItem) => {
    setSelectedFood(food);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedFood(null);
  };

  const renderFoodItemsByCategory = (category: string) => {
    const filteredFoods = foods.filter(
      (food) => food.foodCategory === category
    );
    if (filteredFoods.length === 0) return null;

    return (
      <Box sx={{ height: "344px", display: "flex", flexDirection: "column" }}>
        <Typography sx={{ fontSize: "22px", fontWeight: "700" }}>
          {category}
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            mt: 2,
          }}
        >
          {filteredFoods.map((food) => (
            <Box
              key={food.id}
              onClick={() => handleOpenModal(food)}
              sx={{ cursor: "pointer" }}
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
              <Box sx={{ mt: 1 }}>
                <Typography sx={{ textAlign: "start", fontWeight: "bold" }}>
                  {food.foodName}
                </Typography>
                <Typography sx={{ fontWeight: "bold", color: "#18BA51" }}>
                  {food.price}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    );
  };

  return (
    <Container
      sx={{
        width: "1200px",
        marginTop: "122px",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      {["Main course", "Soup", "Breakfast", "Desserts"].map((category) =>
        renderFoodItemsByCategory(category)
      )}
      {selectedFood && (
        <ItemModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          item={selectedFood}
        />
      )}
    </Container>
  );
};

export default FoodList;
