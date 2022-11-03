import React from "react";
import { useSelector } from "react-redux";
import ProductsItems from "./ProductsItems";

const ProductsList = () => {
  const { cartItems } = useSelector((store) => store.cart);
  console.log(cartItems);
  return (
    <section className="pt-[30px]  grid grid-cols-4 gap-8 ">
      {cartItems.map((item) => {
        return <ProductsItems key={item.id} {...item} />;
      })}
    </section>
  );
};

export default ProductsList;
