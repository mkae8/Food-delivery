import { Model, Schema, models, model, ObjectId, Types } from "mongoose";

export type CategoryModelType = {
  _id: Types.ObjectId;
  categoryName: string;
  foodId: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
};

const CategorySchema = new Schema<CategoryModelType>({
  categoryName: { type: String, required: false },
  foodId: { type: [Types.ObjectId], required: true },
  createdAt: { type: Date, default: Date.now, required: true, immutable: true },
  updatedAt: { type: Date, default: Date.now, required: true },
});

export const CategoryModel: Model<CategoryModelType> =
  models["Category"] || model<CategoryModelType>("Category", CategorySchema);
