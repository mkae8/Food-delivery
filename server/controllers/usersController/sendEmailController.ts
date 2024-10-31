import nodemailer from "nodemailer";
import express, { Request, Response } from "express";
import cors from "cors";
import { OtpModel } from "../../src/database/models/otp.model";

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
export const sendEmailController = async (req: Request, res: Response) => {
  const { email } = req.body;
  const OTP = Math.floor(1000 + Math.random() * 9000);

  await OtpModel.create({ email, otpCode: OTP });

  try {
    await emailSender(
      email,
      "Your Otp To Reset Password",
      `<div style="color:red;  font-size: 50px"> ${OTP} </div>`,
      "One Time Password"
    );

    res.send("Successfully sent mail");
  } catch (error) {
    res.status(500).send("Failed to send email");
  }
};
