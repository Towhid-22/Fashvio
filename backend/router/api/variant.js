const express = require("express");
const {
  addVariantController,
  updateVariantController,
  deleteVariantController,
  getVariantController,
} = require("../../controller/variantController");
const router = express.Router();
const upload = require("../../helpers/uploadimage");

// localhost:3000/api/variant/add-variant
router.post("/add-variant", upload.single("image"), addVariantController);
// localhost:3000/api/variant/update-variant/:id
router.patch("/update-variant/:id", upload.single("image"), updateVariantController);
// localhost:3000/api/variant/delete-variant/:id
router.delete("/delete-variant/:id", deleteVariantController)
// localhost:3000/api/variant/get-variant
router.get("/get-variant", getVariantController)

module.exports = router;
