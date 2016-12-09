var express = require('express');
var router = express.Router();
var d3 = require("d3");
var mongo = require('mongodb');
var db = require('monk')('localhost/commevents');
var companies = db.get('companyresults');
var format = d3.time.format("%Y-%m-%d");
var fs = require('fs');



/* GET home page. */
router.get('/', function(req, res, next) {

  var stgComapanies = []

  companies.find({}, {}, function (err, companies) {

      stgComapanies = companies

      console.info('test')
      console.info(stgComapanies)
      res.render('index', { title: 'Express'
                           ,companies: stgComapanies
      }
      );


  });





});

module.exports = router;
