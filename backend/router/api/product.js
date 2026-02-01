const express = require("express");
const {
  addProductController,
  updateProductController,
  getProductController,
  getSingleProductController,
  deleteProductController,
  getFeaturesProductController,
  searchProductController,
} = require("../../controller/productController");
const upload = require("../../helpers/uploadimage");
const adminMiddleware = require("../../middleware/adminMiddleware");
const router = express.Router();

// localhost:4000/api/product/add-product
router.post(
  "/add-product",
  adminMiddleware,
  upload.single("image"),
  addProductController,
);
// localhost:4000/api/product/update-product/:id
router.patch(
  "/update-product/:id",
  adminMiddleware,
  upload.single("image"),
  updateProductController,
);
// localhost:4000/api/product/delete-product/:id
router.delete("/delete-product/:id", adminMiddleware, deleteProductController);
// localhost:4000/api/product/get-product
router.get("/get-product", getProductController);
// localhost:4000/api/product/get-single-product/:slug
router.get("/get-single-product/:slug", getSingleProductController);
// localhost:4000/api/product/get-featured-product
router.get("/get-featured-product", getFeaturesProductController);
// localhost:4000/api/product/search-product
router.get("/search-product", searchProductController);

module.exports = router;
