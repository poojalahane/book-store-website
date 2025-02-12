import express from "express";
import {
  getAllUser,
  loginUser,
  registerUser,
} from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/getAll", getAllUser);

export default userRouter;
