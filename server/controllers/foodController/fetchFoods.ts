// controllers/foodController/fetchFoods.ts
import { Request, Response } from "express";
import { FoodModel } from "../../src/database/models/foodModel";

export const fetchFoods = async (req: any, res: any): Promise<void> => {
  try {
    const foods = await FoodModel.find();

    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch foods" });
  }
};
