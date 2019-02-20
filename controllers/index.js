// 'use strict';

// var express = require('express');
// var router = express.Router();
// var Product = require('../models/product.js');


// router.get('/', function (req, res) {
//     Product .find({}) .where('saved').equals(false) .where('deleted').equals(false)
//         .sort('-date')
//         .limit(10) .exec(function (error, product) {
//             if (error) {
//                 console.log(error);
//                 res.status(500);
//             } else {
//                 console.log(product);
//                 let hbsObj = {
//                     title: 'Face Products',
//                     product: product
//                 };
//                 res.render('index', hbsObj);
//             }
//         });
// });



// router.use('/api', require('./api'));
// module.exports = router;