require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
//api security
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");
//connect Database
const connectDB = require("./db/connect");
const authenticateUser = require("./middleware/authentication");
//routers
const authRouter = require("./routes/auth");
const bookRouter = require("./routes/books");
const bookGoalsRouter = require("./routes/bookGoals");
const profile = require("./routes/profile");
const bookStatsRouter = require("./routes/bookStats");

require("./config/passport");
require("./config/google-config");

//handle-errors
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windows: 15 * 60 * 1000,
    max: 100,
  })
);
app.use(
  session({
    secret: "secr3t",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(rateLimiter());
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/books", authenticateUser, bookRouter);
app.use("/api/v1/book-goals", authenticateUser, bookGoalsRouter);
app.use("/api/v1/book-stats", authenticateUser, bookStatsRouter);
app.use("/api/v1/auth/profile", authenticateUser, profile);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
