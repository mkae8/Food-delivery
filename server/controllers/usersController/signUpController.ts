import { UserModel } from "../../src/database/models/userModel";
import bcrypt from "bcrypt";
import env from "dotenv";
env.config();

export const signUpController = async (req: any, res: any) => {
  const { username, email, address, password, phoneNumber } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 11);

  try {
    const newUser = await UserModel.create({
      username,
      email,
      address,
      password: hashedPassword,
      phoneNumber,
      isAdmin: false,
    });

    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Email already registered" });
  }
};
