import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";

import filterReducer from "./cartFilter";

import authenReducer from "./Authentication";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
    authen: authenReducer,
  },
});

export default store;
