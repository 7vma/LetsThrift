///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");

///////////////////////////////
// MODELS
////////////////////////////////
const ProductSchema = new mongoose.Schema({
    type: String,
    brand: String,
    image: String,
    description: String,
    condition: String,
    price: String,
},{
    timestamps: true});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product
