const express = require("express");
const router = express.Router();
const authRouter = require("./authentication");
const categoryRouter = require("./category");
// localhost:3000/api/authentication
router.use("/authentication", authRouter);
// localhost:3000/api/category
router.use("/category", categoryRouter)
module.exports = router;
