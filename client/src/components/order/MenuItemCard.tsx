import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

interface MenuItemCardProps {
  item: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  };
  onClick?: () => void;  // Make onClick optional
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onClick }) => {
  return (
    <Card onClick={onClick}>
      <CardMedia
        component="img"
        height="200"
        image={item.image}
        alt={item.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="h6" color="primary" mt={2}>
          ${item.price.toFixed(2)}
        </Typography>
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default MenuItemCard;
export type { MenuItemCardProps };
