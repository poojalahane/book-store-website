import express from "express";
import {
  createBook,
  deleteSingleBook,
  getBook,
  getSingleBook,
  updateSingleBook,
} from "../controller/book.controller.js";

const bookRouter = express.Router();

bookRouter.get("/", getBook);
bookRouter.post("/", createBook);
bookRouter.get("/:id", getSingleBook);
bookRouter.delete("/:id", deleteSingleBook);
bookRouter.put("/:id", updateSingleBook);

export default bookRouter;
