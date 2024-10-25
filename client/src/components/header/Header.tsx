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
import { useUser } from "@/provider/UserProvider";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Bag } from "../bagCart/Bag";

interface RouterItem {
  title: string;
  href: string;
}

export const Header: React.FC = () => {
  const { isLoggedIn, loginHandler } = useUser();
  const { push } = useRouter();

  const [clickedButton, setClickedButton] = useState<string | null>(null);

  const routers: RouterItem[] = [
    { title: "НҮҮР", href: "/" },
    { title: "ХООЛНЫ ЦЭС", href: "/footer-info/menu" },
    { title: "ХҮРГЭЛТИЙН БҮС", href: "/footer-info/delivery-area" },
  ];

  const handleUserClick = async () => {
    if (isLoggedIn) {
      push("/userprofile");
      setClickedButton("Хэрэглэгч");
    } else {
      const email = prompt("Please enter your email:");
      const password = prompt("Please enter your password:");

      if (email && password) {
        await loginHandler(email, password);
      } else {
        toast.error("Email and password are required.");
      }
    }
  };

  const handleSagsClick = () => {
    if (isLoggedIn) {
      push("/sags");
      setClickedButton("Sags");
    } else {
      push("/login");
    }
  };

  const handleButtonClick = (title: string) => {
    setClickedButton(title);
  };

  const buttonStyles = {
    my: 2,
    color: "black",
    display: "block",
    fontWeight: 700,
  };

  const [isBagOpen, setIsBagOpen] = useState<boolean>(false);

  const toggleBag = () => {
    setIsBagOpen((prev) => !prev);
    console.log(isBagOpen);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "white",
        boxShadow: "none",
        textSizeAdjust: "inherit",
      }}
    >
      {isBagOpen && <Bag />}
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
                  sx={buttonStyles}
                  style={{
                    color: clickedButton === item.title ? "#18ba51" : "black",
                  }}
                  onClick={() => handleButtonClick(item.title)}
                  aria-label={item.title}
                >
                  {item.title}
                </Button>
              </Link>
            ))}
          </Box>
          <SearchInput />
          <Box sx={{ display: "flex", ml: "24px", alignItems: "center" }}>
            <Sags />

            <Button
              onClick={handleSagsClick}
              sx={buttonStyles}
              aria-label="Cart"
              style={{
                color: clickedButton !== "sags" ? "black" : "#18ba51",
              }}
            >
              Сагс
            </Button>
            <Box sx={{ display: "flex", ml: "24px", alignItems: "center" }}>
              <Newtreh />
              <Button
                onClick={handleUserClick}
                sx={buttonStyles}
                aria-label={isLoggedIn ? "User Profile" : "Login"}
                style={{
                  color: clickedButton !== "Хэрэглэгч" ? "black" : "#18ba51",
                }}
              >
                {isLoggedIn ? "Хэрэглэгч" : "Нэвтрэх"}
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
