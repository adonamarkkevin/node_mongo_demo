const express = require("express");

const router = express.Router();

// Controllers
const { registerUser } = require("../controller/user.controller");

// Routes

router.post("/user/register", registerUser);

module.exports = router;
