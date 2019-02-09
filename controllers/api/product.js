'use strict';

var express = require('express'),
    router = express.Router(),
    request = require('request'),
    cheerio = require('cheerio'),
    Product = require('../../models/product');

    router.get('/', function (req, res) {
    Product
        .find({})
        .exec(function (error, docs) {
            if (error) {
                console.log(error);
                res.status(500);
            } else {
                res.status(200).json(docs);
            }
        });
},

function (req, res) {
    res.redirect('/');
});

module.exports = router;