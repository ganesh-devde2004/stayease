const express = require("express");
const router = express.Router();
const Listing = require("../modules/listing");

router.get("/category/:category", async (req, res) => {
  const { category } = req.params;
  const listings = await Listing.find({ category :category});
  res.render("listings/index.ejs", { allListing: listings });
  
});

module.exports = router