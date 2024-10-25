import { fetchCategory } from "./../../controllers/foodController/fetchCategory";
import { categoryController } from "./../../controllers/foodController/categoryController";
import { Router } from "express";
import { signUpController } from "../../controllers/usersController/signUpController";
import { loginController } from "../../controllers/usersController/loginController";
import { authMiddleware } from "../../middlewares/auth";
import { fetchUser } from "../../controllers/usersController/fetchUser";

const userRouter = Router();

userRouter.route("/user/signup").post(signUpController);
userRouter.route("/user/login").post(loginController);
userRouter.route("/user/signup").post(signUpController);
userRouter.route("/category").post(categoryController);
userRouter.route("/user/profile").get(authMiddleware, fetchUser);
userRouter.route("/fetchCategory").get(fetchCategory);

export default userRouter;
