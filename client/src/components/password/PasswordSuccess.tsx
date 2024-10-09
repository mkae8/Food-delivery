"use client";
import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { ButtonGlobal } from "../ButtonGlobal";

const PasswordSuccess: React.FC = () => {
  return (
    <>
      <div style={{}}>
        <Stack sx={{ width: "100%" }} spacing={20}>
          <Alert variant="outlined" severity="success">
            Таны нууц үг амжилттай шинэчлэгдсэн байна.
          </Alert>
          <ButtonGlobal
            text="Нүүр хуудас руу шилжих"
            width="384px"
            height="56px"
          />
        </Stack>
      </div>
    </>
  );
};

export default PasswordSuccess;
