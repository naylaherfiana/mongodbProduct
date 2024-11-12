// models/productModel.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 255,
  },
  description: {
    type: String,
  },
  price: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  category_id: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Product", productSchema);
