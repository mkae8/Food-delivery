import { FoodModel } from "../../src/database/models/foodModel";

export const fetchFoods = async (req: any, res: any): Promise<void> => {
  try {
    const foods = await FoodModel.find().populate("foodCategory");
    console.log(foods);

    res.status(200).send(foods);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Failed to fetch foods" });
  }
};
