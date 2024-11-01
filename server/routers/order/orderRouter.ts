import { Router } from "express";
import { createController } from "../../controllers/orderController/createController";
import { updateController } from "../../controllers/orderController/updateOrder";
import { authMiddleware } from "../../middlewares/auth";

const orderRouter = Router();

orderRouter.route("/createOrder").post(authMiddleware, createController);
orderRouter.route("/updateOrder/:id").get(updateController);

export default orderRouter;
