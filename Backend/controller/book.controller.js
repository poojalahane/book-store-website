import Book from "../model/book.model.js";

export const getFreeBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json({ count: book.length, book });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json({ count: book.length, book });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const createBook = async (req, res) => {
  try {
    const book = req.body;
    const newBook = await Book.create(book);
    console.log(newBook);
    res.status(200).json(newBook);
    console.log(newBook);
  } catch (error) {
    console.log(error);
  }
};

export const getSingleBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    console.log(book);
    res.status(200).json(book);
  } catch (error) {
    console.log(error);
  }
};
export const deleteSingleBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndDelete(id);
    console.log(book);
    res.status(200).json({ message: "Product deleted successfully", book });
  } catch (error) {
    console.log(error);
  }
};
export const updateSingleBook = async (req, res) => {
  try {
    const id = req.params.id;
    const newBook = req.body;
    const book = await Book.findByIdAndUpdate(id, newBook);
    console.log(book);
    res.status(200).json({ message: "Product deleted successfully", book });
  } catch (error) {
    console.log(error);
  }
};
