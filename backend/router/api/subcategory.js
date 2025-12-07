const express = require("express");
const {
  addSubcategoryController,
  getSubcategoryController,
  getSingleSubcategoryController,
  deleteSubcategoryController,
  updateSubcategoryController,
  getSubCategoryByCategoryController,
} = require("../../controller/subcategoryController");
const router = express.Router();
// localhost:3000/api/subcategory/add-subcategory
router.post("/add-subcategory", addSubcategoryController);
// localhost:3000/api/subcategory/get-subcategory
router.get("/get-subcategory", getSubcategoryController);
// localhost:3000/api/subcategory/get-subcategorybycategory/:id
router.get("/get-subcategorybycategory/:id", getSubCategoryByCategoryController);
// localhost:3000/api/subcategory/get-single-subcategory
router.get("/get-single-subcategory/:slug", getSingleSubcategoryController);
// localhost:3000/api/subcategory/delete-subcategory/:id
router.delete("/delete-subcategory/:id", deleteSubcategoryController);
// localhost:3000/api/subcategory/update-subcategory/:id
router.patch("/update-subcategory/:id", updateSubcategoryController);

module.exports = router;
