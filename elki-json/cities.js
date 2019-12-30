const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET cities page. */
router.get('/cities', (req, res) => {
   var cities = [ 
       { "name": "Berlin"}, 
  	   { "name": "Minsk"},
       { "name": "London"}
  	];



module.exports = router;