const express = require("express");
const {
  addProductController,
  updateProductController,
  getProductController,
  getSingleProductController,
  deleteProductController,
} = require("../../controller/productController");
const upload = require("../../helpers/uploadimage");
const router = express.Router();

// localhost:3000/api/product/add-product
router.post("/add-product", upload.single("image"), addProductController);
// localhost:3000/api/product/get-product
router.get("/get-product", getProductController);
// localhost:3000/api/product/get-single-product/:slug
router.get("/get-single-product/:slug", getSingleProductController);
// localhost:3000/api/product/update-product/:id
router.patch("/update-product/:id", upload.single("image"), updateProductController);
// localhost:3000/api/product/delete-product/:id
router.delete("/delete-product/:id", deleteProductController);

module.exports = router;
