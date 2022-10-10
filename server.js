///////////////////////////////
// DEPENDENCIES
////////////////////////////////

require("dotenv").config();

const mongoose = require('mongoose');
const express = require("express");
const { PORT, MONGODB_URI } = process.env || 4000;
// product router
const productController = require('./controllers/product-controller')
//const authController = require('./controllers/auth')

const cors = require("cors")
const morgan = require("morgan")
const app = express();


///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
mongoose.connect(MONGODB_URI);

// Connection Events
mongoose.connection
    .on("open", () => console.log("Your are connected to the one and only mongoose"))
    .on("close", () => console.log("Your are disconnected from mongoose:'("))
    .on("wack error", (error) => console.log(error));

///////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(express.json()); // parse json bodies - this will run before our request accesses the people router
app.use(cors());app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging for development

// all requests for endpoints that begin with '/product'
app.use('/product', productController)



	///////////////////////////////
	// ROUTES
	////////////////////////////////
	// create a test route
	app.get("/", (req, res) => {
    res.send("MountainxSea");
	});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
