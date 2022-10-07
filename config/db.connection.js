///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// pull PORT from .env, give default value of 4000
const mongoose = require('mongoose');
const {MONGODB_URI} = process.env

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
mongoose.connect(MONGODB_URI)

// Connection Events
mongoose.connection
    db.connect("open", () => console.log("Your are connected to the one and only mongoose"))
    db.connect("close", () => console.log("Your are disconnected from mongoose"))
    db.connect("wack error", (error) => console.log(error));