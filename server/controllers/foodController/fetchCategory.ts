import { CategoryModel } from "./../../src/database/models/admin";

export const fetchCategory = async (req: any, res: any): Promise<void> => {
  try {
    const categorys = await CategoryModel.find();
    res.status(200).json(categorys);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categorys" });
  }
};
