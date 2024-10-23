import { FoodModel } from "../../src/database/models/foodModel";
import env from "dotenv";
env.config();

export const foodController = async (req: any, res: any) => {
  const { foodName, foodCategory, foodIngredients, images, price } = req.body;

  if (!foodName || !images || !price || !foodIngredients) {
    return res.status(400).send({ message: "All fields are required" });
  }

  try {
    const newFood = await FoodModel.create({
      foodName,
      foodCategory,
      foodIngredients,
      images,
      price,
    });
    res.status(201).send({ message: "Food created successfully", newFood });
  } catch (error) {
    res.status(500).send({ message: "Failed to create food" });
  }
};
