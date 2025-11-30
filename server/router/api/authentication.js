const express = require("express");
const {
  signupController,
  otpVerifyController,
  loginController,
} = require("../../controller/authController");
const userModel = require("../../model/userModel");
const authMiddleware = require("../../middleware/authMiddleware");
const router = express.Router();

// localhost:3000/api/authentication/signup
router.post("/signup", signupController);
router.post("/otp-verify", otpVerifyController);
router.post("/login", loginController);
router.get("/authuser", authMiddleware, async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.session.user.id });
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});
module.exports = router;
