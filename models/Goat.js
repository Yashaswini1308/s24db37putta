const mongoose = require("mongoose")
const GoatSchema = mongoose.Schema({
Goat_color: String,
Goat_breed: String,
Goat_price: Number
})
module.exports = mongoose.model("Goat",GoatSchema)