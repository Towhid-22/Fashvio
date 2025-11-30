const express = require("express");
const {
  signupController,
  otpVerifyController,
  loginController,
  logoutController,
  resetPasswordController,
  forgotPasswordOtpVerifyController,
  forgotPasswordController,
} = require("../../controller/authController");
const userModel = require("../../model/userModel");
const authMiddleware = require("../../middleware/authMiddleware");
const adminMiddleware = require("../../middleware/adminMiddleware");
const router = express.Router();

// localhost:3000/api/authentication/signup
router.post("/signup", signupController);
// localhost:3000/api/authentication/otp-verify
router.post("/otp-verify", otpVerifyController);
// localhost:3000/api/authentication/login
router.post("/login", loginController);
// localhost:3000/api/authentication/logout
router.post("/logout", logoutController);
// localhost:3000/api/authentication/reset-password
router.post("/reset-password", resetPasswordController);
// localhost:3000/api/authentication/forgot-password-otp-verify
router.post("/forgot-password-otp-verify", forgotPasswordOtpVerifyController);
// localhost:3000/api/authentication/forgot-password
router.patch("/forgot-password", forgotPasswordController);

// localhost:3000/api/authentication/authuser
router.get("/authuser", authMiddleware, async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.session.user.id });
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});
module.exports = router;
