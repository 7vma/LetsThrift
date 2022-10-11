///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");

///////////////////////////////
// MODELS
////////////////////////////////
const ProductSchema = new mongoose.Schema({
    type: {type: String},
    brand: {type: String},
    image: {type: String, required: true},
    description: {type: String},
    condition: {type: String},
    price: {type: String, required: true},
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},
{timestamps: true});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product
