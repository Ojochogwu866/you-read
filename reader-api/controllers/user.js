const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const getUserProfile = async (req, res) => {
  const { userId } = req.user;
  const user = await User.findById(userId);
  res.status(StatusCodes.OK).json({
    user: {
      name: user.name,
      email: user.email,
      phone_number: user.phone_number,
      country: user.country,
      facebook_handle: user.facebook_handle,
      twitter_handle: user.twitter_handle,
    },
  });
};
const updateUserProfile = async (req, res) => {
  const {
    name,
    email,
    facebook_handle,
    twitter_handle,
    country,
    phone_number,
  } = req.body;
  const { userId } = req.user;

  if (
    !name ||
    !email ||
    !facebook_handle ||
    !twitter_handle ||
    !country ||
    !phone_number
  ) {
    throw new BadRequestError("All fields are required");
  }

  const updates = {
    name,
    email,
    facebook_handle,
    twitter_handle,
    country,
    phone_number,
  };

  const user = await User.findByIdAndUpdate(
    userId,
    { $set: updates },
    { new: true, runValidators: true }
  );

  if (!user) {
    throw new NotFoundError(`No user with ID ${userId}`);
  }

  res.status(StatusCodes.OK).json({
    name: user.name,
    email: user.email,
    facebook_handle: user.facebook_handle,
    twitter_handle: user.twitter_handle,
    country: user.country,
    phone_number: user.phone_number,
  });
};
module.exports = {
  getUserProfile,
  updateUserProfile,
};
