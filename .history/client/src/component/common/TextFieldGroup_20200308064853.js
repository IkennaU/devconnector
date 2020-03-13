import React from "react";
import clasnames from "classnames";
import PropTypes from "prop-types";

function TextFieldGroup({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) {
  return (
    <div className="form-group">
      <input
        type={type}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {errors && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

export default TextFieldGroup;
