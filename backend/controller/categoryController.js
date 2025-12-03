const categoryModel = require("../model/categoryModel");
var slugify = require("slugify");

const addCategoryController = async (req, res) => {
  const { name } = req.body;

  const slug = slugify(name, {
    lower: true,
    replacement: "-",
  });
  try {
    const category = new categoryModel({
      name,
      image: process.env.BASE_URL + "/" + req.file.filename,
      slug,
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
    const getCategory = await categoryModel.find();
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
module.exports = { addCategoryController, getCategoryController };
