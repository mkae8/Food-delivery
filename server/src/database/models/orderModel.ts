import { Model, Schema, models, model, Types } from "mongoose";

type process = "Process" | "Delivered" | "Waiting" | "Active ";

export type OrdersModelType = {
  _id: Schema.Types.ObjectId;
  userId: Types.ObjectId; // Object Id ? String ?
  foodId: Types.ObjectId[];
  totalPrice: string;
  process: process;
  createdDate: Date;
  district: string;
  khoroo: string;
  apartment: string;
  moreInformation: string;
  secondaryNumber: string;
  isPaid: boolean;
};
const OrderSchema = new Schema<OrdersModelType>({
  userId: { type: Schema.Types.ObjectId, required: true, ref: "Users" },
  foodId: { type: [Schema.Types.ObjectId], required: true, ref: "Foods" },
  totalPrice: { type: String, required: true },
  process: {
    type: String,
    required: true,
    enum: ["Process", "Delivered", "Waiting", "Active"],
  },
  createdDate: {
    type: Date,
    default: Date.now,
    required: true,
    immutable: true,
  },
  district: { type: String, required: true },
  khoroo: { type: String, required: true },
  apartment: { type: String, required: true },
  moreInformation: { type: String },
  secondaryNumber: { type: String, required: true },
  isPaid: { type: Boolean, required: true },
});

export const OrderModel: Model<OrdersModelType> =
  models["Orders"] || model<OrdersModelType>("Orders", OrderSchema);
