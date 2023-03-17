import React from "react";
import CartContent from "../components/CartPage/CartContent";
import CartTotal from "../components/CartPage/CartTotal";
import PageHero from "../components/Hero/PageHero";
const CartPage = () => {
  return (
    <div>
      <PageHero title=" Giỏ Hàng" />
      <CartContent />
      <CartTotal />
    </div>
  );
};

export default CartPage;
