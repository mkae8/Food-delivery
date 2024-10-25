import { UserModel } from "../../src/database/models/userModel";
import bcrypt from "bcrypt";
import env from "dotenv";
env.config();

export const signUpController = async (req: any, res: any) => {
  const { username, email, address, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 11);

  try {
    const newUser = await UserModel.create({
      username,
      email,
      address,
      password: hashedPassword,
      isAdmin: true,
    });
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res.send({ message: "Email already registered" });
  }
};
