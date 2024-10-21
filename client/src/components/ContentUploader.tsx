"use client";

import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export default function ContentUploader() {
  const cloud_name = "djxo5odaa";
  const preset_name = "temuujin";
  const url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

  const [image, setImage] = useState("");

  const HandleImageUpload = async (event: any) => {
    //body boldeh
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_name);
    console.log(file);

    // api huselt
    try {
      const response: any = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      setImage(response.data.secure_url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex flex-col gap-5">
        <>
          <Image width={500} height={500} alt="image" src={image} />
          <label htmlFor="picture">Picture</label>
          <input onChange={HandleImageUpload} id="picture" type="file" />
        </>
      </div>
    </div>
  );
}
