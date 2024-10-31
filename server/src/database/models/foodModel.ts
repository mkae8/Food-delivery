import { Model, Schema, models, model } from "mongoose";

export type FoodsModelType = {
  _id: Schema.Types.ObjectId;
  foodName: string;
  foodCategory: Schema.Types.ObjectId;
  foodIngredients: string;
  images: string[];
  price: string;
  discount: Boolean;
};

const FoodSchema = new Schema<FoodsModelType>({
  foodName: { type: String, required: true },
  foodCategory: { type: Schema.ObjectId, required: true, ref: "Category" },
  foodIngredients: { type: String, required: true },
  price: { type: String, required: true },
  images: { type: [String], required: true, unique: true },
  discount: { type: Boolean, required: false },
});

export const FoodModel: Model<FoodsModelType> =
  models["Foods"] || model<FoodsModelType>("Foods", FoodSchema);
