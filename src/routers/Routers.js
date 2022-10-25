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
} from "../pages/index";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="error" element={<Errorpage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="products/:id" element={<SingleProducts />} />
    </Routes>
  );
};

export default Routers;
