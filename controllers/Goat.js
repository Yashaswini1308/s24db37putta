var Goat= require('../models/Goat');
// List of all Goats
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
    
// for a specific Goat.
exports.Goat_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Goat.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
    
// Handle Goat create on POST.
exports.Goat_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Goat create POST');
};
// Handle Goat delete from on DELETE.
exports.Goat_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Goat delete DELETE ' + req.params.id);
};
// Handle Goat update form on PUT.
exports.Goat_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Goat update PUT' + req.params.id);
};

exports.Goat_view_all_Page = async function(req, res) {
    try{
    theCostumes = await Goat.find();
    res.render('Goat', { title: 'Goat Search Results', results: theCostumes });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // Handle Goat create on POST.
    exports.Goat_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Goat();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.Goat_color= req.body.Goat_color;
    document.Goat_breed = req.body.Goat_breed;
    document.Goat_price = req.body.Goat_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
    


