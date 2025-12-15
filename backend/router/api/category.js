const express = require("express");
const {
  addCategoryController,
  getCategoryController,
  getSingleCategoryController,
  deleteCategoryController,
  updatecategoryController,
} = require("../../controller/categoryController");
const upload = require("../../helpers/uploadimage");
const adminMiddleware = require("../../middleware/adminMiddleware");
const router = express.Router();

// localhost:3000/api/category/addCategory
router.post("/addCategory", adminMiddleware, upload.single("image"), addCategoryController);
// localhost:3000/api/category/deleteCategory/:id
router.delete("/deleteCategory/:id", adminMiddleware, deleteCategoryController);
// localhost:3000/api/category/updatecategory/:id
router.patch("/updatecategory/:id", adminMiddleware, upload.single("image"), updatecategoryController);
// localhost:3000/api/category/get-category
router.get("/get-category", getCategoryController);
// localhost:3000/api/category/singleCategory/:slug
router.get("/singleCategory/:slug", getSingleCategoryController);

module.exports = router;
