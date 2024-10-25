import express from "express";
import cors from "cors";
import { connectDataBase } from "./src/database/config";
import userRouter from "./routers/users/userRouter";
import foodRouter from "./routers/foods/foodsRouter";
import categoryRouter from "./routers/category/categoriesRouter";

const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());
connectDataBase();

app.use("/", userRouter);
app.use("/", foodRouter);
app.use("/", categoryRouter);

app.listen(port, () => {
  console.log(`nee deer asna --> http://localhost:${port}`);
});

// import { Transport } from "./node_modules/@types/nodemailer/index.d";
// import express from "express";
// import cors from "cors";
// // import { connectDataBase } from "./src/database/config";
// // import userRouter from "./routers/users/userRouter";
// import nodemailer from "nodemailer";
// import { text } from "stream/consumers";

// const port = process.env.PORT;
// const app = express();
// app.use(express.json());
// app.use(cors());
// // connectDataBase();

// const emailSender = async (
//   sendEmail: string,
//   subject: string,
//   text: string,
//   html: any
// ) => {
//   const transport = nodemailer.createTransport({
//     service: "gmail",
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "Bilguun040728@gmail.com",
//       pass: "gsuechtzylefvukc",
//     },
//   });
//   const options = {
//     from: "Bilguun040728@gmail.com",
//     to: sendEmail,
//     subject: subject,
//     // text: text,
//     html: html,
//   };
//   await transport.sendMail(options);
// };

// app.get("/", async (req, res) => {
//   await emailSender(
//     "Bilguun040728@gmail.com",
//     "Hi",
//     "ajilj bnu",

//     `<div style="color: red">ajillaj bnu </div>`
//   );
//   res.send("successfully");
// });

// // app.use("/", userRouter);

// app.listen(8000, () => {
//   console.log(`nee deer asna --> http://localhost:8000`);
// });

// import express from "express";
// import cors from "cors";
// import nodemailer from "nodemailer";

// const app = express();
// const port = process.env.PORT || 8000;

// app.use(express.json());
// app.use(cors());

// const emailSender = async (sendEmail: string, subject: string, html: any) => {
//   const transport = nodemailer.createTransport({
//     service: "gmail",
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "Bilguun040728@gmail.com",
//       pass: "gsuechtzylefvukc",
//     },
//   });

//   const options = {
//     from: "Bilguun040728@gmail.com",
//     to: sendEmail,
//     subject: subject,
//     html: html,
//   };

//   await transport.sendMail(options);
// };

// app.get("/", async (req, res) => {
//   try {
//     await emailSender(
//       "Bilguun040728@gmail.com",
//       "Hi",
//       `<div style="color: red">Hello!</div>`
//     );
//     res.send("Email sent successfully.");
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).send("Error sending email.");
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
