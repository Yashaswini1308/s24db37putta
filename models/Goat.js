const mongoose = require("mongoose")
const GoatSchema = mongoose.Schema({
Goat_color: {type:String,length:20},
Goat_breed: String,
Goat_price:{type:Number,min:2000,max:250000}
})
module.exports = mongoose.model("Goat",GoatSchema)