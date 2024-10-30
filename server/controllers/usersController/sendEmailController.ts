import nodemailer from "nodemailer";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const emailSender: any = async (
  sendEmail: string,
  subject: string,
  html: any,
  text: string
) => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "ntemka93@gmail.com",
      pass: "ozgdvgnhtnjsbxbo",
    },
  });
  const options = {
    from: "ntemka93@gmail.com",
    to: sendEmail,
    subject: subject,
    text: text,
    html: html,
  };
  await transport.sendMail(options);
};

export const sendEmailController = async (req: any, res: any) => {
  try {
    await emailSender(
      "ntemka93@gmail.com",
      "Hello world",
      `<div style="color:red;  font-size: 50px"> Uush yu hiijin </div>`,
      "This is a test email"
    );
    res.send("Successfully sent mail");
  } catch (error) {
    res.status(500).send("Failed to send email");
  }
};
