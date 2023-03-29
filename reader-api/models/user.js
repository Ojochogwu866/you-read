const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [false, "Please provide password"],
    minlength: 6,
  },
  twitter_handle: {
    type: String,
    minlength: 3,
    maxlength: 50,
  },
  facebook_handle: {
    type: String,
    minlength: 3,
    maxlength: 50,
  },
  date_of_birth: {
    type: Date,
    maxlength: 50,
  },
  country: {
    type: String,
    minlength: 3,
    maxlength: 50,
  },
});
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};
UserSchema.methods.comparePassword = async function (candidatePassword) {
  if (this.password !== undefined) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  }
};
module.exports = mongoose.model("User", UserSchema);
