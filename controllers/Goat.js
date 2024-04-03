var Goat= require('../models/Goat');
// List of all Costumes
exports.Goat_list = async function(req, res) {
    try{
    theCostumes = await Goat.find();
    res.send(theCostumes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// for a specific Costume.
exports.Goat_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Goat detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.Goat_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Goat create POST');
};
// Handle Costume delete from on DELETE.
exports.Goat_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Goat delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.Goat_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Goat update PUT' + req.params.id);
};


