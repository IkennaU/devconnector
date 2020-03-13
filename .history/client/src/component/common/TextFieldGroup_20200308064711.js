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
  disable
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
        value={this.state.email}
        onChange={this.onChange.bind(this)}
      />
      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
    </div>
  );
}

export default TextFieldGroup;
