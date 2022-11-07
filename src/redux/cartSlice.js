import { createSlice } from "@reduxjs/toolkit";

import { datas } from "../assets/data/data";

const initialState = {
  cartItems: datas,
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

// console.log(cartSlice);

export const { sortProducts, sortGetValue } = cartSlice.actions;

export default cartSlice.reducer;
