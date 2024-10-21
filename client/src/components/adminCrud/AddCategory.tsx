// "use client";

// import { Box, Button, Modal, Typography } from "@mui/material";
// import React, { useState } from "react";

// export const AddCategory = () => {
//   const [open, setOpen] = useState<boolean>(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <div style={{ border: "1px" }}>
//         <img src="/image copy 9.png" alt="" />
//         <Button
//           style={{
//             backgroundColor: "#FFFFFF",
//             color: "#5E6166",
//             fontStyle: "inherit",
//           }}
//           onClick={handleOpen}
//         >
//           Add category
//         </Button>

//         <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <Box sx={style}>
//             <Typography id="modal-modal-title" variant="h6" component="h2">
//               Text in a modal
//             </Typography>
//             <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//               Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//             </Typography>
//           </Box>
//         </Modal>
//       </div>
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

export const AddCategory = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setCategoryName(""); // Clear the input when modal closes
    setOpen(false);
  };

  const [isHidden, setIsHidden] = useState<boolean>(true);

  const handleSubmit = () => {
    if (categoryName) {
      console.log("New Category:", categoryName);
      // Here you can add logic to save the category
      handleClose(); // Close the modal after submitting
    } else {
      alert("Please enter a category name.");
    }
  };
  const handleClear = () => {
    setOpen(false);
  };

  const style = {
    width: "587px",
    height: "284px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "white",
    boxShadow: 24,
    p: 5,
    borderRadius: 2,
  };

  return (
    <div>
      <div style={{ border: "1px" }}>
        <Button
          style={{
            backgroundColor: "#FFFFFF",
            color: "#5E6166",
            fontStyle: "inherit",
          }}
          onClick={handleOpen}
        >
          Add category
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
                alt=""
                color="error"
                onClick={handleClear}
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
    </div>
  );
};
