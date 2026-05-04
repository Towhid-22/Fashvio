const express = require("express");
const authMiddleware = require("../../middleware/authMiddleware");
const {
  addToCartController,
  getCartControllerByUserId,
  deleteCartController,
  updateCartController,
} = require("../../controller/cartController");
const router = express.Router();
// localhost:4000/api/cart/add-to-cart
router.post("/add-to-cart", addToCartController);
// localhost:4000/api/cart/get-cartbyuserid/:id
router.get("/get-cartbyuserid/:id", getCartControllerByUserId);
// localhost:4000/api/cart/update-cartbyid/:id
router.patch("/update-cartbyid/:id", authMiddleware, updateCartController);
// localhost:4000/api/cart/delete-cartbyid/:id
router.delete(
  "/delete-cartbyid/:id",
  authMiddleware,
  deleteCartController,
);
module.exports = router;
