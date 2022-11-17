import React, { useState } from "react";

import { Link } from "react-router-dom";
import AmountButtons from "../ProductsPage/AmountButton";
import { useDispatch } from "react-redux";
import { cartSliceAction } from "../../redux/cartSlice";
const AddToCart = ({ product }) => {
  const { id, colors, max } = product;
  const [mainColor, setMainColor] = useState(colors);
  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(cartSliceAction.addToCart(product));
  };
  const increase = () => {
    setAmount((currentAmount) => {
      let increaseItem = currentAmount + 1;
      if (increaseItem > max) {
        increaseItem = max;
      }
      return increaseItem;
    });
  };

  const decrease = () => {
    setAmount((currentAmount) => {
      let decreaseItem = currentAmount - 1;

      if (decreaseItem < max) {
        decreaseItem = 1;
      }

      return decreaseItem;
    });
  };
  return (
    <main>
      <div className="colors ">
        <span className="mb-[30px]">Màu Sắc : </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                className={` mb-[20px] ${
                  mainColor === color
                    ? `bg-[#738136] cursor-pointer rounded-3xl mr-3  pt-[5px] pb-[5px] pl-[10px] pr-[10px] text-white `
                    : "bg-[#cfcfcf] cursor-pointer rounded-3xl mr-3  pt-[5px] pb-[5px] pl-[10px] pr-[10px] text-white "
                } `}
                onClick={() => setMainColor(color)}
              >
                {color}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons amount={amount} increase={increase} decrease={decrease} />
        <button onClick={() => handleAddToCart(product)}>
          <Link to="/cart" className="btn mt-[30px] mb-[30px]">
            Thêm Vào Giỏ
          </Link>
        </button>
      </div>
    </main>
  );
};

export default AddToCart;
