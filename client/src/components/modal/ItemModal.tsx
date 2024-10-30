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
  _id: string;
  foodName: string;
  images: string;
  price: string;
  foodIngredients: string;
  foodCategory: string;
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

  const handleAddToCart = () => {
    const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
    console.log(cartData);
    const itemIndex = cartData.findIndex(
      (cartItem: any) => cartItem._id === item._id
    );
    console.log(itemIndex);
    if (itemIndex >= 0) {
      cartData[itemIndex].quantity += quantity;
    } else {
      cartData.push({ item, quantity });
    }
    localStorage.setItem("cart", JSON.stringify(cartData));
    onClose();
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
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 4,
          bgcolor: "#fff",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={item.images}
            alt={item.foodName}
            style={{
              borderRadius: "8px",
              width: "400px",
              height: "400px",
              objectFit: "fill",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "384px",
            height: "398px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            // border: "1px solid",
          }}
        >
          <Box sx={{ gap: "2px" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "700", fontSize: "28px" }}
            >
              {item.foodName}
            </Typography>
            <Typography
              sx={{ fontWeight: "700", color: "#18BA51", fontSize: "18px" }}
            >
              {item.price}₮
            </Typography>
          </Box>

          <Box
            sx={{
              width: "368px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "93px",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px", fontWeight: "600" }}
            >
              Орц
            </Typography>
            <Typography
              sx={{
                width: "368px",
                height: "54px",
                borderRadius: "8px",
                padding: "8px",
                bgcolor: "#F6F6F6",
                opacity: "10",
                color: "#767676",
                display: "flex",
                alignItems: "center",
              }}
            >
              {item.foodIngredients}
            </Typography>
          </Box>
          <Typography sx={{ fontWeight: "600", fontSize: "18px" }}>
            Тоо
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              my: 2,
              justifyContent: "space-between",
            }}
          >
            <IconButton onClick={handleDecrease}>
              <RemoveIcon
                sx={{
                  bgcolor: "#18BA51",
                  width: "45px",
                  height: "40px",
                  padding: "10px",
                  color: "#FFF",
                  borderRadius: "10px",
                }}
              />
            </IconButton>
            <TextField
              type="number"
              value={quantity}
              inputProps={{ style: { textAlign: "center" } }}
              sx={{
                width: "50px",
                mx: 1,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
              disabled
            />

            <IconButton onClick={handleIncrease}>
              <AddIcon
                sx={{
                  bgcolor: "#18BA51",
                  width: "45px",
                  height: "40px",
                  padding: "10px",
                  color: "#FFF",
                  borderRadius: "10px",
                }}
              />
            </IconButton>
          </Box>
          <Box
            sx={{
              width: "full",
              height: "48px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                bgcolor: "#18BA51",
                color: "#FFFFFF",
                width: "370px",
                height: "48px",
                borderRadius: "4px",
                padding: "8px 16px",
              }}
              onClick={handleAddToCart}
            >
              Сагслах
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
