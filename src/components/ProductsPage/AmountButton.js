import React from "react";

import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ amount, increase, decrease }) => {
  return (
    <main className="grid w-[150px] justify-center grid-cols-3 items-center">
      <button type="button" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button type="button" onClick={increase}>
        <FaPlus />
      </button>
    </main>
  );
};

export default AmountButtons;
