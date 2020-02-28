const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is Required...";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is Required...";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
