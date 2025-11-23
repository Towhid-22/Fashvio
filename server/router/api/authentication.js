const express = require("express");
const router = express.Router();

// localhost:3000/api/authentication/signup
router.post("/signup", (req, res) => {
  res.send("signup");
});
module.exports = router;
