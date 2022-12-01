import React from "react";
import { formatPrice } from "../../utils/Help";
import AmountButton from "../ProductsPage/AmountButton";
import { useDispatch } from "react-redux";
import { cartSliceAction } from "../../redux/cartSlice";
import { AiFillDelete } from "react-icons/ai";
const CartItem = ({ id, image, name, colors, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-5 justify-items-center uppercase items-center pb-[50px] ">
      <div className="title grid grid-cols-2 gap-4">
        <img src={image[0]} alt={name} />
        <div>
          <h5 className="name text-[16px] text-center">{name}</h5>
          <p className="color text-[16px] mt-[20px] text-center">
            color : <span>{colors}</span>
          </p>
          <h5 className="price-small text-[20px] hidden">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price text-[20px]">{formatPrice(price)}</h5>

      <AmountButton amount={amount} id={id} colors={colors} />

      <h5 className="subtotal text-[20px]">{formatPrice(price * amount)} </h5>
      <span className="ml-[50px]">
        <button
          type="button"
          className="remove-btn p-[10px] bg-[red] text-white rounded-xl"
          onClick={() => {
            dispatch(cartSliceAction.removeItem(id, colors));
          }}
        >
          <AiFillDelete className="h-[30px] w-[30px] " />
        </button>{" "}
      </span>
    </div>
  );
};

export default CartItem;
