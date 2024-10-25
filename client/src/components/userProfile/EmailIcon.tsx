"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import { Stack, Typography, Modal, Button, TextField } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import axios from "axios";

interface EmailIconProps {
  initialEmail?: string;
  label?: string;
  onEditClick: (email: string) => void;
  disabled: boolean;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}

export const EmailIcon: React.FC<EmailIconProps> = ({
  disabled,
  label = "",
  onEditClick,
  email,
  setEmail,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleOpen = () => {
    if (disabled) {
      return;
    }
    setIsModalOpen(true);
    setError("");
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setEmail(email);
    setError("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.put("/api/update-email", { email });

      if (response.status === 200) {
        setIsModalOpen(false);
        onEditClick(email);
      } else {
        setError("Failed to update email");
      }
    } catch (err) {
      setError(`Error: Unable to update${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        style={{
          width: "394px",
          height: "64px",
          backgroundColor: "#F6F6F6",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingInline: "12px",
          borderRadius: "8px",
          marginTop: "20px",
        }}
        onClick={handleOpen}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              border: "1px solid #EEEFF2",
              backgroundColor: "#FFFFFF",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ForwardToInboxOutlinedIcon
              sx={{
                width: "24px",
                height: "24px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingInline: "5px",
            }}
          >
            <Typography style={{ fontSize: "12px", color: "#888A99" }}>
              {label}
            </Typography>
            <Typography style={{ fontSize: "16px", color: "#0D1118" }}>
              {disabled ? "Loading..." : email}
            </Typography>
          </div>
        </div>
        <Stack
          sx={{
            width: "34px",
            height: "34px",
            color: "#18BA51",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background-color 0.3s, transform 0.3s",
            "&:hover": {
              color: "#18BA51",
              transform: "scale(1.1)",
            },
          }}
          onClick={handleOpen}
        >
          <ModeEditOutlineOutlinedIcon
            sx={{
              width: "30px",
              height: "30px",
            }}
          />
        </Stack>
      </div>

      <Modal open={isModalOpen} onClose={handleClose}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            width: "400px",
            margin: "auto",
            marginTop: "100px",
          }}
        >
          <Typography variant="h6">Имэйл хаягаа засах</Typography>
          <TextField
            fullWidth
            label="Шинэ имэйл хаяг"
            variant="outlined"
            value={email}
            onChange={handleInputChange}
            sx={{ marginTop: "16px" }}
          />
          {error && (
            <Typography color="error" style={{ marginTop: "10px" }}>
              {error}
            </Typography>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={loading}
            style={{ marginTop: "20px" }}
          >
            {loading ? "Шинэчилж байна..." : "Хадгалах"}
          </Button>
        </div>
      </Modal>
    </div>
  );
};
