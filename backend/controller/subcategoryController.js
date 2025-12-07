const slugify = require("slugify");
const subcategoryModel = require("../model/subcategoryModel");
const categoryModel = require("../model/categoryModel");
const addSubcategoryController = async (req, res) => {
  try {
    const { name, category } = req.body;
    const slug = slugify(name, {
      lower: true,
      replacement: "-",
    });
    const addSubcategory = new subcategoryModel({
      name,
      slug,
      category,
    });
    await addSubcategory.save();
    const updateCategory = await categoryModel.findOneAndUpdate(
      {
        _id: category,
      },
      {
        $push: { subcategory: addSubcategory._id },
      },
      {
        new: true,
      }
    );
    await updateCategory.save();
    return res.status(200).json({ success: true, data: addSubcategory });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const getSubcategoryController = async (req, res) => {
  try {
    const getSubCategory = await subcategoryModel.find();
    if (getSubCategory.length == 0) {
      return res
        .status(404)
        .json({ success: false, message: "Subcategory not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Subcategory fetched successfully",
      data: getSubCategory,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const getSubCategoryByCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const getSubCategoryByCategory = await subcategoryModel.find({
      category: id,
    });
    if (getSubCategoryByCategory.length == 0) {
      return res
        .status(404)
        .json({ success: false, message: "Subcategory not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Subcategory fetched successfully",
      data: getSubCategoryByCategory,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const getSingleSubcategoryController = async (req, res) => {
  try {
    const { slug } = req.params;
    const slugname = slugify(slug, {
      lower: true,
      replacement: "-",
    });
    const singlesubcategory = await subcategoryModel.findOne({
      slug: slugname,
    });
    if (!singlesubcategory) {
      return res
        .status(404)
        .json({ success: false, message: "Subcategory not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Single Subcategory fetched successfully",
      data: singlesubcategory,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const deleteSubcategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteSubcategory = await subcategoryModel.findByIdAndDelete(id);
    if (!deleteSubcategory) {
      return res
        .status(404)
        .json({ success: false, message: "Subcategory not found" });
    }
    await categoryModel.findOneAndUpdate(
      {
        subcategory: id,
      },
      {
        $pull: { subcategory: id },
      },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Subcategory deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const updateSubcategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const slug = slugify(name, {
      lower: true,
      replacement: "-",
    });
    const updateSubcategory = await subcategoryModel.findByIdAndUpdate(
      id,
      {
        name,
        slug,
      },
      {
        new: true,
      }
    );
    return res.status(200).json({
      success: true,
      message: "Subcategory updated successfully",
      data: updateSubcategory,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
module.exports = {
  addSubcategoryController,
  getSubcategoryController,
  getSubCategoryByCategoryController,
  getSingleSubcategoryController,
  deleteSubcategoryController,
  updateSubcategoryController,
};
