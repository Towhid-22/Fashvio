const express = require("express");
const router = express.Router();
const authRouter = require("./authentication");
// localhost:3000/api/authentication
router.use("/authentication", authRouter);
module.exports = router;
