"use client";
import React from "react";

type InfoCard = {
  Icon: JSX.Element;
  text_main: string;
  text_description: string;
};

export const InfoCard = ({ Icon, text_main, text_description }: InfoCard) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        flexDirection: "column",
        borderStyle: "groove",
        borderRadius: "10px",
        borderWidth: "0.5px",
        borderColor: "lightgrey",
        width: "264.75px",
        height: "155px",
        padding: "16px",
        boxShadow: "4px 4px 12px #D6D8DB ",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          display: "flex",
          color: "green",
          width: "60px",
          height: "60px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Icon}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
        <div style={{ fontSize: "18px", fontWeight: "bold" }}>{text_main}</div>
        <div style={{ fontSize: "14px" }}>{text_description}</div>
      </div>
    </div>
  );
};
