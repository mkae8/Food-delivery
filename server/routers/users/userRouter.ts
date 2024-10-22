import { Router } from "express";
import { signUpController } from "../../controllers/usersController/signUpController";
import { loginController } from "../../controllers/usersController/loginController";
import { foodController } from "../../controllers/foodController/foodController";
import { fetchFoods } from "../../controllers/foodController/fetchFoods";

const userRouter = Router();

userRouter.route("/user/signup").post(signUpController);
userRouter.route("/user/login").post(loginController);
userRouter.route("/user/signup").post(signUpController);
userRouter.route("/admin/category").post(foodController);
userRouter.route("/food").get(fetchFoods);

export default userRouter;
