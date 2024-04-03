var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var costume_controller = require('../controllers/Goat');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/Goat', costume_controller.Goat_create_post);
// DELETE request to delete Costume.
router.delete('/Goat/:id', costume_controller.Goat_delete);
// PUT request to update Costume.
router.put('/Goat/:id', costume_controller.Goat_update_put);
// GET request for one Costume.
router.get('/Goat/:id', costume_controller.Goat_detail);
// GET request for list of all Costume items.
router.get('/Goat', costume_controller.Goat_list);
module.exports = router;