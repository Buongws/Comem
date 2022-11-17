import { createSlice } from "@reduxjs/toolkit";

import { datas } from "../assets/data/data";

const initialState = {
  cartItems: [],
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
    addToCart(state, action) {
      const tempItem = state.cartItems.findIndex((i) => i.id === action.payload.id);

      if (tempItem >= 0) {
        state.cartItems[tempItem].cartQuantity += 1;
      } else {
        console.log(tempItem);
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
    },
  },
});

// console.log(cartSlice);

export const cartSliceAction = cartSlice.actions;

export default cartSlice.reducer;
