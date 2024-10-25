"use client";
import React, { useState } from "react";
import { Stack, Typography, Modal, Button, TextField } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import axios from "axios";

interface EditProfileProps {
  userName?: string;
  onEditClick: (newName: string) => void;
  label?: string;
}

export const EditProfile: React.FC<EditProfileProps> = ({
  userName = "Таны нэр",
  onEditClick,
  label = "Таны нэр",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newName, setNewName] = useState<string>(userName);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSave = () => {
    if (!newName) {
      setError("Нэр оруулна уу.");
      return;
    }
    setLoading(true);
    onEditClick(newName);
    setLoading(false);
    setIsModalOpen(false);
  };

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.put("/api/update-profile", {
        name: newName,
      });

      if (response.status === 200) {
        setIsModalOpen(false);
        onEditClick(newName);
      } else {
        setError("Failed to update profile");
      }
    } catch (err) {
      setError(`Error: Unable to update${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Profile Display */}
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
            <Person2OutlinedIcon
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
              {userName}
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
          onClick={handleEditClick}
        >
          <ModeEditOutlineOutlinedIcon
            sx={{
              width: "30px",
              height: "30px",
            }}
          />
        </Stack>
      </div>

      {/* Edit Modal */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
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
          <Typography variant="h6">Нэрээ өөрчлөх</Typography>
          <TextField
            value={newName}
            onChange={handleInputChange}
            label="Шинэ нэр"
            fullWidth
            style={{ marginTop: "20px" }}
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
