const express = require('express')
const router = express.Router()
const {Product} = require('../models')
const { handleValidateOwnership, requireToken } = require("../middleware/auth");
///////////////////////////////
// ROUTES
////////////////////////////////

// PRODUCT INDEX ROUTE
router.get("/", async (req, res, next) => {
	try {
	const allProducts = await Product.find().populate('owner', 'username -_id').exec()
		console.log("found:",allProducts)
		res.status(200).json(allProducts)
	} catch(err){
		res.status(404).json({error: err.message})
	}
});
// PRODUCT CREATE ROUTE
// POST api/product
router.post("/", requireToken, async (req, res, next) => {
	try {
    // create new person
	const owner = req.user._id
	req.body.owner = owner
const newProduct = await Product.create(req.body);
res.status(201).json(newProduct);
} catch (err) {
res.status(400).json({
	error: err.message,
});
}
});

// PRODUCT SHOW ROUTE
router.get("/:id", async (req, res, next) => {
	try {
		const foundProduct = await Product.findById(req.params.id)
		.populate("owner")
		.exec();
	  // your logging code
		res.status(200).json(foundProduct);
	} catch (err) {
		res.status(404).json({ error: err.message });
	}
});

// PRODUCT UPDATE ROUTE
// PUT api/product/5a7db6c74d55bc51bdf39793
// add requireToken after "/:id", 
router.put("/:id" , async (req, res) => {
	try {
		handleValidateOwnership(req, await Product.findById(req.params.id))
		const updatedProduct = await Product.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		)
		res.status(200).json(updatedProduct)
		} catch (error) {
		//send error
		res.status(400).json({error: error.message})
	}
})

  // PRODUCT DELETE ROUTE
  // DELETE api/product/5a7db6c74d55bc51bdf39793
  // add requireToken after "/:id", 
router.delete("/:id",async (req, res, next) => {
	try {
		handleValidateOwnership(req, await Product.findById(req.params.id));
		const deletedProduct = await Product.findByIdAndRemove(req.params.id);
		res.status(200).json(deletedProduct);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});



module.exports = router
