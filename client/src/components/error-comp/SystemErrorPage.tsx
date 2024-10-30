"use client";
import React from "react";

export const SystemErrorPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        marginTop: "303px",
      }}
    >
      <div
        style={{
          width: "384px",
          height: "176px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <img src="error.png" alt="" />
        <p>Уучлаарай, систем ачааллахад алдаа гарлаа.</p>
      </div>
    </div>
  );
};
