import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";

import filterReducer from "./cartFilter";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
  },
});

export default store;
