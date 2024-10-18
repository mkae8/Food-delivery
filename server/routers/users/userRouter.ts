import { Router } from "express";
import { signUpController } from "../../controllers/usersController/signUpController";

const userRouter = Router();

userRouter.route("/user/signup").post(signUpController);

export default userRouter;
