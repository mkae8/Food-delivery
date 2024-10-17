import express from "express";
import cors from "cors";
import { connectDataBase } from "./database/config";
import { UserModel } from "./database/models/userModel";

const app = express();
app.use(express.json());
app.use(cors());
connectDataBase();

// ---> User data create hiilee

app.get("/", async (req, res) => {
  await UserModel.create({
    firstname: "5",
    lastname: "5",
    email: "5@gmail.com",
  });
  res.send("success");
});

// ---> Id gaar n user ee olloo
// app.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   const foundUser = await UserModel.findById({ _id: id });

//   res.send(foundUser);
// });

// ---> Buh user iig harlaa
// app.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   const foundUser = await UserModel.find({ _id: id });
//   res.send(foundUser);
// });

// ---> User id gaar n Update hiilee
// app.put("/", async (req, res) => {
//   await UserModel.findByIdAndUpdate(
//     { _id: "670c954383cf9ae062757360" },
//     {
//       email: "tsovoo@gmail.com",
//       lastname: "tsovo",
//       firstname: "tso",
//     }
//   );
//   res.send("amjilttai soligdloo");
// });

// ---> Id gaar n useriig delete hiile
// app.delete("/", async (req, res) => {
//   await UserModel.findByIdAndDelete({
//     _id: "670c9552d6a6fb83980dfff0",
//   });
//   res.send("Succsessfully deleted ");
// });

app.listen(8000, () => {
  console.log("nee deer asna --> http://localhost:8000");
});
