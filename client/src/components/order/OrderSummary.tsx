import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

interface OrderSummaryProps {
  subtotal: number;
  tax: number;
  deliveryFee: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ subtotal, tax, deliveryFee }) => {
  const total = subtotal + tax + deliveryFee;

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography>Subtotal:</Typography>
        <Typography>${subtotal.toFixed(2)}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography>Tax:</Typography>
        <Typography>${tax.toFixed(2)}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography>Delivery Fee:</Typography>
        <Typography>${deliveryFee.toFixed(2)}</Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6">Total:</Typography>
        <Typography variant="h6">${total.toFixed(2)}</Typography>
      </Box>
    </Box>
  );
};

export default OrderSummary;