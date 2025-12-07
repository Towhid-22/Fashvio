const express = require("express");
const {
  addCategoryController,
  getCategoryController,
  getSingleCategoryController,
  deleteCategoryController,
  updatecategoryController,
} = require("../../controller/categoryController");
const upload = require("../../helpers/uploadimage");
const router = express.Router();

// localhost:3000/api/category/addCategory
router.post("/addCategory", upload.single("image"), addCategoryController);
// localhost:3000/api/category/get-category
router.get("/get-category", getCategoryController);
// localhost:3000/api/category/singleCategory/:slug
router.get("/singleCategory/:slug", getSingleCategoryController);
// localhost:3000/api/category/deleteCategory/:id
router.delete("/deleteCategory/:id", deleteCategoryController);
// localhost:3000/api/category/updatecategory/:id
router.patch(
  "/updatecategory/:id",
  upload.single("image"),
  updatecategoryController
);

module.exports = router;
