import React from "react";

const FlexGrid = () => {
  return (
    <div className="mx-auto max-w-[1580px] px-4 mt-6">
      <div className="flex gap-3 flex-wrap itecms-center justify-center">
        <div className="bg-green-300 size-40 p-2">01</div>
        <div className="bg-green-300 w-40 h-40 p-2">02</div>
        <div className="bg-green-300 w-40 grow-0 h-40 p-2">03</div>
        <div className="bg-green-300 w-40 grow-3 h-40 p-2">04</div>
        <div className="bg-green-300 w-40 h-40 p-2">05</div>
        <div className="bg-green-300 w-40 h-40 p-2">06</div>
      </div>
    </div>
  );
};

export default FlexGrid;
