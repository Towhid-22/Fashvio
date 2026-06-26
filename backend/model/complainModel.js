const mongoose = require("mongoose");

const complainSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    subject: {
      type: String,
      required: [true, "Subject is required"],
    },
    details: {
      type: String,
      required: [true, "Details are required"],
    },
  },
  {
    timestamps: true,
  },
);
module.exports = mongoose.model("Complain", complainSchema);
