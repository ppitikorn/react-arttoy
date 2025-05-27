// models/Category.js
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    }
  },
  {
    timestamps: true,
  }
);


const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
