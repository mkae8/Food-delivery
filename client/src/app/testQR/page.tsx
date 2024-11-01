"use client";
import axios from "axios";
import React, { useState } from "react";

const page = () => {
  const [base, setBase] = useState();
  const handleClick = async () => {
    const res: any = await axios.post(
      "https://qpaymock.onrender.com/generate-qr",
      {
        url: "http://202.131.224.4/updateOrder/67245590e331417287422ec6",
      }
    );
    setBase(res.data);
  };

  return (
    <div>
      <button onClick={handleClick}>Click to generate QR</button>
      <img src={base} alt="" />
    </div>
  );
};

export default page;
