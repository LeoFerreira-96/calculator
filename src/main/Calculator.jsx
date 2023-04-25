/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react";
import Button from "../components/Button";
import Display from "../components/Display";
import "./Calculator.css";

const Calculator = () => {
  const [memory, setMemory] = useState({
    clear: false,
    operation: null,
    firstValue: null,
    secondValue: null,
    current: 0,
  });

  const clearMemory = () => {
    setMemory({ ...memory });
  };

  const operation = (params) => {
    console.log(params);
  };

  const handleAdd = (label) => {
    setMemory({ ...memory, current: label });
  };

  return (
    <div className="calculator">
      <Display value={memory.current} />
      <Button label="AC" click={clearMemory} triple />
      <Button label="/" click={operation} operation />
      <Button label="7" click={handleAdd} />
      <Button label="8" click={handleAdd} />
      <Button label="9" click={handleAdd} />
      <Button label="*" click={operation} operation />
      <Button label="4" click={handleAdd} />
      <Button label="5" click={handleAdd} />
      <Button label="6" click={handleAdd} />
      <Button label="-" click={operation} operation />
      <Button label="1" click={handleAdd} />
      <Button label="2" click={handleAdd} />
      <Button label="3" click={handleAdd} />
      <Button label="+" click={operation} operation />
      <Button label="0" click={handleAdd} double />
      <Button label="." click={handleAdd} />
      <Button label="=" click={operation} operation />
    </div>
  );
};

export default Calculator;
