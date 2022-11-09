import { createSlice } from "@reduxjs/toolkit";

import { datas } from "../assets/data/data";

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
    max_price: 0,
    price: 0,
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
      state.filters.text = action.payload.text || state.filters.text;
      state.filters.brand = action.payload.brand || state.filters.brand;

      console.log(state.filters.brand, state.filters.category, state.filters.text);

      let tempFilter = [];
      //filter input search
      tempFilter = state.originalData.filter((product) => {
        return product.name.toLowerCase().includes(state.filters.text);
      });

      //filter category
      if (state.filters.category.toLowerCase() !== "all") {
        tempFilter = tempFilter.filter((it) => it.category === state.filters.category);
        console.log(tempFilter);
      }

      // filter brand
      if (state.filters.brand.toLowerCase() !== "all") {
        tempFilter = tempFilter.filter((it) => it.brand === state.filters.brand);
        console.log(tempFilter);
      }
      // tempFilter = tempFilter.filter(
      //   (it) => it.brand.toLowerCase() === state.filters.brand.toLowerCase()
      // );
      // if (state.filters.brand.toLowerCase() !== "all") {
      //   tempFilter = state.originalData.filter((i) => {
      //     return i.brand.toLowerCase() === state.filters.brand.toLowerCase();
      //   });
      // }

      // if (state.filters.brand.toLowerCase() !== "all") {
      //   tempFilter = tempFilter.filter((it) => it.brand === state.brand.category);
      //   console.log(tempFilter);
      // }

      state.filteredProducts = tempFilter;
    },
  },
});

export const cartFilterActions = filterSlice.actions;

export default filterSlice.reducer;
