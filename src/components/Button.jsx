import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ operation, double, triple, label, onClick }) => {
  let className = "button";
  if (operation) {
    className += " operation";
  }
  if (double) {
    className += " double";
  }
  if (triple) {
    className += " triple";
  }

  return (
    <button className={className} onClick={() => onClick(label, operation)}>
      {label}
    </button>
  );
};

Button.propTypes = {
  operation: PropTypes.bool,
  double: PropTypes.bool,
  triple: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
