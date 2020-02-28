const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Job Title field is Required...";
  }
  if (Validator.isEmpty(data.company)) {
    errors.company = "Company Name Field is Required...";
  }
  if (Validator.isEmpty(data.from)) {
    errors.from = "From Date field is Required...";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
