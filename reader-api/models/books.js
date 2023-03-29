const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookTitle: {
      type: String,
      required: [true, "Please enter book title"],
      maxlength: 250,
    },
    bookAuthor: {
      type: String,
      required: [true, "Please enter book author"],
      maxlength: 250,
    },
    bookGenre: {
      type: String,
      required: [true, "Please enter book genre"],
      maxlength: 250,
    },
    bookPages: {
      type: Number,
      required: [true, "Please enter book pages"],
      maxlength: 250,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Books", bookSchema);
