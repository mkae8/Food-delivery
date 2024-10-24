// "use client";

// import { Box, Button, Modal, TextField, Typography } from "@mui/material";
// import React, { useState } from "react";
// import axios from "axios";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "400px",
//   bgcolor: "white",
//   boxShadow: 24,
//   p: 4,
//   borderRadius: 2,
// };

// interface AddCategoryProps {
//   addCategory: (categoryName: string) => void;
// }

// export const AddCategory: React.FC<AddCategoryProps> = ({ addCategory }) => {
//   const [open, setOpen] = useState<boolean>(false);
//   const [categoryName, setCategoryName] = useState<string>("");

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => {
//     setCategoryName("");
//     setOpen(false);
//   };

//   const handleSubmit = () => {
//     if (categoryName) {
//       addCategory(categoryName);
//       handleClose();
//     } else {
//       alert("Please enter a category name.");
//     }
//   };

//   const handleClear = () => {
//     setCategoryName("");
//   };

//   const categoryHandler = async () => {
//     try {
//       const response = await.get<AddCategoryProps[]>(
//         `http://localhost:8000/category`
//       )
//       console.log(response);
//       setCategoryName(response.data)
//     }

//     catch (error) {
//       console.error("errorrrrr", error);

//     }
//   }

//   return (
//     <div>
//       <Button
//         style={{
//           backgroundColor: "#FFFFFF",
//           border: "1px solid #D6D8DB",
//           color: "#5E6166",
//           fontStyle: "inherit",
//           width: "285px",
//           height: "40px",
//         }}
//         onClick={handleOpen}
//       >
//         Create new category
//       </Button>

//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <img
//               style={{ height: "12px", width: "12px", cursor: "pointer" }}
//               src="/image copy 10.png"
//               alt=""
//               color="error"
//               onClick={handleClose}
//             />
//             <Typography id="modal-modal-title" variant="h6" component="h2">
//               Create New Category
//             </Typography>
//             <div></div>
//           </div>
//           <TextField
//             fullWidth
//             label="Category Name"
//             variant="outlined"
//             margin="normal"
//             sx={{
//               backgroundColor: "#F4F4F4",
//             }}
//             value={categoryName}
//             onChange={(e) => setCategoryName(e.target.value)}
//           />
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               marginTop: "25px",
//             }}
//           >
//             <div></div>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "15px",
//                 marginTop: "15px",
//               }}
//             >
//               <Button variant="text" color="secondary" onClick={handleClear}>
//                 Clear
//               </Button>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleSubmit}
//                 style={{
//                   backgroundColor: "#333",
//                   color: "white",
//                 }}
//               >
//                 Create
//               </Button>
//             </div>
//           </div>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

"use client";

import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

interface AddCategoryProps {
  addCategory: (categoryName: string) => void;
}

export const AddCategory: React.FC<AddCategoryProps> = ({ addCategory }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setCategoryName("");
    setOpen(false);
  };

  const handleSubmit = () => {
    if (categoryName) {
      addCategory(categoryName);
      handleClose();
    } else {
      alert("Please enter a category name.");
    }
  };

  const handleClear = () => {
    setCategoryName("");
  };

  return (
    <div>
      <Button
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #D6D8DB",
          color: "#5E6166",
          fontStyle: "inherit",
          width: "285px",
          height: "40px",
        }}
        onClick={handleOpen}
      >
        Create new category
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
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
              alt="Close"
              onClick={handleClose}
            />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create New Category
            </Typography>
            <div></div>
          </div>
          <TextField
            fullWidth
            label="Category Name"
            variant="outlined"
            margin="normal"
            sx={{
              backgroundColor: "#F4F4F4",
            }}
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "25px",
            }}
          >
            <div></div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
                marginTop: "15px",
              }}
            >
              <Button variant="text" color="secondary" onClick={handleClear}>
                Clear
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                style={{
                  backgroundColor: "#333",
                  color: "white",
                }}
              >
                Create
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
