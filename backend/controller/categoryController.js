const categoryModel = require("../model/categoryModel");
const slugify = require("slugify");
const fs = require("fs");
const path = require("path");

const addCategoryController = async (req, res) => {
  const { name } = req.body;

  const slug = slugify(name, {
    lower: true,
    replacement: "-",
  });
  try {
    const category = new categoryModel({
      name,
      slug,
      image: process.env.BASE_URL + "/" + req.file.filename,
    });
    await category.save();
    return res.status(200).json({
      success: true,
      message: "Category added successfully",
      data: category,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
const getCategoryController = async (req, res) => {
  try {
    const getCategory = await categoryModel
      .find()
      .sort({ createdAt: -1 })
      .populate("subcategory product");
    if (getCategory.length == 0) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Category fetched successfully",
      data: getCategory,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
const getSingleCategoryController = async (req, res) => {
  try {
    const { slug } = req.params;
    const slugname = slugify(slug, {
      lower: true,
      replacement: "-",
    });
    const singleCat = await categoryModel.findOne({ slug: slugname });
    if (!singleCat) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Category fetched successfully",
      data: singleCat,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCategory = await categoryModel.findByIdAndDelete(id);
    if (!deleteCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }
    const folderPath = path.join(__dirname, "../uploads");
    const fullImagePath = deleteCategory.image.split("/");
    const imagePath = fullImagePath[fullImagePath.length - 1];
    fs.unlink(`${folderPath}/${imagePath}`, (error) => {
      if (error) {
        return res.status(500).json({
          success: false,
          message: error.message || "Something went wrong",
        });
      } else {
        return res.status(200).json({
          success: true,
          message: "Category deleted successfully",
          data: deleteCategory,
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
const updatecategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const oldCategory = await categoryModel.findById(id);

    if (!oldCategory) {
      if (req.file) fs.unlinkSync(req.file.path);
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }
    const slug = slugify(name || oldCategory.name, {
      lower: true,
      replacement: "-",
    });
    let updateData = {
      name,
      slug,
    };
    if (req.file) {
      const filename = req.file.filename;
      const folderPath = path.join(__dirname, "../uploads");
      const fullImgPath = oldCategory.image.split("/");
      const imgPath = fullImgPath[fullImgPath.length - 1];
      fs.unlink(`${folderPath}/${imgPath}`, (error) => {
        if (error) {
          return res.status(500).json({
            success: false,
            message: error.message || "Something went wrong",
          });
        }
      });
      updateData.image = process.env.BASE_URL + "/" + filename;
    }
    const updateCat = await categoryModel.findOneAndUpdate(
      { _id: id },
      updateData,
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data: updateCat,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

module.exports = {
  addCategoryController,
  getCategoryController,
  getSingleCategoryController,
  deleteCategoryController,
  updatecategoryController,
};
