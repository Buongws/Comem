import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import {
  Home,
  ProductsPage,
  Errorpage,
  AboutPage,
  CartPage,
  LoginPage,
  SingleProducts,
  CheckOut,
  ProtectedRouter,
} from "../pages/index";
import RegisterPage from "../pages/RegisterPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/checkout"
        element={
          <ProtectedRouter>
            <CheckOut />
          </ProtectedRouter>
        }
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="products/:id" element={<SingleProducts />} />
      <Route path="*" element={<Errorpage />} />
    </Routes>
  );
};

export default Routers;
