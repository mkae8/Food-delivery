"use client";

import React from "react";
import axios from "axios";

const cloud_name = "djxo5odaa";
const present_name = "cloudtest";

const url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

interface ImageUploadProps {
  onUpload: (url: string) => void;
  onError: (error: string) => void;
}

const ContentUploader: React.FC<ImageUploadProps> = ({ onUpload, onError }) => {
  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", present_name);

      // API хүсэлт
      try {
        const response = await axios.post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response.data);
        onUpload(response.data.secure_url); // компонент руу URL-г дамжуулна
      } catch (error) {
        console.error("Upload failed:", error);
        onError("Upload failed. Please try again."); // Алдааны мэдэгдэл
      }
    }
  };

  return <input type="file" onChange={handleImageUpload} />;
};

export default ContentUploader;
