import express from "express";
import cors from "cors";
import { connectDataBase } from "./src/database/config";
import userRouter from "./routers/users/userRouter";
import foodRouter from "./routers/foods/foodsRouter";
import categoryRouter from "./routers/category/categoriesRouter";
import orderRouter from "./routers/order/orderRouter";

const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());
connectDataBase();

app.use("/", userRouter);
app.use("/", foodRouter);
app.use("/", categoryRouter);
app.use("/", orderRouter);

app.listen(port, () => {
  console.log(`nee deer asna --> http://localhost:${port}`);
});
