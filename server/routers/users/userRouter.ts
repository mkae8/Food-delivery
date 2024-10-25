import { Router } from "express";
import { signUpController } from "../../controllers/usersController/signUpController";
import { loginController } from "../../controllers/usersController/loginController";
<<<<<<< Updated upstream
import { authMiddleware } from "../../middlewares/auth";
import { fetchUser } from "../../controllers/usersController/fetchUser";
=======
>>>>>>> Stashed changes

const userRouter = Router();

userRouter.route("/user/signup").post(signUpController);
userRouter.route("/user/login").post(loginController);
userRouter.route("/user/signup").post(signUpController);
<<<<<<< Updated upstream
userRouter.route("/category").post(categoryController);
userRouter.route("/user/profile").get(authMiddleware, fetchUser);
userRouter.route("/fetchCategory").get(fetchCategory);
=======
>>>>>>> Stashed changes

export default userRouter;
