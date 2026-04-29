const express = require("express");
const {
  addToCartController,
  getCartControllerByUserId,
  deleteCartController,
} = require("../../controller/cartController");
const router = express.Router();
// localhost:4000/api/cart/add-to-cart
router.post("/add-to-cart", addToCartController);
// localhost:4000/api/cart/get-cartbyuserid/:id
router.get("/get-cartbyuserid/:id", getCartControllerByUserId);
// localhost:4000/api/cart/delete-cartbyid/:id
router.delete("/delete-cartbyid/:id", deleteCartController);
module.exports = router;
