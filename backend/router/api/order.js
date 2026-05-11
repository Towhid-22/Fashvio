const express = require("express");
const orderController = require("../../controller/orderController");
const router = express.Router();

// localhost:4000/api/order/place-order
router.post("/place-order", orderController);

module.exports = router;
