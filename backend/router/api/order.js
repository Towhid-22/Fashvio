const express = require("express");
const {
  orderController,
  getAllOrders,
} = require("../../controller/orderController");
const router = express.Router();

// localhost:4000/api/order/place-order
router.post("/place-order", orderController);
// localhost:4000/api/order/get-all-orders
router.get("/get-all-orders", getAllOrders);
// localhost:4000/api/order/success
router.post("/success", (req, res) => {
  res.redirect("https://fashvio-v1r7.vercel.app/order-success");
});

module.exports = router;
