import express from "express";
import cors from "cors";
import { connectDataBase } from "./src/database/config";
import userRouter from "./routers/users/userRouter";

const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());
connectDataBase();

app.use("/", userRouter);

app.listen(port, () => {
  console.log(`nee deer asna --> http://localhost:${port}`);
});
