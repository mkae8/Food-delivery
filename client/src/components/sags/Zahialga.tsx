import { Box } from "@mui/material";
import { ButtonGlobal } from "../ButtonGlobal";

export const Zahialga = () => {
  return (
    <>
      <Box
        sx={{
          border: "1px none ",
          width: "432px",
          height: "612px",
          paddingY: "18px",
          borderRadius: "16px",
          boxShadow: "0px 0px 20px 0px #0000000D",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingX: "18px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            borderTop: "1px solid #D6D8DB",
            borderBottom: "1px solid #D6D8DB",
            width: "384px",
            justifyContent: "center",
            alignContent: "center",
            padding: "5px",
          }}
        >
          <img style={{ width: "184px", height: "121px" }} src="/hool3.png" />
          <Box sx={{ width: "184px" }}>
            <h3>Main Pizza</h3>
            <h4 style={{ color: "green" }}>34,800$</h4>
            <h5 style={{ color: "#767676" }}>
              Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр{" "}
            </h5>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            paddingX: "19px",
            paddingBottom: "16px",
          }}
        >
          <Box>
            <p>Нийт төлөх дүн</p>
            <p>
              <strong>34,800$</strong>
            </p>
          </Box>
          <ButtonGlobal
            text="Захиалах"
            variant="contained"
            width="187px"
            height="48px"
            background=""
            border=""
            color=""
          />
        </Box>
      </Box>
    </>
  );
};
