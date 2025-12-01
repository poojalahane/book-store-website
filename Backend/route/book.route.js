import express from "express";
import {
  createBook,
  deleteSingleBook,
  getAllBooks,
  getFreeBooks,
  getSingleBook,
  updateSingleBook,
} from "../controller/book.controller.js";

const bookRouter = express.Router();

bookRouter.get("/", getAllBooks);
bookRouter.get("/free", getFreeBooks);
bookRouter.post("/", createBook);
bookRouter.get("/:id", getSingleBook);
bookRouter.delete("/:id", deleteSingleBook);
bookRouter.put("/:id", updateSingleBook);

export default bookRouter;
