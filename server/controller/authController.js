const { response } = require("express");
const bcrypt = require("bcrypt");
const userModel = require("../model/userModel");
const emailValidation = require("../helpers/emailValidation");
const sendEmail = require("../helpers/sendEmail");
const random_otp = require("../helpers/random-otp");
const jwt = require("jsonwebtoken");

//  signup controller
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
          return res.status(400).json(
            +{
              success: false,
              message: "Email is not valid",
            }
          );
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
        req.session.user = user;
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
//  otp controller
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
//  login controller
const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    } else {
      bcrypt.compare(password, existingUser.password, function (err, result) {
        if (!err) {
          if (result) {
            const userData = {
              id: existingUser._id,
              name: existingUser.username,
              email: existingUser.email,
              role: existingUser.role,
              verify: existingUser.isVerify,
            };
            // const token = jwt.sign({ userData }, process.env.JWTsecret, {
            //   expiresIn: 60 * 60 * 24 * 5, // 5 days
            // });
            // res.cookie("fashvio", token);
            req.session.user = userData;
            return res.status(200).json({
              success: true,
              message: "User login successfully",
              data: userData,
              // token,
            });
          } else {
            return res.status(404).json({
              success: false,
              message: "Invalid Password",
            });
          }
        } else {
          return res.status(500).json({
            success: false,
            message: err,
          });
        }
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

module.exports = { signupController, otpVerifyController, loginController };
