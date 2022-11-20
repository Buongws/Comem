import React from "react";

const CartColumms = () => {
  return (
    <div className="pt-[80px] pb-[80px]">
      <div className="grid grid-cols-5 justify-items-center uppercase text-[#617d98] max-sm:hidden">
        <h4>item</h4>
        <h4>price</h4>
        <h4>quantity</h4>
        <h4>subtotal</h4>
        <span></span>
      </div>
      <hr className="mt-[1rem] mb-[3rem]" />
    </div>
  );
};

export default CartColumms;
