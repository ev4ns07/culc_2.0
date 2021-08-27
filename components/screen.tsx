import React from "react";

export const Screen = ({ leftNumber, operator, rightNumber }) => {
  return (
    <div className="bg-nektarin1 text-nektarin3 h-20 flex items-end w-full justify-end p-2 text-xl font-medium">
      {leftNumber} {operator} {rightNumber}
    </div>
  );
};
