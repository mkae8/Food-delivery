import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from '@mui/material';
import MenuItemCard from './MenuItemCard';

interface OrderDetailModalProps {
  open: boolean;
  onClose: () => void;
  item: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  };
}

const OrderDetailModal: React.FC<OrderDetailModalProps> = ({ open, onClose, item }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{item.name}</DialogTitle>
      <DialogContent>
        <Box display="flex">
          <Box flexGrow={1}>
            <MenuItemCard item={item} onClick={() => {}} />
          </Box>
          <Box ml={2} width="200px">
            <Typography variant="h6">Order Summary</Typography>
            {/* Add order summary details here */}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button onClick={onClose} color="primary" variant="contained">
          Add to Cart
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderDetailModal;
