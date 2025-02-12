import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRouter from "./route/book.route.js";
import cors from "cors";
import userRouter from "./route/user.route.js";

const app = express();
app.use(cors());
dotenv.config();

const port = process.env.PORT || 3000;
// console.log(process.env.PORT);
// console.log(process.env.MONGO_URL);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("MONGO DB connected successfully..");
  } catch (error) {
    console.log(error);
  }
};
app.use(express.json());
connectDB();

//! defining routes
app.use("/book", bookRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
//3;18
