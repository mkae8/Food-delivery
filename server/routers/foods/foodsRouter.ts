import { Router } from "express";
import { foodController } from "../../controllers/foodController/foodController";
import { fetchFoods } from "../../controllers/foodController/fetchFoods";

const foodRouter = Router();

foodRouter.route("/food-create").post(foodController);
foodRouter.route("/foods-get").get(fetchFoods);

export default foodRouter;
