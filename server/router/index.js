const express = require("express");
const router = express.Router();
const apiRouter = require("./api");

// localhost:3000/api
router.use("/api", apiRouter);
module.exports = router;
