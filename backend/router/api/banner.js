const express = require("express");
const {
  addBannerController,
  deleteBannerController,
  getBannerController,
} = require("../../controller/bannerController");
const upload = require("../../helpers/uploadimage");
const router = express.Router();
// localhost:4000/api/banner/add-banner
router.post("/add-banner", upload.single("image"), addBannerController);
// localhost:4000/api/banner/get-banner
router.get("/get-banner", getBannerController);
// localhost:4000/api/banner/delete-banner/:id
router.delete("/delete-banner/:id", deleteBannerController);
module.exports = router;
