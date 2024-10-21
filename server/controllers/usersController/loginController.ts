import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "dotenv";

import { UserModel } from "../../src/database/models/userModel";

env.config();

export const loginController = async (req: any, res: any) => {
  const { password, email } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).send("Username or password wrong");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).send("Username or password wrong");
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET as string, {
      expiresIn: "1d",
    });

    res.status(200).send({ message: "Successfully logged in", token });
  } catch (error) {
    console.log(error);
    res.status(500).send("shaal hudlaa bnaa xD");
  }
};
