'use strict';

var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

    router.get('/', function(req, res) {
        res.status(200).send();
    });

router.use('/product', require('./product'));



module.exports = router;