const passport = require("passport");
const User = require("../models/user");
passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser(async (user, done) => {
  const currentUser = await User.findOne({
    user: user.email,
  });
  done(null, currentUser);
});
