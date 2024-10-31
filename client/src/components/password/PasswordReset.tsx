// "use client";

// import { Typography } from "@mui/material";
// import { InputPassword } from "../InputPassword";
// import { ButtonGlobal } from "../ButtonGlobal";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import Loading from "./Loading";
// import axios from "axios";

// interface PasswordProps {
//   clickHandler: () => void;

// }

// export const PasswordReset: React.FC<PasswordProps> = ({ clickHandler }) => {
//   const [otpCode, setOtpCode] = useState("");
//   const [loading, setLoading] = useState(false);

//   const otpHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setOtpCode(event.target.value);
//     console.log(event.target.value);
//   };

//   const nextStep = async () => {
//     setLoading(true);
//     try {
//       await axios.post(`${process.env.BACKEND_URL}/check`, { otpCode });
//       toast.success("Successfully");
//       clickHandler();
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };

//   if (loading) {
//     return <Loading />;
//   }

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         textAlign: "center",
//         width: "448px",
//         height: "386px",
//         marginTop: "200px",
//       }}
//     >
//       <Typography
//         sx={{
//           fontSize: "28px",
//           fontWeight: "700",
//           width: "384px",
//           height: "48px",
//         }}
//       >
//         Нууц үг сэргээх
//       </Typography>
//       <Typography
//         sx={{
//           fontSize: "16px",
//           fontWeight: "500",
//           width: "384px",
//           textAlign: "left",
//           marginTop: "48px",
//         }}
//       >
//         Таны <span style={{ color: "green" }}>example@pinecone.mn</span> хаяг
//         руу сэргээх код <br /> илгээх болно.
//       </Typography>
//       <div style={{ marginTop: "32px" }}>
//         <InputPassword
//           text="4 оронтой кодыг оруулна уу"
//           label="Нууц үг сэргээх код"
//           name="otpCode"
//           onChange={otpHandler}
//         />
//         <ButtonGlobal
//           text="Үргэлжлүүлэх"
//           width="384px"
//           height="56px"
//           clickhandler={nextStep}
//         />
//       </div>
//     </div>
//   );
// };

"use client";

import { Box, Typography } from "@mui/material";
import { InputPassword } from "../InputPassword";
import { ButtonGlobal } from "../ButtonGlobal";
import { useState } from "react";
import { toast } from "react-toastify";
import Loading from "./Loading";
import axios from "axios";

interface PasswordResetProps {
  email: string;
  clickHandler: () => void;
}

export const PasswordReset: React.FC<PasswordResetProps> = ({
  email,
  clickHandler,
}) => {
  const [otpCode, setOtpCode] = useState("");
  const [loading, setLoading] = useState(false);

  const otpHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtpCode(event.target.value);
  };

  const nextStep = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.BACKEND_URL}/check`, {
        otpCode,
        email,
      });

      if (response.status === 200) {
        toast.success("Successfully verified");
        clickHandler();
      }
    } catch (error) {
      console.log(error);
      toast.error("Verification failed");
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
        width: "448px",
        height: "386px",
        marginTop: "200px",
      }}
    >
      <Typography
        sx={{
          fontSize: "28px",
          fontWeight: "700",
          width: "384px",
          height: "48px",
        }}
      >
        Нууц үг сэргээх
      </Typography>
      <Box
        sx={{
          width: "384px",
          height: "145px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            width: "384px",
            textAlign: "left",

            gap: "32px",
            color: "#695C08",
          }}
        >
          Таны{" "}
          <span style={{ color: "green" }}>{email} pinecone@example.com </span>
          хаяг руу сэргээх код илгээх болно.
        </Typography>
        <InputPassword
          text="4 оронтой кодыг оруулна уу"
          label="Нууц үг сэргээх код"
          name="otpCode"
          onChange={otpHandler}
        />
      </Box>

      <ButtonGlobal
        text="Үргэлжлүүлэх"
        width="384px"
        height="56px"
        clickhandler={nextStep}
      />
    </div>
  );
};
