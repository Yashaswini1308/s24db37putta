var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Goat', { title: 'Search Results Goat' });
});

var express = require('express');
const Goat_controlers= require('../controllers/Goat');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
  if (req.user) {
      return next();
  }
  res.redirect("/login");
};

/* GET Goats */
router.get('/', Goat_controlers.Goat_view_all_Page );

/* GET detail Goat page */
router.get('/detail', Goat_controlers.Goat_view_one_Page);

/* GET create Goat page */
router.get('/create', Goat_controlers.Goat_create_Page);

/* GET update Goat page */
router.get('/update', secured, Goat_controlers.Goat_update_Page);

/* GET delete Goat page */
router.get('/delete', Goat_controlers.Goat_delete_Page);



module.exports = router;