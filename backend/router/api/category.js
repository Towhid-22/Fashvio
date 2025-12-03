const express = require("express");
const {
  addCategoryController,
  getCategoryController,
} = require("../../controller/categoryController");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const extensionName = file.mimetype.split("/");
    const imgOrgName = file.originalname.split(".")[0].replace(/\s+/g, "-");
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        "-" +
        imgOrgName +
        "." +
        extensionName[extensionName.length - 1]
    );
  },
});
// Check file type
function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif|webp|mp4/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images only! (jpeg, jpg, png, gif)");
  }
}

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

// localhost:3000/api/category/addCategory
router.post("/addCategory", upload.single("image"), addCategoryController);
// localhost:3000/api/category/get-category
router.get("/get-category", getCategoryController);

module.exports = router;
