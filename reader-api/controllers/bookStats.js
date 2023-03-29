const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const bookStats = require("../models/bookStats");

const createBookStats = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const bookstat = await bookStats.create(req.body);
  res.status(StatusCodes.CREATED).json({ bookstat });
};
const getAllBookStats = async (req, res) => {
  const books = await bookStats
    .find({ createdBy: req.user.userId })
    .sort("createdAt");
  res.status(StatusCodes.OK).json({ books, count: books.length });
};
const deleteBookStats = async (req, res) => {
  const {
    user: { userId },
    params: { id: bookId },
  } = req;
  const book = await bookStats.findByIdAndRemove({
    _id: bookId,
    createdBy: userId,
  });
  if (!book) {
    throw new NotFoundError(`No book with id ${bookId}`);
  }
  res.status(StatusCodes.OK).send("Book removed succesfully");
};
const updateBookStats = async (req, res) => {
  const {
    body: { boooksPerGenre, pagesPerWeek, booksCompleted, pagesCompleted },
    user: { userId },
    params: { id: booksId },
  } = req;
  if (
    boooksPerGenre === "" ||
    booksCompleted === "" ||
    pagesPerWeek === "" ||
    pagesCompleted === ""
  ) {
    throw new BadRequestError("fields cannot be empty");
  }
  const book = await bookStats.findByIdAndUpdate(
    {
      _id: booksId,
      createdBy: userId,
    },
    req.body,
    { new: true, runValidators: true }
  );
  if (!book) {
    throw new NotFoundError(`Book stat with ${booksId} not found`);
  }
  res.status(StatusCodes.OK).json({ book });
};
const getBookStats = async (req, res) => {
  const {
    user: { userId },
    params: { id: bookId },
  } = req;
  const book = await bookStats.findOne({
    _id: bookId,
    createdBy: userId,
  });
  if (!book) {
    throw new NotFoundError(`Book stat with ${bookId} not found`);
  }
  res.status(StatusCodes.OK).json({ book });
};

module.exports = {
  deleteBookStats,
  getBookStats,
  createBookStats,
  updateBookStats,
  getAllBookStats,
};
