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
    current: "0",
  });

  const clearMemory = () => {
    setMemory({ ...memory, current: "0" });
  };

  const setOperation = (operation) => {
    if (memory.operation !== null) {
      calculate();
    }
    setMemory({
      ...memory,
      operation: operation,
      firstValue: memory.current,
      clear: true,
    });
  };

  const appendDigit = (digit) => {
    if (memory.clear) {
      setMemory({ ...memory, current: digit, clear: false });
    } else {
      setMemory({
        ...memory,
        current: memory.current === "0" ? digit : memory.current + digit,
      });
    }
  };

  const appendDecimal = () => {
    if (memory.clear) {
      setMemory({ ...memory, current: "0.", clear: false });
    } else {
      setMemory({
        ...memory,
        current: memory.current.includes(".")
          ? memory.current
          : memory.current + ".",
      });
    }
  };

  const calculate = () => {
    let result;
    switch (memory.operation) {
      case "+":
        result = parseFloat(memory.firstValue) + parseFloat(memory.current);
        break;
      case "-":
        result = parseFloat(memory.firstValue) - parseFloat(memory.current);
        break;
      case "*":
        result = parseFloat(memory.firstValue) * parseFloat(memory.current);
        break;
      case "/":
        result = parseFloat(memory.firstValue) / parseFloat(memory.current);
        break;
      default:
        return;
    }
    setMemory({
      clear: true,
      operation: null,
      firstValue: result.toString(),
      secondValue: memory.current,
      current: result.toString(),
    });
  };

  return (
    <div className="calculator">
      <Display value={memory.current} />
      <Button label="AC" onClick={clearMemory} triple />
      <Button label="/" onClick={() => setOperation("/")} operation />
      <Button label="7" onClick={() => appendDigit("7")} />
      <Button label="8" onClick={() => appendDigit("8")} />
      <Button label="9" onClick={() => appendDigit("9")} />
      <Button label="*" onClick={() => setOperation("*")} operation />
      <Button label="4" onClick={() => appendDigit("4")} />
      <Button label="5" onClick={() => appendDigit("5")} />
      <Button label="6" onClick={() => appendDigit("6")} />
      <Button label="-" onClick={() => setOperation("-")} operation />
      <Button label="1" onClick={() => appendDigit("1")} />
      <Button label="2" onClick={() => appendDigit("2")} />
      <Button label="3" onClick={() => appendDigit("3")} />
      <Button label="+" onClick={() => setOperation("+")} operation />
      <Button label="0" onClick={() => appendDigit("0")} double />
      <Button label="." onClick={appendDecimal} />
      <Button label="=" onClick={calculate} operation />
    </div>
  );
};

export default Calculator;
