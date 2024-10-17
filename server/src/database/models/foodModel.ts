import { Model, Schema, models, model } from "mongoose";

export type FoodsModelType = {
  _id: Schema.Types.ObjectId;
  foodName: string;
  images: string[];
  price: string;
  description: string;
};

const FoodSchema = new Schema<FoodsModelType>({
  foodName: { type: String, required: false },
  images: { type: [String], required: true, unique: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
});

export const FoodModel: Model<FoodsModelType> =
  models["Foods"] || model<FoodsModelType>("Foods", FoodSchema);
