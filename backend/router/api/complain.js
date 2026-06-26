const express = require("express");
const {
  addComplainController,
} = require("../../controller/complainController");
const router = express.Router();

// localhost:4000/api/complain/add-complain
router.post("/add-complain", addComplainController);
module.exports = router;
