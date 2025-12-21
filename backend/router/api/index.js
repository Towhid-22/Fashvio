const express = require("express");
const router = express.Router();
const authRouter = require("./authentication");
const categoryRouter = require("./category");
const subcategoryRouter = require("./subcategory");
const productRouter = require("./product");
const variantRouter = require("./variant");
const cartRouter = require("./cart");
const bannerRouter = require("./banner");
// localhost:4000/api/authentication
router.use("/authentication", authRouter);
// localhost:4000/api/category
router.use("/category", categoryRouter);
// localhost:4000/api/subcategory
router.use("/subcategory", subcategoryRouter);
// localhost:4000/api/product
router.use("/product", productRouter);
// localhost:4000/api/variant
router.use("/variant", variantRouter);
// localhost:4000/api/cart
router.use("/cart", cartRouter);
// localhost:4000/api/banner
router.use("/banner", bannerRouter);
module.exports = router;
