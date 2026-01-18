const Listing = require("../modules/listing");

module.exports.index = async (req, res) => {
  const search = req.query.search;

  let allListing;

  if (search && search.trim() !== "") {
    allListing = await Listing.find({
      $or: [
        {
          title: { $regex: search, $options: "i" },
        },
        {
          location: { $regex: search, $options: "i" },
        },
        {
          country: { $regex: search, $options: "i" },
        },
      ],
    });
  } else {
    allListing = await Listing.find({});
  }

  res.render("listings/index.ejs", { allListing });
};

module.exports.renderNewForm = async (req, res) => {
  res.render("./listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let id = req.params.id;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing does not found.Please enter valid listing");
    return res.redirect("/listings");
  }
  res.render("./listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;
  let newListing = new Listing(req.body.listing);
  newListing.image = { url, filename };
  newListing.owner = req.user._id;
  await newListing.save();
  req.flash(
    "success",
    "Your listing has been successfully published on StayEase!",
  );
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let id = req.params.id;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing does not found.Please enter valid listing");
    return res.redirect("/listings");
  }
  res.render("./listings/edit.ejs", { listing });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, {
    ...req.body.listing,
  });
  if (req.file) {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Your listing has been updated successfully!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListings = async (req, res) => {
  let id = req.params.id;
  const deleteListing = await Listing.findByIdAndDelete(id);
  req.flash("success", "Your listing has been Deleted successfully!");
  res.redirect("/listings");
};
