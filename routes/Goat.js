var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Goat', { title: 'Search Results Goat' });
});

var express = require('express');
const Goat_controlers= require('../controllers/Goat');
var router = express.Router();

/* GET Goats */
router.get('/', Goat_controlers.Goat_view_all_Page );

module.exports = router;