const { validationResult } = require("express-validator");
const checkValidation = (req, res, next) => {
  console.log("got to this point");
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
  } else {
    req.session.formBody = req.body;
    req.session.formErrors = errors.mapped();
    req.flash("danger", "there are errors in your form");
    res.redirect("back");
    console.log(req.session.formErrors);
    console.log(req.session.formBody);
  }
};
module.exports = checkValidation;
