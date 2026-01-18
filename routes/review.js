const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../modules/review.js");
const Listing = require("../modules/listing.js");
const { validateReviews, isLoggedIn, isAuthor,saveRedirectUrl} = require("../middleware.js");
const reviewController = require("../controllers/review.js");


//review routes
//post
router.post(
  "/",
  isLoggedIn,
  validateReviews,
  wrapAsync(reviewController.createReview)
);

//review delete route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isAuthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
