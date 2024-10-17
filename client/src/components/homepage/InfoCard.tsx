"use client";
import React from "react";

type InfoCard = {
  Icon: () => JSX.Element;
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
        maxWidth: "264.75px",
        height: "155px",
        padding: "16px",
      }}
    >
      <div style={{ color: "green", width: "60px", height: "60px" }}>
        <Icon />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
        <div style={{ fontSize: "16px", fontWeight: "bold" }}>{text_main}</div>
        <div style={{ fontSize: "12px" }}>{text_description}</div>
      </div>
    </div>
  );
};
