import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
} from "@mui/material";

export const NemeltMedeelel = () => {
  return (
    <Container>
      Нэмэлт мэдээлэл
      <TextField
        sx={{
          width: "384px",
          border: "1px solid #ECEDF0",
          background: "#ECEDF0",
          borderRadius: "4px",
          paddingX: "16px",
        }}
        id="standard-multiline-static"
        multiline
        rows={4}
        placeholder="Орц, давхар, орцны код ..."
        variant="standard"
        InputProps={{ disableUnderline: true }}
      />
      <Box sx={{ marginTop: "30px" }}>
        Утасны дугаар*
        <TextField
          sx={{
            width: "384px",
            height: "48px",
            border: "1px solid #ECEDF0",
            background: "#ECEDF0",
            borderRadius: "4px",
            paddingX: "16px",
            paddingY: "8px",
          }}
          id="standard-multiline-static"
          multiline
          rows={4}
          placeholder="Утасны дугаараа оруулна уу"
          variant="standard"
          InputProps={{ disableUnderline: true }}
        />
      </Box>
      <br />
      Төлбөр төлөх
      <Box>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Бэлнээр"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Картаар"
        />
      </Box>
    </Container>
  );
};
