import { OrderModel } from "../../src/database/models/orderModel";
import { Request, Response } from "express";
import env from "dotenv";

env.config();

export const updateController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updatedOrder = await OrderModel.findByIdAndUpdate(id, {
      isPaid: true,
    });
    res.status(201).send({ message: "Order updated successfully" });
  } catch (error) {
    res.send(error);
  }
};
