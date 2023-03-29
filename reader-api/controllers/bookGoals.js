const BookGoals = require("../models/bookGoals");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const createBookGoals = async (req, res) => {
  try {
    const userId = req.user.userId;
    const bookGoalsData = req.body;

    const canCreateNew = await BookGoals.canCreateNew(userId);
    if (!canCreateNew) {
      return res.status(StatusCodes.FORBIDDEN).json({
        message: "Cannot create a new BookGoals record yet",
      });
    }
    const bookGoals = await BookGoals.create({
      ...bookGoalsData,
      createdBy: userId,
    });

    res.status(StatusCodes.CREATED).json({ bookGoals });
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Failed to create BookGoals record",
    });
  }
};
const getAllBookGoals = async (req, res) => {
  const books = await BookGoals.find({ createdBy: req.user.userId }).sort(
    "createdAt"
  );
  res.status(StatusCodes.OK).json({
    books,
    count: books.length,
  });
};
const deleteBookGoals = async (req, res) => {
  const {
    user: { userId },
    params: { id: bookId },
  } = req;
  const book = await BookGoals.findByIdAndRemove({
    _id: bookId,
    createdBy: userId,
  });
  if (!book) {
    throw new NotFoundError(`No book with id ${bookId}`);
  }
  res.status(StatusCodes.OK).send("Book removed succesfully");
};
const updateBookGoals = async (req, res) => {
  const {
    body: { totalRead, monthlyRead, pagesPerWeek, pagesPerDay, timeInterval },
    user: { userId },
    params: { id: booksId },
  } = req;
  if (
    totalRead === "" ||
    monthlyRead === "" ||
    pagesPerWeek === "" ||
    pagesPerDay === "" ||
    timeInterval === ""
  ) {
    throw new BadRequestError("fields cannot be empty");
  }
  const book = await BookGoals.findOneAndUpdate(
    {
      _id: booksId,
      createdBy: userId,
    },
    {
      totalRead,
      monthlyRead,
      pagesPerWeek,
      pagesPerDay,
      timeInterval,
      lastUpdated: timeInterval !== undefined ? new Date() : undefined,
    },
    { new: true, runValidators: true }
  );
  if (!book) {
    throw new NotFoundError(`No book with id ${booksId}`);
  }
  res.status(StatusCodes.OK).json({ book });
};
const getBookGoals = async (req, res) => {
  const {
    user: { userId },
    params: { id: bookId },
  } = req;
  const book = await BookGoals.findOne({
    _id: bookId,
    createdBy: userId,
  });
  if (!book) {
    throw new NotFoundError(`No book goal with id ${bookId}`);
  }
  res.status(StatusCodes.OK).json({ book });
};
module.exports = {
  deleteBookGoals,
  getBookGoals,
  createBookGoals,
  updateBookGoals,
  getAllBookGoals,
};
