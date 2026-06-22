const cartModel = require("../model/cartModel");
const orderModel = require("../model/orderModel");
const userModel = require("../model/userModel");

const SSLCommerzPayment = require("sslcommerz-lts");
const store_id = process.env.SSL_STORE_ID;
const store_passwd = process.env.SSL_STORE_PASSWORD;
const is_live = false; //true for live, false for sandbox
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
        await newOrder.save();
        res.status(201).json({
          success: true,
          message: "Order Place Successfull",
          data: newOrder,
        });
      } else if (paymentMethod === "online") {
        // handle online payment logic here
        let userInfo = await userModel.findById(user);

        const data = {
          total_amount: totalPrice,
          currency: "BDT",
          tran_id: `REF${Date.now()}`, // use unique tran_id for each api call
          success_url: "http://localhost:3030/success",
          fail_url: "http://localhost:3030/fail",
          cancel_url: "http://localhost:3030/cancel",
          ipn_url: "http://localhost:3030/ipn",
          shipping_method: "Courier",
          product_name: "Computer.",
          product_category: "Electronic",
          product_profile: "general",
          cus_name: userInfo.username,
          cus_email: userInfo.email,
          cus_add1: address,
          cus_add2: "Dhaka",
          cus_city: city,
          cus_state: "Dhaka",
          cus_postcode: "1000",
          cus_country: "Bangladesh",
          cus_phone: phone,
          cus_fax: "01711111111",
          ship_name: "Customer Name",
          ship_add1: "Dhaka",
          ship_add2: "Dhaka",
          ship_city: "Dhaka",
          ship_state: "Dhaka",
          ship_postcode: 1000,
          ship_country: "Bangladesh",
        };
        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
        sslcz.init(data).then((apiResponse) => {
          // Redirect the user to payment gateway
          let GatewayPageURL = apiResponse.GatewayPageURL;
          console.log("Redirecting to: ", GatewayPageURL);
          return res.status(200).json({
            success: true,
            message: "Order Place Successfull, Please proceed to payment",
            paymenturl: GatewayPageURL,
          });
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "Invalid payment method",
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
