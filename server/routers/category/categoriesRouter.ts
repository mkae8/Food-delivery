import { categoryController } from "../../controllers/categoryController/categoryController";
import { fetchCategory } from "../../controllers/categoryController/fetchCategory";
import { editCategory } from "../../controllers/categoryController/editCategory";
import { deleteCategory } from "../../controllers/categoryController/deleteCategory";
import { Router } from "express";

const categoryRouter = Router();

categoryRouter.route("/category").post(categoryController);
categoryRouter.route("/fetchCategory").get(fetchCategory);
categoryRouter.route("/editCategory/:id").put(editCategory);
categoryRouter.route("/deleteCategory/:id").delete(deleteCategory);

export default categoryRouter;
