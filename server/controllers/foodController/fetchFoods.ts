import { FoodModel } from "../../src/database/models/foodModel";

export const fetchFoods = async (req: any, res: any): Promise<void> => {
  try {
    const foods = await FoodModel.find();

    res.status(200).send(foods);
  } catch (error) {
    res.status(500).send({ message: "Failed to fetch foods" });
  }
};
