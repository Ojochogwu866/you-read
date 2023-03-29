const mongoose = require("mongoose");

const bookStats = new mongoose.Schema(
  {
    pagesCompleted: {
      type: Number,
      required: [true, "Please enter book title"],
      maxlength: 250,
    },
    booksCompleted: {
      type: Number,
      required: [true, "Please enter book author"],
      maxlength: 250,
    },
    booksPerGenre: {
      type: String,
      required: [true, "Please enter book genre"],
      maxlength: 250,
    },
    pagesPerWeek: {
      type: Number,
      required: [true, "Please enter book pages"],
      maxlength: 250,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("BookStats", bookStats);
