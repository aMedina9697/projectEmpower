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
  },
  {
    product: "Studio Fix Fluid",
  product_brand: "Sephora",
  product_price: 30.00,
  product_shade: "NC30",
  product_type: "Skin",
  product_note: ""
  },
  {
    product: "Exfoliating Skin Perfector",
  product_brand: "Glossier",
  product_price: 24.00,
  product_shade: "Regular",
  product_type: "Skin",
  product_note: ""
  },
  {
    product: "Aquamarina Face Wash",
  product_brand: "Lush",
  product_price: 12.95,
  product_shade: "14oz",
  product_type: "Skin",
  product_note: ""
  },
  {
    product: "All Nighter Setting Spray",
  product_brand: "Urban Decay",
  product_price:32.00,
  product_shade: "16oz",
  product_type: "Skin",
  product_note: ""
  },
  {
    product: "Naked Pallette",
  product_brand: "Urban Decay",
  product_price: 54.00,
  product_shade: "Naked 3",
  product_type: "Eyes",
  product_note: ""
  },
  {
    product: "Stay All Day",
  product_brand:"Stila" ,
  product_price: 22.00,
  product_shade: "True Black",
  product_type: "Eyes",
  product_note: ""
  },
  {
    product: "Shadow Insurance",
  product_brand: "Too Faced",
  product_price: 20.00,
  product_shade: "Anti-Crease",
  product_type: "Eyes",
  product_note: ""
  },
  {
    product: "Lash Wispies",
  product_brand: "Ardell",
  product_price: 14.95,
  product_shade: "Demi",
  product_type: "Eyes",
  product_note: ""
  },
  {
    product: "Powder Blush",
  product_brand: "Mac",
  product_price: 24.00,
  product_shade: "Desert Rose",
  product_type: "Cheek",
  product_note: ""
  },
  {
    product: "Butter Bronzer",
  product_brand: "Physicians Formula",
  product_price:14.99,
  product_shade: "Sunkissed",
  product_type: "Cheek",
  product_note: ""
  },
  {
    product: "The Cali Kit",
  product_brand: "Smashbox",
  product_price: 39.00,
  product_shade: "Contour Kit",
  product_type: "Cheek",
  product_note: ""
  },
  {
    product: "Shimmering Skin Protector",
  product_brand: "Becca",
  product_price:38.00,
  product_shade: "Champagne Pop",
  product_type: "Cheek",
  product_note: ""
  },
  {
    product: "Mineral Veil Finishing Powder",
  product_brand: "Bare Minerals",
  product_price: 24.00,
  product_shade: "Medium",
  product_type: "Cheek",
  product_note: ""
  },
  {
    product: "Brow Wiz",
  product_brand: "Anastasia Beverly Hills",
  product_price:21.00,
  product_shade: "Chocolate",
  product_type: "Eyebrows",
  product_note: ""
  },
  {
    product: "Brow Zings!",
  product_brand: "Benefit",
  product_price:38.00,
  product_shade: "01",
  product_type: "Eyebrows",
  product_note: ""
  },
  {
    product: "Brow Pop",
  product_brand: "Colour Pop",
  product_price: 6.00,
  product_shade: "Clear",
  product_type: "Eyebrows",
  product_note: ""
  },
  {
    product: "Stencils",
  product_brand: "Anastasia Beverly Hills",
  product_price:20.00,
  product_shade: "Sharp",
  product_type: "Eyebrows",
  product_note: ""
  },
  {
    product: "Lipstick Matte",
  product_brand: "Mac",
  product_price: 16.00,
  product_shade: "Ruby Woo",
  product_type: "Lips",
  product_note: ""
  },
  {
    product: "Lip Kit",
  product_brand: "Kylie",
  product_price: 14.99,
  product_shade: "Jordy",
  product_type: "Lips",
  product_note: ""
  },
  {
    product: "Shiny Sheer Lip Gloss",
  product_brand: "NYX",
  product_price: 9.00,
  product_shade: "Rome",
  product_type: "Lips",
  product_note: ""
  },
  {
    product: "Flower Balm",
  product_brand: "Winky Lux",
  product_price:14.00,
  product_shade: "Blue",
  product_type: "Lips",
  product_note: ""
  },
  {
    product: "24/7 Glide On Lip Pencil",
  product_brand: "Urban Decay",
  product_price:21.00,
  product_shade: "Manic",
  product_type: "Lips",
  product_note: ""
  },
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
