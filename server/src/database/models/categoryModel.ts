import { Model, Schema, models, model, Types } from "mongoose";

export type CategoryModelType = {
  _id: Types.ObjectId;
  categoryName?: string;
  foodId: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
};

const CategorySchema = new Schema<CategoryModelType>(
  {
    categoryName: { type: String, unique: true, sparse: true },
    foodId: { type: [Types.ObjectId], required: true, ref: "Food" },
    createdAt: {
      type: Date,
      default: Date.now,
      required: true,
      immutable: true,
    },
    updatedAt: { type: Date, default: Date.now, required: true },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

export const CategoryModel: Model<CategoryModelType> =
  models["Category"] || model<CategoryModelType>("Category", CategorySchema);
