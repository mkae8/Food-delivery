"use client";
import React, { useState } from "react";
import { Container, Grid, AppBar, Tabs, Tab, Box } from "@mui/material";
import { styled } from "@mui/system";
import { Header } from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import MenuItemCard from "@/components/order/MenuItemCard";
import OrderDetailModal from "@/components/order/OrderDetailModal";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const StyledTab = styled(Tab)(({ theme }) => ({
  "&.Mui-selected": {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
  },
}));

const MenuPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  // Mock data - replace with actual data from your API
  const menuItems = [
    {
      id: 1,
      name: "Breakfast salad",
      price: 12.99,
      image: "/path-to-image.jpg",
      description: "A healthy start to your day",
    },
    {
      id: 2,
      name: "Smoothie",
      price: 8.99,
      image: "/path-to-image.jpg",
      description: "Refreshing fruit blend",
    },
    // Add more items...
  ];

  return (
    <>
      <Container maxWidth="lg">
        <AppBar position="static" color="default">
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <StyledTab label="Breakfast" />
            <StyledTab label="Soup" />
            <StyledTab label="Main Course" />
            <StyledTab label="Dessert" />
          </Tabs>
        </AppBar>
        <Box mt={3}>
          <Grid container spacing={3}>
            {menuItems.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.id}>
                <MenuItemCard
                  item={item}
                  onClick={() => {
                    setSelectedItem(item);
                    setModalOpen(true);
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      {selectedItem && (
        <OrderDetailModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          item={selectedItem}
        />
      )}
    </>
  );
};

export default MenuPage;
