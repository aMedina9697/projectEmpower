const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  product: { type: String, required: true },
  product_brand: { type: String, required: true },
  product_price: { type: Number, required: true },
  product_shade: { type: String, required: true },
  product_type: { type: String, required: true },
  product_note: { type: String, required: true }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
