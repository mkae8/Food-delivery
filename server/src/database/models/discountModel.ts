import { Model, Schema, models, model } from "mongoose";

export type DiscountModelType = {
  _id: Schema.Types.ObjectId;
  percent: number;
  foodId: string;
  createdAt: Date;
  updatedAt: Date;
};

const DiscountSchema = new Schema<DiscountModelType>({
  percent: { type: Number, required: false },
  foodId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true, immutable: true },
  updatedAt: { type: Date, default: Date.now, required: true },
});

export const UserModel: Model<DiscountModelType> =
  models["Discount"] || model<DiscountModelType>("Discount", DiscountSchema);
