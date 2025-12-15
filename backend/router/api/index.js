const express = require("express");
const router = express.Router();
const authRouter = require("./authentication");
const categoryRouter = require("./category");
const subcategoryRouter = require("./subcategory");
const productRouter = require("./product");
const variantRouter = require("./variant");
const authMiddleware = require("../../middleware/authMiddleware");
const adminMiddleware = require("../../middleware/adminMiddleware");
// localhost:3000/api/authentication
router.use("/authentication", authRouter);
// localhost:3000/api/category
router.use("/category", authMiddleware, adminMiddleware, categoryRouter);
// localhost:3000/api/subcategory
router.use("/subcategory", authMiddleware, adminMiddleware, subcategoryRouter);
// localhost:3000/api/product
router.use("/product", authMiddleware, adminMiddleware, productRouter);
// localhost:3000/api/variant
router.use("/variant", authMiddleware, adminMiddleware, variantRouter);
module.exports = router;
