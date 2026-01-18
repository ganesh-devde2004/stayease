const Listing = require("./modules/listing.js");
const Review = require("./modules/review.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema ,reviewSchema } = require("./schema");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()){
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "Plaese login in to manage listings");
    return res.redirect("/login");
  }
  return next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  return next();
};

module.exports.isOwner = async (req, res, next) => {
  let id = req.params.id;
  let listing = await Listing.findById(id);
  if(!listing){
    req.flash("error","Listing not found");
    return res.redirect("/listings");
  }
  if (!listing.owner.equals(res.locals.userLog._id)) {
    req.flash("error", "Access denied Only the listing owner can perform this action.");
    return res.redirect(`/listings/${listing.id}`);
  }
  
  return next();
};

module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
  
};

module.exports.validateReviews = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
  
};

module.exports.isAuthor = async (req, res, next) => {
let {id,reviewId} = req.params;
  let review = await Review.findById(reviewId);
  if (!review.author.equals(res.locals.userLog._id)) {
    req.flash("error", "Only the author of a review can remove it.");
    return res.redirect(`/listings/${id}`);
  }
  
  return next();
};