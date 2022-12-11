import { createSlice } from "@reduxjs/toolkit";

import { datas } from "../assets/data/data";

const initialState = {
  error: "",
  currentUser: null,
};

const AuthenticationSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
});

export const authenAction = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
