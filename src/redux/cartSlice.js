import { createSlice } from "@reduxjs/toolkit";

import { datas } from "../assets/data/data";
import CartItem from "../components/CartPage/CartItem";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
  originalDatas: datas,
  amount: 0,
  total: 0,
  quantity: 0,
  fee: 25000,
  opensiderBarContent: false,
  openButtonLogInContent: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleSideBarOpen(state, action) {
      state.opensiderBarContent = state.opensiderBarContent === false ? true : false;
    },
    toggleButtonLogin(state, action) {
      state.openButtonLogInContent = state.openButtonLogInContent === false ? true : false;
    },

    addToCart(state, action) {
      let isExistID = state.cartItems.findIndex(
        (item) => item.id === action.payload.id && item.colors === action.payload.colors
      );

      const tempItem = state.originalDatas.filter((item) => item.id === action.payload.id)[0];

      if (isExistID >= 0) {
        state.cartItems[isExistID].amount += action.payload.amount;

        toast.info("Tăng số lượng sản phẩm ", {
          position: "bottom-left",
        });
        if (state.cartItems.colors === action.payload.colors) {
          state.cartItems.amount = action.payload.amount;
        }
      } else {
        const tempProduct = {
          ...tempItem,
          amount: action.payload.amount,
          colors: action.payload.colors,
          id: action.payload.id + action.payload.colors,
        };
        console.log(tempProduct);
        state.cartItems.push(tempProduct);

        toast.success(`Đã thêm sản phẩm vào giỏ hàng`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeItem(state, action) {
      const itemID = action.payload;

      state.cartItems = state.cartItems.filter((item) => item.id !== itemID);

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.info(" Đã xóa sản phẩm khỏi giỏ hàng ", {
        position: "bottom-left",
      });
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);

      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);

      cartItem.amount = cartItem.amount - 1;
    },

    calculateTotals: (state) => {
      let quantity = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        quantity += item.amount;
        total += item.amount * item.price;
      });

      state.quantity = quantity;
      state.total = total;
    },
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

// console.log(cartSlice);

export const cartSliceAction = cartSlice.actions;

export default cartSlice.reducer;
