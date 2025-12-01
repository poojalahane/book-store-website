import Book from "../model/book.model.js";

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ count: books.length, books });
  } catch (error) {
    console.log("Error in getAllBooks:", error);
    res.status(500).json({ message: "Error fetching books" });
  }
};

export const getFreeBooks = async (req, res) => {
  try {
    const books = await Book.find({ category: "free" });
    res.status(200).json({ count: books.length, books });
  } catch (error) {
    console.log("Error in getFreeBooks:", error);
    res.status(500).json({ message: "Error fetching free books" });
  }
};

export const createBook = async (req, res) => {
  try {
    const book = req.body;
    const newBook = await Book.create(book);
    res.status(201).json(newBook);
  } catch (error) {
    console.log("Error in createBook:", error);
    res.status(500).json({ message: "Error creating book" });
  }
};

export const getSingleBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    console.log("Error in getSingleBook:", error);
    res.status(500).json({ message: "Error fetching book" });
  }
};

export const deleteSingleBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully", book });
  } catch (error) {
    console.log("Error in deleteSingleBook:", error);
    res.status(500).json({ message: "Error deleting book" });
  }
};

export const updateSingleBook = async (req, res) => {
  try {
    const id = req.params.id;
    const newBook = req.body;
    const book = await Book.findByIdAndUpdate(id, newBook, { new: true });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book updated successfully", book });
  } catch (error) {
    console.log("Error in updateSingleBook:", error);
    res.status(500).json({ message: "Error updating book" });
  }
};
