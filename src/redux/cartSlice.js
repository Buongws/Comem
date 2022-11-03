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
});

// console.log(cartSlice);

export default cartSlice.reducer;
