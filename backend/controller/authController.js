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
        if (user.role == "admin") {
          req.session.cookie.maxAge = 5 * 60 * 1000;
        } else {
          req.session.cookie.maxAge = 24 * 60 * 60 * 1000;
        }
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
    if (existingUser.isVerify == false) {
      return res.status(400).json({
        success: false,
        message: "User is not verified",
      });
    }
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
            if (existingUser.role == "admin") {
              req.session.cookie.maxAge = 5 * 60 * 1000;
            } else {
              req.session.cookie.maxAge = 24 * 60 * 60 * 1000;
            }
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
// logout controller
const logoutController = async (req, res) => {
  res.clearCookie("fashvio");
  req.session.destroy(function (err) {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message || "Something went wrong",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Logout successfull",
      });
    }
  });
};
// reset-password controller
const resetPasswordController = async (req, res) => {
  let { email, oldPassword, newPassword } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    bcrypt.compare(oldPassword, existingUser.password, function (err, result) {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Something went wrong",
        });
      } else {
        if (result) {
          bcrypt.hash(newPassword, 10, function (err, hash) {
            if (err) {
              return res.status(500).json({
                success: false,
                message: "Something went wrong",
              });
            } else {
              existingUser.password = hash;
              existingUser.save();
              return res.status(200).json({
                success: true,
                message: "Password changed successfully",
              });
            }
          });
        } else {
          return res.status(400).json({
            success: false,
            message: "password not match",
          });
        }
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
// forgot password otp verify controller
const forgotPasswordOtpVerifyController = async (req, res) => {
  const { email } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    } else {
      const otp = random_otp();
      existingUser.otp = otp;
      await existingUser.save();
      sendEmail(email, otp);
      setTimeout(async () => {
        await userModel.findOneAndUpdate({ email }, { otp: null }).then(() => {
          console.log("otp delete");
        });
        existingUser.save();
      }, 1000 * 60);
      return res.status(200).json({
        success: true,
        message: "Otp sent in your email",
        otp,
      });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: err.message || "Something went wrong" });
  }
};
// forgot-password controller
const forgotPasswordController = async (req, res) => {
  const { email, otp, newPassword } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    if (!existingUser.otp) {
      return res.status(404).json({
        success: false,
        message: "Otp not found",
      });
    }
    if (existingUser.otp != otp) {
      return res.status(400).json({
        success: false,
        message: "Otp is not match",
      });
    } else {
      bcrypt.hash(newPassword, 10, function (err, hash) {
        if (err) {
          return res.status(500).json({
            success: false,
            message: "Something went wrong",
          });
        } else {
          existingUser.password = hash;
          existingUser.save();
          return res.status(200).json({
            success: true,
            message: "Password changed successfully",
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

// export
module.exports = {
  signupController,
  otpVerifyController,
  loginController,
  logoutController,
  resetPasswordController,
  forgotPasswordOtpVerifyController,
  forgotPasswordController,
};
