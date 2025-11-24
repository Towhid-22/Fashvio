const { response } = require("express");
const bcrypt = require("bcrypt");
const userModel = require("../model/userModel");
const emailValidation = require("../helpers/emailValidation");
const sendEmail = require("../helpers/sendEmail");
const random_otp = require("../helpers/random-otp");

const signupController = async (req, res) => {
  try {
    const otp = random_otp();
    const { username, email, password } = req.body;
    bcrypt.hash(password, 10, async function (err, hash) {
      if (err) {
        return res.status(400).json({
          success: false,
          message: err.message || "Something went wrong",
        });
      } else {
        if (!emailValidation(email)) {
          return res.status(400).json({
            success: false,
            message: "Email is not valid",
          });
        }
        const user = userModel({ username, email, password: hash, otp });
        sendEmail(email, otp);
        await user.save();

        setTimeout(async () => {
          await userModel
            .findOneAndUpdate({ email }, { otp: null })
            .then(() => {
              console.log("otp delete");
            });
          user.save();
        }, 1000 * 60 * 2);
        return res.status(201).json({
          success: true,
          message: "User created successfully",
          data: user,
        });
      }
    });
  } catch (err) {
    return res
      .status(400)
      .json({ success: false, message: err.message || "Something went wrong" });
  }
};

const otpVerifyController = async (req, res) => {
  const { email, otp } = req.body;
  try {
    const otpVerify = await userModel.findOne({ email });
    if (!otpVerify) {
      return res.status(404).json({
        success: false,
        message: "Invalid email",
      });
    } else {
      if (otpVerify.otp == otp) {
        otpVerify.isVerify = true;
        otpVerify.otp = null;
        await otpVerify.save();
        return res.status(200).json({
          success: true,
          message: "User verified successfully",
          data: otpVerify,
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "Otp is not valid",
        });
      }
    }
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: err.message || "Something went wrong" });
  }
};

module.exports = { signupController, otpVerifyController };
