import { Router } from "express";
import { signUpController } from "../../controllers/usersController/signUpController";
import { loginController } from "../../controllers/usersController/loginController";
import { updateUserData } from "../../controllers/usersController/updateUserData";
import { authMiddleware } from "../../middlewares/auth";
import { fetchUser } from "../../controllers/usersController/fetchUser";

import { sendEmailController } from "../../controllers/usersController/forgotPassword/userSendEmail";
import { checkOtp } from "../../controllers/usersController/forgotPassword/userOtpCheck";
import { passwordUpdate } from "../../controllers/usersController/forgotPassword/passwordUpdate";

const userRouter = Router();

userRouter.route("/user/signup").post(signUpController);
userRouter.route("/user/login").post(loginController);
userRouter.route("/user/profile").get(authMiddleware, fetchUser);
userRouter.route("/user/updateProfile").post(authMiddleware, updateUserData);

// ---->> Forget password routers
userRouter.route("/check").post(checkOtp);
userRouter.route("/sendMailer").post(sendEmailController);
userRouter.route("/passwordUpdate").put(passwordUpdate);

export default userRouter;
