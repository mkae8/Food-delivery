import { Router } from "express";
import { foodController } from "../../controllers/foodController/foodController";
import { fetchFoods } from "../../controllers/foodController/fetchFoods";
import { fetchFood } from "../../controllers/foodController/fetchFood";

const foodRouter = Router();

foodRouter.route("/food-create").post(foodController);
foodRouter.route("/foods-get").get(fetchFoods);
foodRouter.route("/food-get/:id").get(fetchFood);

export default foodRouter;
