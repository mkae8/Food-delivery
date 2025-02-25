import { UserModel } from "../../src/database/models/userModel";

export const updateUserData = async (req: any, res: any) => {
  const { userId } = res.locals;
  const { username, phoneNumber, email } = req.body;
  try {
    const userUpdate = await UserModel.findByIdAndUpdate(userId, {
      username,
      phoneNumber,
      email,
    });
    res.send({ message: "Update successfully" }).status(201);
  } catch (error) {
    res.send("boldoggui ee bro").status(400);
  }
};
