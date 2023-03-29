const Books = require("../models/books");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllBooks = async (req, res) => {
  const books = await Books.find({ createdBy: req.user.userId }).sort(
    "createdAt"
  );
  res.status(StatusCodes.OK).json({ books, count: books.length });
};
const createCurrentBook = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const book = await Books.create(req.body);
  res.status(StatusCodes.CREATED).json({ book });
};
const deleteCurrentBook = async (req, res) => {
  const {
    user: { userId },
    params: { id: bookId },
  } = req;
  const book = await Books.findByIdAndRemove({
    _id: bookId,
    createdBy: userId,
  });
  if (!book) {
    throw new NotFoundError(`No book with id ${bookId}`);
  }
  res.status(StatusCodes.OK).send("Book removed succesfully");
};
const updateCurrentBook = async (req, res) => {
  const {
    body: { bookTitle, bookAuthor, bookPages, bookGenre, pagesLeft },
    user: { userId },
    params: { id: booksId },
  } = req;
  if (
    bookAuthor === "" ||
    bookPages === "" ||
    bookTitle === "" ||
    bookGenre === "" ||
    pagesLeft === ""
  ) {
    throw new BadRequestError("fields cannot be empty");
  }
  const book = await Books.findByIdAndUpdate(
    {
      _id: booksId,
      createdBy: userId,
    },
    req.body,
    { new: true, runValidators: true }
  );
  if (!book) {
    throw new NotFoundError(`No book with id ${booksId}`);
  }
  res.status(StatusCodes.OK).json({ book });
};
const getCurrentBook = async (req, res) => {
  const {
    user: { userId },
    params: { id: bookId },
  } = req;
  const book = await Books.findOne({
    _id: bookId,
    createdBy: userId,
  });
  if (!book) {
    throw new NotFoundError(`No job with id ${bookId}`);
  }
  res.status(StatusCodes.OK).json({ book });
};

module.exports = {
  deleteCurrentBook,
  getAllBooks,
  getCurrentBook,
  createCurrentBook,
  updateCurrentBook,
};
