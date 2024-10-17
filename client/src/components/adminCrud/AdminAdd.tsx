// "use client";

// import React, { useState, ChangeEvent } from "react";

// import {
//   Box,
//   Button,
//   FormControlLabel,
//   Modal,
//   Switch,
//   TextField,
//   MenuItem,
// } from "@mui/material";

// interface FoodItem {
//   foodName: string;
//   category: string;
//   ingredients: string;
//   price: string;
//   onSale: boolean;
// }

// export const AdminAdd: React.FC = () => {
//   const [open, setOpen] = useState<boolean>(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   console.log(handleClose);

//   const [foodName, setFoodName] = useState<string>("");
//   const [category, setCategory] = useState<string>("");
//   const [ingredients, setIngredients] = useState<string>("");
//   const [price, setPrice] = useState<string>("");
//   const [onSale, setOnSale] = useState<boolean>(false);

//   // const style = {
//   //   position: "absolute",
//   //   top: "50%",
//   //   left: "50%",
//   //   transform: "translate(-50%, -50%)",
//   //   width: 400,
//   //   bgcolor: "background.paper",
//   //   border: "2px solid #000",
//   //   boxShadow: 24,
//   //   p: 4,
//   // };

//   const handleSubmit = () => {
//     const newFoodItem: FoodItem = {
//       foodName,
//       category,
//       ingredients,
//       price,
//       onSale,
//     };

//     console.log(newFoodItem);

//     handleClear();
//   };

//   const handleClear = () => {
//     setFoodName("");
//     setCategory("");
//     setIngredients("");
//     setPrice("");
//     setOnSale(false);
//     setOpen(false);
//   };

//   const handleInputChange =
//     (setter: React.Dispatch<React.SetStateAction<string>>) =>
//     (e: ChangeEvent<HTMLInputElement>) => {
//       setter(e.target.value);
//     };

//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           textAlign: "center",
//           padding: "50px",
//         }}
//       >
//         <div>
//           <Button onClick={handleOpen}>Open modal</Button>
//         </div>
//         <Modal
//           open={open}
//           onClose={() => handleClear()}
//           aria-labelledby="create-food-modal"
//           aria-describedby="modal-to-add-food"
//         >
//           <Box
//             sx={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               width: 400,
//               bgcolor: "background.paper",
//               boxShadow: 24,
//               p: 4,
//               borderRadius: 2,
//             }}
//           >
//             <h2 id="create-food-modal" style={{ textAlign: "center" }}>
//               Create food
//             </h2>

//             <TextField
//               fullWidth
//               label="Хоолны нэр"
//               variant="outlined"
//               margin="normal"
//               value={foodName}
//               onChange={handleInputChange(setFoodName)}
//             />

//             <TextField
//               fullWidth
//               label="Хоолны ангилал"
//               variant="outlined"
//               margin="normal"
//               select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//             >
//               <MenuItem value="Main">Main</MenuItem>
//               <MenuItem value="Side">Side</MenuItem>
//               <MenuItem value="Dessert">Dessert</MenuItem>
//             </TextField>

//             <TextField
//               fullWidth
//               label="Хоолны орц"
//               variant="outlined"
//               margin="normal"
//               value={ingredients}
//               onChange={handleInputChange(setIngredients)}
//             />

//             <TextField
//               fullWidth
//               label="Хоолны үнэ"
//               variant="outlined"
//               margin="normal"
//               value={price}
//               onChange={handleInputChange(setPrice)}
//             />

//             <FormControlLabel
//               control={
//                 <Switch
//                   checked={onSale}
//                   onChange={(e) => setOnSale(e.target.checked)}
//                 />
//               }
//               label="Хямдралтай эсэх"
//               style={{ marginTop: "15px" }}
//             />

//             <div style={{ marginTop: "15px", marginBottom: "15px" }}>
//               <Button variant="outlined" component="label" fullWidth>
//                 Add image for the food
//                 <input type="file" hidden />
//               </Button>
//             </div>

//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               <Button variant="text" color="error" onClick={handleClear}>
//                 Clear
//               </Button>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleSubmit}
//               >
//                 Continue
//               </Button>
//             </div>
//           </Box>
//         </Modal>
//       </div>
//     </>
//   );
// };

"use client";

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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    boxShadow: 24,
    p: 4,
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
    setOpen(false);
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
    };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "50px",
        }}
      >
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
              <h2 id="create-food-modal" style={{ textAlign: "center" }}>
                Create food
              </h2>

              <TextField
                fullWidth
                label="Хоолны нэр"
                variant="outlined"
                margin="normal"
                value={foodName}
                onChange={handleInputChange(setFoodName)}
              />

              <TextField
                fullWidth
                label="Хоолны ангилал"
                variant="outlined"
                margin="normal"
                select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value="Main">Main</MenuItem>
                <MenuItem value="Side">Side</MenuItem>
                <MenuItem value="Dessert">Dessert</MenuItem>
              </TextField>

              <TextField
                fullWidth
                label="Хоолны орц"
                variant="outlined"
                margin="normal"
                value={ingredients}
                onChange={handleInputChange(setIngredients)}
              />

              <TextField
                fullWidth
                label="Хоолны үнэ"
                variant="outlined"
                margin="normal"
                value={price}
                onChange={handleInputChange(setPrice)}
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
                }}
              >
                <Typography variant="h6" style={{ marginBottom: "10px" }}>
                  Add image for the food
                </Typography>
                <Button
                  variant="contained"
                  component="label"
                  sx={{ backgroundColor: "#333", color: "white" }}
                >
                  Add image
                  <input type="file" hidden />
                </Button>
              </Box>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "15px",
                }}
              >
                <Button variant="text" color="error" onClick={handleClear}>
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
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
};
