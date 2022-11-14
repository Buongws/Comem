import { createSlice } from "@reduxjs/toolkit";

import { datas } from "../assets/data/data";

const initialState = {
  cartItems: datas,
  amount: 10,
  total: 0,
  opensiderBarContent: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleSideBarOpen(state, action) {
      state.opensiderBarContent = state.opensiderBarContent === false ? true : false;
    },
  },
});

// console.log(cartSlice);

export const cartSliceAction = cartSlice.actions;

export default cartSlice.reducer;
