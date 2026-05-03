const cartModel = require("../model/cartModel");

const addToCartController = async (req, res) => {
  try {
    const { product, variant, user, quantity, price } = req.body;
    const addCart = new cartModel({
      product,
      variant,
      user,
      quantity,
      price,
    });
    await addCart.save();
    return res.status(201).json({
      success: true,
      message: "Add to cart successfully",
      data: addCart,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const getCartControllerByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const getCart = await cartModel
      .find({ user: id })
      .populate("product variant user");
    if (getCart.length == 0) {
      return res.status(404).json({ success: false, message: "Cart is empty" });
    }
    return res.status(200).json({
      success: true,
      message: "Cart fetched successfully",
      data: getCart,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const deleteCartController = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await cartModel.findById(id);
    if (req.user.id == cart.user) {
      await cartModel.findByIdAndDelete(id);
      return res.status(200).json({
        success: true,
        message: "Cart delete successfull",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "you do not have permission to delete other user cart",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "something went wrong",
    });
  }
};
module.exports = {
  addToCartController,
  getCartControllerByUserId,
  deleteCartController,
};
