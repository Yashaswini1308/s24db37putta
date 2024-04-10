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

/* GET detail Goat page */
router.get('/detail', Goat_controlers.Goat_view_one_Page);

/* GET create Goat page */
router.get('/create', Goat_controlers.Goat_create_Page);

/* GET create update page */
router.get('/update', Goat_controlers.Goat_update_Page);

/* GET delete Goat page */
router.get('/delete', Goat_controlers.Goat_delete_Page);



module.exports = router;