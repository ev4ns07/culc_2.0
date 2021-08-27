import React from "react";
import { BackspaceIcon } from "@heroicons/react/outline";

const Button: React.FC<{ onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center h-12 w-12 hover:bg-nektarin3 transition-colors delay-60 text-lg"
    >
      {children}
    </button>
  );
};

export const Keyboard = ({ onNumberClick, onOperatorClick }) => {
  return (
    <div className="bg-nektarin2 text-white">
      <div className="flex">
        <Button onClick={() => onOperatorClick("C")}>C</Button>
        <Button onClick={() => onOperatorClick("%")}>%</Button>
        <Button onClick={() => onOperatorClick("/")}>/</Button>
        <Button onClick={() => onOperatorClick("x")}>x</Button>
      </div>
      <div className="flex">
        <div>
          <div className="flex">
            <Button onClick={() => onNumberClick(7)}>7</Button>
            <Button onClick={() => onNumberClick(8)}>8</Button>
            <Button onClick={() => onNumberClick(9)}>9</Button>
          </div>
          <div className="flex">
            <Button onClick={() => onNumberClick(4)}>4</Button>
            <Button onClick={() => onNumberClick(5)}>5</Button>
            <Button onClick={() => onNumberClick(6)}>6</Button>
          </div>
          <div className="flex">
            <Button onClick={() => onNumberClick(1)}>1</Button>
            <Button onClick={() => onNumberClick(2)}>2</Button>
            <Button onClick={() => onNumberClick(3)}>3</Button>
          </div>
          <div className="flex">
            <Button onClick={() => onNumberClick(0)}>0</Button>
            <Button onClick={() => onOperatorClick(".")}>.</Button>
            <Button onClick={() => onOperatorClick("del")}>
              <BackspaceIcon className="h-6" />
            </Button>
          </div>
        </div>
        <div>
          <Button onClick={() => onOperatorClick("-")}>-</Button>
          <Button onClick={() => onOperatorClick("+")}>+</Button>
          <Button onClick={() => onOperatorClick("=")}>=</Button>
        </div>
      </div>
    </div>
  );
};
