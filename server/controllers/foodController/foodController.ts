import { FoodModel } from "../../src/database/models/foodModel"
import env from "dotenv";
env.config();

export const foodController = async (req: any, res: any) => {
  const { foodName,images,price,description} = req.body

  try {

const newFood = await FoodModel.create({
  foodName,
  images,
  price,
  description,
  isAdmin: true,
});

    res.status(201).send({ message: "Food added successfully" });
  } catch (error) {
    res.send({ message: "Menundee hiij chadsanguieeee" });
  }
};
