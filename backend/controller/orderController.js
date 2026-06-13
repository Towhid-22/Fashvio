const cartModel = require("../model/cartModel");
const orderModel = require("../model/orderModel");

const orderController = async (req, res) => {
  try {
    const {
      user,
      cartItems,
      totalPrice,
      address,
      phone,
      city,
      paymentMethod,
      paymentStatus,
    } = req.body;
    if (
      !user ||
      !cartItems ||
      !totalPrice ||
      !address ||
      !phone ||
      !city ||
      !paymentMethod ||
      !paymentStatus
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All field are required" });
    } else {
      if (paymentMethod === "COD") {
        const newOrder = orderModel({
          user,
          cartItems,
          totalPrice,
          address,
          phone,
          city,
          paymentMethod,
          paymentStatus: "notpaid",
        });
        return console.log(newOrder);
        await newOrder.save();
        res.status(201).json({
          success: true,
          message: "Order Place Successfull",
          data: newOrder,
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "Online payment is not supported yet",
        });
      }
    }
  } catch (error) {
    console.log(error);

    res.status(400).json({
      success: false,
      message: error.message,
      error,
    });
  }
};
module.exports = orderController;
