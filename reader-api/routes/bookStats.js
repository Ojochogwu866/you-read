const express = require("express");
const router = express.Router();

const {
  deleteBookStats,
  getBookStats,
  createBookStats,
  updateBookStats,
  getAllBookStats,
} = require("../controllers/bookStats");

router.route("/").post(createBookStats).get(getAllBookStats);
router
  .route("/:id")
  .get(getBookStats)
  .delete(deleteBookStats)
  .put(updateBookStats);

module.exports = router;
