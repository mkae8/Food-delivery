"use client";

import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useFoods } from "@/provider/FoodProvider";
import { useRouter } from "next/navigation";
import { FoodItem } from "../components/homepage/HomePageFoods";

export default function FreeSolo() {
  const { foodNames } = useFoods();
  const { push } = useRouter();

  const handleOptionClick = (
    _event: React.SyntheticEvent<Element, Event>,
    value: string | FoodItem | null
  ) => {
    if (value && typeof value !== "string") {
      push(`/search/${value._id}`);
    } else {
      console.log("Selected value is a string or null:", value);
    }
  };

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="food-search"
        freeSolo
        options={foodNames}
        onChange={handleOptionClick}
        getOptionLabel={(option) => {
          if (typeof option === "string") {
            return option;
          }
          return option.foodName;
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Хоол хайх"
            style={{ color: "grey" }}
            label="Хоол хайх"
          />
        )}
      />
    </Stack>
  );
}
