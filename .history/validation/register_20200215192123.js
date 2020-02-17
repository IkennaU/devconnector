const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 Characters";
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is Required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
