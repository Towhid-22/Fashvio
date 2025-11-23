const express = require("express");
const { signupController } = require("../../controller/authController");
const router = express.Router();

// localhost:3000/api/authentication/signup
router.post("/signup", signupController);
module.exports = router;
