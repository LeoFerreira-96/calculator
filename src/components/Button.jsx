import React from "react";
import "./Button.css";

const Buttom = ({ operation, double, triple, label, click }) => {
  let classes = "button";
  classes += operation ? " operation" : "";
  classes += double ? " double" : "";
  classes += triple ? " triple" : "";
  return (
    <button onClick={(e) => click(label, operation)} className={classes}>
      {label}
    </button>
  );
};

export default Buttom;
