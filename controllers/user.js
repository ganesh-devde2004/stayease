const { model } = require("mongoose");
const User = require("../modules/user.js");

module.exports.renderSignupfrom = (req, res) => {
  res.render("./user/signup.ejs");
};

module.exports.createAccount = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    let newUser = new User({
      username,
      email,
    });
    let registerUser = await User.register(newUser, password);
    console.log(registerUser);
    req.login(registerUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash(
        "success",
        `Welcome to StayEase! ${newUser.username} Your journey to great stay begins here.`
      );
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("error", e.message);
    return res.redirect("/signup");
  }
};

module.exports.renderLoginForm = (req, res) => {
  res.render("./user/login.ejs");
};

module.exports.loginAccount = async (req, res) => {
  req.flash("success", "Welcome back to Stayease");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

module.exports.logoutAccount = (req, res) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You're now logged out. See you again soon!");
    res.redirect("/listings");
  });
};
