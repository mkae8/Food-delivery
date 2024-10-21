import { Router } from "express";
import { signUpController } from "../../controllers/usersController/signUpController";
import { foodController } from "../../controllers/foodController/foodController"

const userRouter = Router();

userRouter.route("/user/signup").post(signUpController);
userRouter.route("/admin/category").post(foodController)

export default userRouter;
