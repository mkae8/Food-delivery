"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Paper, { PaperProps } from "@mui/material/Paper";
import Draggable from "react-draggable";
import { useUser } from "@/provider/UserProvider";

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog() {
  const { logOut } = useUser();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleExitClose = () => {
    logOut();
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        style={{ fontSize: "16px", color: "#0D1118", cursor: "pointer" }}
        onClick={handleClickOpen}
      >
        Гарах
      </Button>
      <Dialog
        style={{
          width: "384px",
          height: "228px",
          margin: "auto",
          textAlign: "center",
          padding: "15px",
        }}
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogContent style={{ backgroundColor: "#FFFFFF" }}>
          <DialogContentText
            style={{
              textAlign: "center",
              fontWeight: "bolder",
            }}
          >
            Та системээс гарахдаа итгэлтэй байна уу?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            style={{
              color: "#FFF",
              width: "50%",
              fontSize: "14px",
              fontWeight: "bolder",
            }}
            sx={{ "&: hover": { opacity: "20%" } }}
            autoFocus
            onClick={handleExitClose}
          >
            Тийм
          </Button>
          <Button
            style={{
              color: "#FFF",
              width: "50%",
              height: "100%",
              fontSize: "14px",
              fontWeight: "bolder",
            }}
            sx={{ "&: hover": { opacity: "20%" } }}
            onClick={handleClose}
          >
            Үгүй
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
