import { Request, Response } from "express";
import { FoodModel } from "../../src/database/models/foodModel";

export const fetchFood = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const food = await FoodModel.findById(id);
    res.status(200).send(food);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Failed to fetch foods" });
  }
};
