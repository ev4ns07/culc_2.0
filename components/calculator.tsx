import React, { useState } from "react";
import { Screen } from "./screen";
import { Keyboard } from "./keyboard";

export const Calculator = () => {
  const [leftNumber, setLeftNumber] = useState(0);
  const [rightNumber, setRightNumber] = useState(0);
  const [operator, setOperator] = useState("");
  const onNumberClick = (num: number) => {
    console.log(num);
    setRightNumber((prevNum) => {
      return parseInt(`${prevNum}${num}`, 10);
    });
  };
  const onOperatorClick = (op: string) => {
    console.log(op);
    switch (op) {
      case "C":
        setRightNumber(0);
        setLeftNumber(0);
        setOperator("");
        break;

      case "-":
        setOperator(op);
        break;

      case "+":
        setOperator(op);
        setLeftNumber(rightNumber);
        setRightNumber(0);
        break;

      case "=":
        setOperator(op);
        break;
    }
  };

  return (
    <div className="flex flex-col rounded overflow-hidden shadow-2xl">
      <Screen
        rightNumber={rightNumber}
        operator={operator}
        leftNumber={leftNumber}
      />
      <Keyboard
        onNumberClick={onNumberClick}
        onOperatorClick={onOperatorClick}
      />
    </div>
  );
};
