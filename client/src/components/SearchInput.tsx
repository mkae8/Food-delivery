"use client"
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useFoods } from '@/provider/FoodProvider';


export default function FreeSolo() {

  const {foodNames}=useFoods()

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="food-search"
        freeSolo
        options={foodNames.map((option) => option.foodName)}
        renderInput={(params) => <TextField {...params} placeholder='Хоол хайх' style={{color:"grey"}} label="Хоол хайх" />}
      /> 
    </Stack>
  );
}