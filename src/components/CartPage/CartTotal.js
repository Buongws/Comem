import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartSliceAction } from "../../redux/cartSlice";
import { formatPrice } from "../../utils/Help";

import useAuth from "../../custom-hooks/useAuth";

const CartTotal = () => {
  const { amount, cartItems, total, fee } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { currentUser } = useAuth();
  const clearCartButton = () => {
    dispatch(cartSliceAction.clearCart());
  };
  return (
    <>
      {cartItems.length === 0 ? (
        0
      ) : (
        <div className="pt-[3rem] pb-[3rem] container-big">
          <hr />
          <div className="flex justify-between mt-[2rem]">
            <Link
              to="/products"
              className="p-[20px] text-[white] bg-[#e67e22] rounded-lg hover:bg-[#d26e16] transition-all delay-100 ease-in-out"
            >
              Tiếp tục mua hàng
            </Link>
            <div className="">
              <button
                onClick={clearCartButton}
                className="text-[#738136] p-[20px] bg-[#e7edd7] hover:bg-[#aab966] rounded-lg hover:text-white transition-all delay-100 ease-in-out"
              >
                Xóa giỏ hàng
              </button>
            </div>
          </div>
          <div className="flex justify-end pt-[3rem]">
            <article className="pt-[2rem] pb-[2rem] pr-[4rem] pl-[4rem] border">
              <h4 className="pt-[1rem] pb-[1rem] text-[25px]">
                Tổng giá trị đơn: <span className="font-bold pl-[1rem]">{formatPrice(total)}</span>
              </h4>
              <h5 className="pb-[10px] text-[25px]">
                {" "}
                Phí giao hàng: <span className="font-bold pl-[1rem]">{formatPrice(fee)}</span>
              </h5>
              <hr />
              <div className="pt-[20px] pb-[10px] text-[18px]">
                Tổng thanh toán:
                <span className="pl-[1rem] font-bold text-[30px] text-[#e67e22]">
                  {formatPrice(total + fee)}
                </span>
              </div>
              <div className="pl-[1rem] font-bold text-[30px] text-center">
                <button>
                  <Link to={`/${currentUser ? "checkout" : "login"}`} className="btn">
                    {currentUser ? "Thanh Toán" : "Đăng nhập để thanh toán"}
                  </Link>
                </button>
              </div>
            </article>
          </div>
        </div>
      )}
    </>
  );
};

export default CartTotal;
