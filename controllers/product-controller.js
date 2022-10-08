const express = require('express')
const router = express.Router()

///////////////////////////////
// ROUTES
////////////////////////////////

// PRODUCT INDEX ROUTE
router.get("/", async (req, res) => {
	res.status(200).json({message: "product index route"})
});

// PRODUCT CREATE ROUTE
router.post("/", async (req, res) =>  {
	res.status(201).json({message: "product create route"})
});

module.exports = router
