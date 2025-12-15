const { default: slugify } = require("slugify");
const productModel = require("../model/productModel");
const categoryModel = require("../model/categoryModel");
const subcategoryModel = require("../model/subcategoryModel");
const fs = require("fs");
const path = require("path");

const addProductController = async (req, res) => {
  try {
    const { name, description, price, category, subcategory, quantity } =
      req.body;
    const slug = slugify(name, {
      lower: true,
      replacement: "-",
    });
    const addProduct = new productModel({
      name,
      description,
      price,
      category,
      subcategory,
      quantity,
      slug,
      image: process.env.BASE_URL + "/" + req.file.filename,
    });
    await addProduct.save();
    const updateCategory = await categoryModel.findOneAndUpdate(
      {
        _id: category,
      },
      {
        $push: { product: addProduct._id },
      },
      {
        new: true,
      }
    );
    const updateSubcategory = await subcategoryModel.findOneAndUpdate(
      {
        _id: subcategory,
      },
      {
        $push: { product: addProduct._id },
      },
      {
        new: true,
      }
    );
    await updateCategory.save();
    await updateSubcategory.save();
    return res.status(200).json({
      success: true,
      message: "Product added successfully",
      data: addProduct,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const getProductController = async (req, res) => {
  try {
    const getAllProduct = await productModel.find().populate("variant")
    if (getAllProduct.length == 0) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: getAllProduct,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const getSingleProductController = async (req, res) => {
  try {
    const { slug } = req.params;
    const slugname = slugify(slug, {
      lower: true,
      replacement: "-",
    });
    const singleProduct = await productModel.findOne({ slug: slugname });
    if (!singleProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Single Product fetched successfully",
      data: singleProduct,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      price,
      category,
      subcategory,
      quantity,
      isFeature,
    } = req.body;
    const slug = slugify(name, {
      lower: true,
      replacement: "-",
    });
    const oldProduct = await productModel.findById(id);
    if (!oldProduct) {
      if (req.file) fs.unlinkSync(req.file.path);
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    const updateData = {
      name,
      description,
      price,
      category,
      subcategory,
      quantity,
      isFeature,
      slug,
    };
    if (req.file) {
      const filename = req.file.filename;
      const folderPath = path.join(__dirname, "../uploads");
      const imagePath = oldProduct.image.split("/");
      const image = imagePath[imagePath.length - 1];
      fs.unlink(`${folderPath}/${image}`, (error) => {
        if (error) {
          return res.status(500).json({
            success: false,
            message: error.message || "Something went wrong",
          });
        }
      });
      updateData.image = process.env.BASE_URL + "/" + filename;
    }
    const updateProduct = await productModel.findOneAndUpdate(
      { _id: id },
      updateData,
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updateProduct,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await productModel.findOneAndDelete({ _id: id });
    if (!deleteProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    const folderPath = path.join(__dirname, "../uploads");
    const imagepath = deleteProduct.image.split("/");
    const fullImgPath = imagepath[imagepath.length - 1];
    fs.unlink(folderPath + "/" + fullImgPath, (error) => {
      if (error) {
        return res.status(500).json({
          success: false,
          message: error.message || "Somethong went wrong",
        });
      }
    });
    await categoryModel.findOneAndUpdate(
      { product: id },
      {
        $pull: { product: id },
      },
      {
        new: true,
      }
    );
    await subcategoryModel.findOneAndUpdate(
      { product: id },
      {
        $pull: { product: id },
      },
      {
        new: true,
      }
    );
    return res
      .status(200)
      .json({ success: true, message: "Product delete successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  addProductController,
  getProductController,
  getSingleProductController,
  updateProductController,
  deleteProductController,
};
