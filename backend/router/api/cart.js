const express = require("express");
const {
  addToCartController,
  getCartController,
  deleteCartController,
} = require("../../controller/cartController");
const router = express.Router();
// localhost:3000/api/cart/add-to-cart
router.post("/add-to-cart", addToCartController);
// localhost:3000/api/cart/get-cartbyuserid/:id
router.get("/get-cartbyuserid/:id", getCartController);
// localhost:3000/api/cart/delete-cartbyid/:id
router.delete("/delete-cartbyid/:id", deleteCartController);
module.exports = router;
