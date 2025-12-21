const bannerModel = require("../model/bannerModel");
const path = require("path");
const fs = require("fs");
const { get } = require("http");
const addBannerController = async (req, res) => {
  try {
    const { href } = req.body;
    const addBanner = new bannerModel({
      href,
      image: process.env.BASE_URL + "/" + req.file.filename,
    });
    await addBanner.save();
    return res.status(201).json({
      success: true,
      message: "Banner added successfully",
      data: addBanner,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const getBannerController = async (req, res) => {
  try {
    const getBanner = await bannerModel.find();
    if (getBanner.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Banner not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Banner fetched successfully",
      data: getBanner,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const deleteBannerController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBanner = await bannerModel.findByIdAndDelete(id);
    if (!deleteBanner) {
      return res
        .status(404)
        .json({ success: false, message: "Banner not found" });
    }
    const folderPath = path.join(__dirname, "../uploads");
    const imagePath = deleteBanner.image.split("/");
    const fullImagePath = imagePath[imagePath.length - 1];
    fs.unlink(folderPath + "/" + fullImagePath, (error) => {
      if (error) {
        return res.status(500).json({
          success: false,
          message: error.message || "Something went wrong",
        });
      }
    });
    return res.status(200).json({
      success: true,
      message: "Banner deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
module.exports = {
  addBannerController,
  deleteBannerController,
  getBannerController,
};
