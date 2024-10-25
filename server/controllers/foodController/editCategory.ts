import { Request, Response } from "express";
import { CategoryModel } from "../../src/database/models/admin";

export const editCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { categoryName } = req.body;

  try {
    const updatedCategory = await CategoryModel.findByIdAndUpdate(
      id,
      { categoryName },
      { new: true }
    );
    console.log(id, "UPT");

    if (!updatedCategory) {
      res.status(404).json({ message: "Category not found." });
      return;
    }

    res.status(200).json(updatedCategory);
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({ message: "Failed to update category." });
  }
};
