"use client";
import { Box, Container, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { NemeltMedeelel } from "./NemeltMedeelel";

const names = [
  "suhbaatar duureg",
  "Bayngol duureg",
  "songino duureg",
  "chingeltei duureg",
];
export const SagsSelect = () => {
  const [district, setDistrict] = useState("");
  console.log(district);

  const duureg = [
    "Хан-Уул дүүрэг",
    "Баянгол дүүрэг",
    "Сонгинохайрхан дүүрэг",
    "Чингэлтэй дүүрэг",
  ];

  return (
    <>
      <Container>
        <Typography sx={{ paddingX: "14px" }}>Хаяг аа оруулна уу</Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            fullWidth
            label="Дүүрэг сонгоно уу"
            variant="outlined"
            margin="normal"
            select
            sx={{
              backgroundColor: "#F4F4F4",
              width: "384px",
            }}
            onChange={(e) => {
              setDistrict(e.target.value);
            }}
          >
            {duureg.map((name) => (
              <MenuItem
                key={name}
                value={name}
                sx={{
                  backgroundColor: name === district ? "green" : "inherit",
                }}
              >
                {name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="Хороо сонгоно уу"
            variant="outlined"
            margin="normal"
            select
            sx={{
              backgroundColor: "#F4F4F4",
              width: "384px",
            }}
          >
            <MenuItem value="Main">7-р хороо</MenuItem>
            <MenuItem value="Side">8-р хороо</MenuItem>
            <MenuItem value="DMain course">9-р хороо</MenuItem>
            <MenuItem value="Dessert">10-р хороо</MenuItem>
            <MenuItem value="Dessert">11-р хороо</MenuItem>
            <MenuItem value="Dessert">12-р хороо</MenuItem>
          </TextField>
          <TextField
            fullWidth
            label="Байр, гудамж сонгоно уу"
            variant="outlined"
            margin="normal"
            select
            sx={{
              backgroundColor: "#F4F4F4",
              width: "384px",
            }}
          >
            <MenuItem value="Main">Нархан хотхон</MenuItem>
            <MenuItem value="Side">26-р байр</MenuItem>
            <MenuItem value="DMain course">Хоймор хотхон</MenuItem>
            <MenuItem value="Dessert">45-р байр</MenuItem>
            <MenuItem value="Dessert">Зайсан хотхон </MenuItem>
          </TextField>
          <br />
          <NemeltMedeelel />
        </Box>
      </Container>
    </>
  );
};
