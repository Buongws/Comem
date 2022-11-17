import { createSlice } from "@reduxjs/toolkit";

import { datas } from "../assets/data/data";
import { findMaxPrice } from "../utils/Help";

const initialState = {
  originalData: datas,
  filteredProducts: datas,
  sort: "price-lowest",
  filters: {
    text: "",
    category: "all",
    brand: "all",
    colors: "all",
    min_price: 0,
    max_price: findMaxPrice(datas.map((it) => it.price)),
    price: findMaxPrice(datas.map((it) => it.price)),
    bestSeller: false,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    sortProducts(state, action) {
      state.sort = action.payload;
      console.log(action.payload);
      let tempProducts = [];

      switch (action.payload) {
        case "price-lowest":
          tempProducts = state.filteredProducts.sort((a, b) => {
            return a.price - b.price;
          });
          break;
        case "price-highest":
          tempProducts = state.filteredProducts.sort((a, b) => {
            return b.price - a.price;
          });
          break;
        case "a-z":
          tempProducts = state.filteredProducts.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          break;
        case "z-a":
          tempProducts = state.filteredProducts.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
          break;
        default:
          return state;
      }
      state.filteredProducts = tempProducts;
    },

    updateFiltersText(state, action) {
      state.filters.category = action.payload.category || state.filters.category;
      state.filters.text = action.payload.text || "";
      state.filters.brand = action.payload.brand || state.filters.brand;
      state.filters.bestSeller = action.payload.bestSeller || false;

      let tempFilter = [];

      //filter input search
      tempFilter = state.originalData.filter((product) => {
        return product.name.toLowerCase().includes(state.filters.text);
      });

      //filter category
      if (state.filters.category.toLowerCase() !== "all") {
        tempFilter = tempFilter.filter((it) => it.category === state.filters.category);
      }
      // filter brand
      if (state.filters.brand.toLowerCase() !== "all") {
        tempFilter = tempFilter.filter((it) => it.brand === state.filters.brand);
      }
      // Filter Best Seller
      if (action.payload.bestSeller) {
        tempFilter = tempFilter.filter((it) => {
          return it.bestSeller === false ? false : true;
        });
      }
      //  Filter Price
      state.filters.max_price = findMaxPrice(tempFilter.map((it) => it.price));
      state.filters.price = action.payload.price || state.filters.max_price;
      console.log(state.filters.max_price);

      if (state.filters.price > state.filters.max_price) {
        state.filters.price = state.filters.max_price;
      }

      tempFilter = tempFilter.filter(
        (item) =>
          Number(item.price) >= Number(state.filters.min_price) &&
          Number(item.price) <= Number(state.filters.price)
      );
      console.log(tempFilter);

      state.filteredProducts = tempFilter;
    },
    clearCart(state, action) {
      return initialState;
    },
  },
});

export const cartFilterActions = filterSlice.actions;

export default filterSlice.reducer;
