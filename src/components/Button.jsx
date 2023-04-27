import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faTimes,
  faDivide,
  faMinus,
  faEquals,
} from "@fortawesome/free-solid-svg-icons";

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

  let icon;
  switch (label) {
    case "+":
      icon = <FontAwesomeIcon icon={faPlus} />;
      break;
    case "-":
      icon = <FontAwesomeIcon icon={faMinus} />;
      break;
    case "*":
      icon = <FontAwesomeIcon icon={faTimes} />;
      break;
    case "/":
      icon = <FontAwesomeIcon icon={faDivide} />;
      break;
    case "=":
      icon = <FontAwesomeIcon icon={faEquals} />;
      break;
    default:
      icon = label;
  }

  return (
    <button className={className} onClick={() => onClick(label, operation)}>
      {icon}
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
