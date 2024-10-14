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

const pages = ["НҮҮР", "ХООЛНЫ ЦЭС", "ХҮРГЭЛТИЙН БҮС"];
const head = ["Сагс"];
const heed = ["Нэвтрэх"];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static" sx={{ bgcolor: "white", boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PineconeLogo />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "Black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <SearchInput />
          <Box sx={{ display: "flex", ml: "24px", alignItems: "center" }}>
            <Sags />
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {head.map((item) => (
                <Button
                  key={item}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "Black", display: "block" }}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Newtreh />
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {heed.map((item) => (
                  <Button
                    key={item}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "Black", display: "block" }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
