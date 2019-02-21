const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Products collection and inserts the products below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/products"
  //"mongodb://project3:password1@ds237955.mlab.com:37955/heroku_gszd7s48"
);

const productSeed = [
  {
    product: "Shape Tape",
  product_brand: "Tarte",
  product_price: 12.99,
  product_shade: "t1",
  product_type: "face",
  product_note: "good coverage"
  },
  {
    product: "Better than Sex",
  product_brand: "too Faced",
  product_price: 24.50,
  product_shade: "onyx",
  product_type: "eye",
  product_note: "clumpy, dries out too fast"
  }
];

db.Product
  .remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " products inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
