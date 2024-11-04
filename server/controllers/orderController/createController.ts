import { OrderModel } from "../../src/database/models/orderModel";
import { Request, Response } from "express";
import env from "dotenv";

env.config();

export const createController = async (req: Request, res: Response) => {
  const { userId } = res.locals;
  const {
    foodId,
    totalPrice,
    district,
    khoroo,
    apartment,
    moreInformation,
    secondaryNumber,
  } = req.body;

  try {
    const newUser = await OrderModel.create({
      userId,
      foodId,
      totalPrice,
      district,
      khoroo,
      apartment,
      moreInformation,
      secondaryNumber,
    });
    res.status(201).send({ message: "Order created successfully" });
  } catch (error) {
    res.send(error);
  }
};
