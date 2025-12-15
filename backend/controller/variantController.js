const variantModel = require("../model/variantModel");
const productModel = require("../model/productModel");
const fs = require("fs");
const path = require("path");
const { default: slugify } = require("slugify");
const random_otp = require("../helpers/random-otp");

const addVariantController = async (req, res) => {
  try {
    const { product, color, size, stock, price } = req.body;
    const sku = slugify(`${color}-${size}-${random_otp().slice(0, 4)}`, {
      lower: true,
      replacement: "-",
    });
    const addVariant = new variantModel({
      product,
      color,
      size,
      stock,
      price,
      sku,
      image: req.file && process.env.BASE_URL + "/" + req.file.filename,
    });
    const updateProduct = await productModel.findOneAndUpdate(
      {
        _id: product,
      },
      {
        $push: { variant: addVariant._id },
      },
      { new: true }
    );
    console.log(updateProduct);
    await addVariant.save();
    await updateProduct.save();
    return res.status(201).json({
      success: true,
      message: "Variant added successfully",
      data: addVariant,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const updateVariantController = async (req, res) => {
  try {
    const { id } = req.params;
    const { color, size, stock, price } = req.body;
    const sku = slugify(`${color}-${size}-${random_otp().slice(0, 4)}`, {
      lower: true,
      replacement: "-",
    });
    const oldVariant = await variantModel.findById(id);
    if (!oldVariant) {
      if (req.file) fs.unlinkSync(req.file.path);
      return res.status(404).json({
        success: false,
        message: "Variant not found",
      });
    }
    const updateData = { color, size, stock, price, sku };
    if (req.file) {
      const folderPath = path.join(__dirname, "../uploads");
      const imagePath = oldVariant.image.split("/");
      const fullImagePath = imagePath[imagePath.length - 1];
      fs.unlink(folderPath + "/" + fullImagePath, (error) => {
        if (error) {
          return res.status(500).json({
            success: false,
            message: error.message || "Something went wrong",
          });
        }
      });
      updateData.image = process.env.BASE_URL + "/" + req.file.filename;
    }
    const updateVariant = await variantModel.findOneAndUpdate(
      { _id: id },
      updateData,
      {
        new: true,
      }
    );
    return res.status(200).json({
      success: true,
      message: "Variant updated successfully",
      data: updateVariant,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const deleteVariantController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteVariant = await variantModel.findByIdAndDelete(id);
    if (!deleteVariant) {
      return res.status(404).json({
        success: false,
        message: "Variant not found",
      });
    }
    if (deleteVariant.image) {
      const folderPath = path.join(__dirname, "../uploads");
      const imagePath = deleteVariant.image.split("/");
      const fullImagePath = imagePath[imagePath.length - 1];
      fs.unlink(folderPath + "/" + fullImagePath, (error) => {
        if (error) {
          return res.status(500).json({
            success: false,
            message: error.message || "Something went wrong",
          });
        }
      });
    }
    await productModel.findOneAndUpdate(
      { variant: id },
      { $pull: { variant: id } },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Variant deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
const getVariantController = async (req, res) => {
  try {
    const getVariant = await variantModel.find();
    if (getVariant.length == 0) {
      return res.status(404).json({
        success: false,
        message: "Variant not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Variant fetched successfully",
      data: getVariant,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
module.exports = {
  addVariantController,
  updateVariantController,
  deleteVariantController,
  getVariantController,
};
