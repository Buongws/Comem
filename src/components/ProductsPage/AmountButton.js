import React from "react";

import { FaPlus, FaMinus } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import { cartSliceAction } from "../../redux/cartSlice";

const AmountButtons = ({ id, amount, colors }) => {
  const dispatch = useDispatch();

  return (
    <main className="grid w-[150px] justify-center grid-cols-3 items-center">
      <button
        type="button"
        onClick={() => {
          // if (amount === 1) {
          //   return dispatch(cartSliceAction.removeItem({ id, colors }));
          // }
          dispatch(cartSliceAction.removeItem({ id, colors, amount }));
        }}
      >
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button
        type="button"
        onClick={() => {
          dispatch(cartSliceAction.increase({ id }));
        }}
      >
        <FaPlus />
      </button>
    </main>
  );
};

export default AmountButtons;
