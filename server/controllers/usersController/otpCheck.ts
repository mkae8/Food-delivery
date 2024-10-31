import { Request, Response } from "express";
import { OtpModel } from "../../src/database/models/otp.model";
import { UserModel } from "../../src/database/models/userModel";

export const checkOtp = async (req: Request, res: Response) => {
  const { otpCode, email } = req.body;

  // const user = await UserModel.findOne({ email });
  // if (!user) {
  //   res.status(401).send("User not found");
  // }
  // console.log(user);

  const findOtp = await OtpModel.findOne({ email: email });
  console.log(email);

  console.log(findOtp);

  if (!findOtp) {
    res.status(404).send("Email not found");
    return;
  }
  if (findOtp?.otpCode === otpCode) {
    res.status(200).send("Success");
    return;
  }
};
