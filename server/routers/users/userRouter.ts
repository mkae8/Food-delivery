import { fetchCategory } from "./../../controllers/foodController/fetchCategory";
import { categoryController } from "./../../controllers/foodController/categoryController";
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
userRouter.route("/category").post(categoryController);
userRouter.route("/fetchCategory").get(fetchCategory);
userRouter.route("/food").get(fetchFoods);

export default userRouter;
