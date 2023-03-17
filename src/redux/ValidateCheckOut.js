import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  nameCard: "",
  numCard: "",
  yearCard: "",
  CVV: "",
  formErrors: {},
};

const formValidationSlice = createSlice({
  name: "formValidation",
  initialState,
  reducers: {
    updateFormField(state, action) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    validateForm(state) {
      // Create an errors object to store any validation errors
      const errors = {};

      // Validate each field and add an error to the errors object if invalid
      if (!state.username.trim()) {
        errors.username = "Họ tên không được để trống.!";
      }
      if (!state.email.trim()) {
        errors.email = "Email không được để trống!";
      } else if (!state.email.trim().includes("@")) {
        errors.email = "Sai định dạng email, hãy điền lại !";
      }
      if (!state.address.trim()) {
        errors.address = "Địa chỉ không được để trống";
      }
      if (!state.city.trim()) {
        errors.city = "Thành phố không được để trống";
      }
      if (!state.state.trim()) {
        errors.state = "Quốc Gia không được để trống";
      }
      if (!state.zipCode.trim()) {
        errors.zipCode = "Mã số vùng không được để trống";
      } else if (state.zipCode.trim().length !== 6) {
        errors.zipCode = "Mã số vùng chỉ có 6 kí tự ";
      }
      if (!state.nameCard.trim()) {
        errors.nameCard = "Tên chủ thẻ không được để trống";
      }
      if (!state.numCard.trim()) {
        errors.numCard = "Số thẻ thanh toán không được để trống";
      } else if (state.numCard.trim().length !== 16) {
        errors.numCard = "Số thẻ thanh toán phải có 16 kí tự";
      }
      if (!state.yearCard.trim() || state.yearCard.length !== 4) {
        errors.yearCard = "Năm sử dụng phải đúng định dạng";
      }
      if (!state.CVV.trim()) {
        errors.CVV = "CVV không được để trống";
      } else if (state.CVV.trim().length !== 3) {
        errors.CVV = "CVV chỉ có 3 kí tự";
      }

      // Update the formErrors field in the state with the errors object
      state.formErrors = errors;
    },
  },
});

export const validateCheckOutActions = formValidationSlice.actions;

export default formValidationSlice.reducer;
