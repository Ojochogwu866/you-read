const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  getCurrentBook,
  updateCurrentBook,
  deleteCurrentBook,
  createCurrentBook,
} = require("../controllers/books");

router.route("/").post(createCurrentBook).get(getAllBooks);
router
  .route("/:id")
  .get(getCurrentBook)
  .delete(deleteCurrentBook)
  .put(updateCurrentBook);

module.exports = router;
