"use client";

import React from "react";
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
import { useUser } from "@/provider/UserProvider";
import { useRouter } from "next/navigation";

export const Header = () => {
  const { isLoggedIn, logOut, loginHandler } = useUser();
  const { push } = useRouter();
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

  const handleUserClick = () => {
    if (isLoggedIn) {
      push("/userprofile");
    } else {
      loginHandler();
    }
  };

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
                <Button sx={{ my: 2, color: "Black", display: "block" }}>
                  {item.title}
                </Button>
              </Link>
            ))}
          </Box>
          <SearchInput />
          <Box sx={{ display: "flex", ml: "24px", alignItems: "center" }}>
            <Sags />
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button sx={{ my: 2, color: "Black", display: "block" }}>
                Сагс
              </Button>
            </Box>
            <Box style={{ textDecoration: "none" }}>
              <Box sx={{ display: "flex", ml: "24px", alignItems: "center" }}>
                <Newtreh />
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  <Button
                    onClick={handleUserClick}
                    sx={{ my: 2, color: "Black", display: "block" }}
                  >
                    {isLoggedIn ? "Хэрэглэгч" : "Нэвтрэх"}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
