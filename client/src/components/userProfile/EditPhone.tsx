"use client";

import React, { useState } from "react";
import { Stack, Typography, Modal, Button, TextField } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import axios from "axios";
import Loading from "../password/Loading";
import { toast } from "react-toastify";

interface EditPhoneProps {
  initialPhoneNumber?: string;
  label?: string;
  onEditClick: (initialPhoneNumber: string) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EditPhone: React.FC<EditPhoneProps> = ({
  onChange,
  initialPhoneNumber = "",
  label = "",
  onEditClick,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleOpen = () => {
    setIsModalOpen(true);
    setError("");
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setPhoneNumber(initialPhoneNumber);
    setError("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
    onChange(e);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const token = window.localStorage.getItem("token");

    try {
      const response = await axios.post(
        `${process.env.BACKEND_URL}/user/updateProfile`,
        { phoneNumber },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 200) {
        setIsModalOpen(false);
        await onEditClick(phoneNumber);
        toast.success("Phone number successfully updated");
      } else {
        setError("Failed to update phone number");
      }
    } catch (err) {
      setError(`Error: Unable to update ${err}`);
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
            <LocalPhoneOutlinedIcon
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
              {phoneNumber}
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
          <Typography variant="h6">Утасны дугаарыг засах</Typography>
          <TextField
            value={phoneNumber}
            onChange={handleInputChange}
            label="Шинэ утасны дугаар"
            fullWidth
            style={{ marginTop: "20px" }}
          />
          {error && (
            <Typography color="error" style={{ marginTop: "10px" }}>
              {"Bodloggui ee "}
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
