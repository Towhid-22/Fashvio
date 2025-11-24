const express = require("express");
const { signupController, otpVerifyController } = require("../../controller/authController");
const router = express.Router();

// localhost:3000/api/authentication/signup
router.post("/signup", signupController);
router.post("/otp-verify", otpVerifyController);
module.exports = router;
