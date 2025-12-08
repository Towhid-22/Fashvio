const express = require("express");
const router = express.Router();
const authRouter = require("./authentication");
const categoryRouter = require("./category");
const subcategoryRouter = require("./subcategory");
const productRouter = require("./product");
// localhost:3000/api/authentication
router.use("/authentication", authRouter);
// localhost:3000/api/category
router.use("/category", categoryRouter);
// localhost:3000/api/subcategory
router.use("/subcategory", subcategoryRouter);
// localhost:3000/api/product
router.use("/product", productRouter);
module.exports = router;
