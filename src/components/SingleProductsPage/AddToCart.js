import React, { useState } from "react";

import { Link } from "react-router-dom";
import AmountButtonSinglePage from "../ProductsPage/AmountButtonSinglePage";
import { useDispatch } from "react-redux";
import { cartSliceAction } from "../../redux/cartSlice";
import { useSelector } from "react-redux";
const AddToCart = ({ product }) => {
  // const { cartItems } = useSelector((store) => store.cart);

  const { id, colors, amount } = product;

  const dispatch = useDispatch();

  return (
    <main>
      <div className="btn-container">
        <AmountButtonSinglePage amount={amount} id={id} colors={colors} />
      </div>
    </main>
  );
};

export default AddToCart;
