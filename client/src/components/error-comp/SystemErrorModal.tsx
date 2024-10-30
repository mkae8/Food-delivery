"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Error } from "../icon/Error";
import { BorderRight, RoundedCorner } from "@mui/icons-material";
import { BiBorderRadius } from "react-icons/bi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "384",
  bgcolor: "white",
  border: "12px solid white",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
  textAlign: "center",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        style={{
          width: "384px",
          height: "228px",
          padding: "24px",
          margin: "auto",
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "228px",
              marginBottom: "12px",
            }}
          >
            <Error />
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            style={{
              fontWeight: "bolder",
            }}
          >
            Уучлаарай, систем ачааллахад алдаа гарлаа.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
