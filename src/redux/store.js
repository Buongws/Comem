import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";

import filterReducer from "./cartFilter";

import authenReducer from "./Authentication";

import validateCheckoutReducer from "./ValidateCheckOut";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
    authen: authenReducer,
    validateCheckOut: validateCheckoutReducer,
  },
});

export default store;
