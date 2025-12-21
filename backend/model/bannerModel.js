const { default: mongoose } = require("mongoose");

const bannerSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, "Banner image is required"],
    },
    href: {
      type: String,
      required: [true, "Banner href is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Banner", bannerSchema);
