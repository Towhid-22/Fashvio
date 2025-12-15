const { default: mongoose } = require("mongoose");

const variantSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
    stock: {
      type: Number,
      default: 0,
      required: true,
    },
    price: {
      type: Number, // override price if different from product
    },
    image: {
      type: String, // color-wise image
    },
    sku: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Variant", variantSchema);
