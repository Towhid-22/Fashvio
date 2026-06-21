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
        // return console.log(newOrder);
        await newOrder.save();
        res.status(201).json({
          success: true,
          message: "Order Place Successfull",
          data: newOrder,
        });
      } else {
        return res.status(200).json({
          success: true,
          message: "Order Place Successfull, Please proceed to payment",
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
const getAllOrders = async (req, res) => {
  try {
    const allOrders = await orderModel
      .find()
      .populate("cartItems.product", "_id name price variant");
    return res.status(200).json({
      success: true,
      message: "Order fetched succeffully",
      data: allOrders,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
module.exports = { orderController, getAllOrders };
