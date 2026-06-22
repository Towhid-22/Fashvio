const express = require("express");
const {
  orderController,
  getAllOrders,
} = require("../../controller/orderController");
const orderModel = require("../../model/orderModel");
const router = express.Router();

// localhost:4000/api/order/place-order
router.post("/place-order", orderController);
// localhost:4000/api/order/get-all-orders
router.get("/get-all-orders", getAllOrders);
// localhost:4000/api/order/success
router.post("/success/:id", async (req, res) => {
  const { id } = req.params;
  let order = await orderModel.findOneAndUpdate(
    { transactionId: id },
    { paymentStatus: "paid", orderStatus: "processing" },
    { new: true },
  );
  await order.save();
  res.redirect("https://fashvio-v1r7.vercel.app/success");
});
// localhost:4000/api/order/fail
router.post("/fail", (req, res) => {
  res.redirect("https://fashvio-v1r7.vercel.app/fail");
});

module.exports = router;
