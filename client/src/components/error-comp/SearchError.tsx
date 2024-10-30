"use client";
import React from "react";

export const SearchError = () => {
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
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          textAlign: "center",
          width: "208px",
          height: "200px",
        }}
      >
        <div style={{ margin: "auto" }}>
          <img
            style={{
              width: "133px",
              height: "133px",
            }}
            src="searchError.png"
            alt=""
          />
        </div>

        <p style={{ color: "#8B8E95", fontSize: "14px" }}>
          Уучлаарай илэрц олдсонгүй...
        </p>
      </div>
    </div>
  );
};
