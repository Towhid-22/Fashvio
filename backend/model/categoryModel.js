const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: [true, "Category name already exists"],
      required: [true, "Category name is required"],
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Category image is required"],
    },
    slug: {
      type: String,
      unique: [true, "Category slug already exists"],
      required: [true, "Category slug is required"],
    },
    subcategory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
