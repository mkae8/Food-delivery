"use client";

import React, { useState } from "react";
import { PineconeLogo } from "../icon/Pinelog";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { SearchInput } from "../SearchInput";
import { Sags } from "../icon/Sags";
import { Newtreh } from "../icon/Newtreh";
import Link from "next/link";

const pages = ["НҮҮР", "ХООЛНЫ ЦЭС", "ХҮРГЭЛТИЙН БҮС"];
const head = ["Сагс"];
const heed = ["Нэвтрэх"];
const heed1 = ["hereglegch"];

export const Header = () => {
  const routers = [
    {
      title: "НҮҮР",
      href: "/",
    },
    {
      title: "ХООЛНЫ ЦЭС",
      href: "/footer-info/menu",
    },
    {
      title: "ХҮРГЭЛТИЙН БҮС",
      href: "/footer-info/delivery-area",
    },
  ];

  return (
    <AppBar position="static" sx={{ bgcolor: "white", boxShadow: "none" }}>
      <Container sx={{ width: "1248px" }}>
        <Toolbar disableGutters>
          <PineconeLogo />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {routers.map((item) => (
              <Link
                href={item.href}
                key={item.title}
                style={{ textDecoration: "none" }}
              >
                <Button
                  // onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "Black", display: "block" }}
                >
                  {item.title}
                </Button>
              </Link>
            ))}
          </Box>
          <SearchInput />
          <Box sx={{ display: "flex", ml: "24px", alignItems: "center" }}>
            <Sags />
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {head.map((item) => (
                <Button
                  key={item}
                  //   onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "Black", display: "block" }}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <Link href={"/login"} style={{ textDecoration: "none" }}>
              <Box sx={{ display: "flex", ml: "24px", alignItems: "center" }}>
                <Newtreh />
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {heed.map((item) => (
                    <Button
                      key={item}
                      // onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "Black", display: "block" }}
                    >
                      {item}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
