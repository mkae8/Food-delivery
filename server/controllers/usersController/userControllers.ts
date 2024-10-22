import { UserModel } from "../../src/database/models/userModel";

export const getUserController = async (req, res) => {
  const userId = req.user.id;
  try {
    const user = await UserModel.findById(userId).select("username email");
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
};
