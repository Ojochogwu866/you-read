const express = require("express");
const router = express.Router();

const { getUserProfile, updateUserProfile } = require("../controllers/user");

router.route("/:id").get(getUserProfile).put(updateUserProfile);
module.exports = router;
