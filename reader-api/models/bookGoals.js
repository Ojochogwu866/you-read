const mongoose = require("mongoose");
const bookGoals = new mongoose.Schema(
  {
    totalRead: {
      type: Number,
      required: [true, "Please enter book title"],
      maxlength: 250,
    },
    monthlyRead: {
      type: Number,
      required: [true, "Please enter book author"],
      maxlength: 250,
    },
    pagesPerDay: {
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
    lastUpdated: {
      type: Date,
      default: Date.now,
      required: true,
    },
    timeInterval: {
      type: Number,
      enum: [1, 3, 6, 12],
      default: 1,
      required: true,
    },
  },
  { timestamps: true }
);

bookGoals.index({ createdBy: 1, lastUpdated: 1 });

bookGoals.statics.canCreateNew = async function (userId) {
  const lastUpdatedRecord = await this.findOne(
    { createdBy: userId },
    {},
    { sort: { lastUpdated: -1 } }
  );
  if (!lastUpdatedRecord) {
    return true;
  }

  const { timeInterval, lastUpdated } = lastUpdatedRecord;
  const nextUpdateTime = new Date(
    lastUpdated.getTime() + timeInterval * 30 * 24 * 60 * 60 * 1000
  ); // 30 days in milliseconds
  return nextUpdateTime <= new Date();
};
module.exports = mongoose.model("BookGoals", bookGoals);
