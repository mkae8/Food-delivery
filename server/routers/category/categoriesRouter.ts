import { categoryController } from "./../../controllers/foodController/categoryController";
import { fetchCategory } from "./../../controllers/foodController/fetchCategory";
import { editCategory } from "../../controllers/foodController/editCategory";
import { deleteCategoryCon } from "../../controllers/foodController/deleteCategory";
import { Router } from "express";

const categoryRouter = Router();

categoryRouter.route("/category").post(categoryController);
categoryRouter.route("/fetchCategory").get(fetchCategory);
categoryRouter.route("/editCategory/:id").put(editCategory);
categoryRouter.route("/deleteCategory/:id").delete(deleteCategoryCon);

export default categoryRouter;
