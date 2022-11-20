import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartSliceAction } from "../../redux/cartSlice";
import { formatPrice } from "../../utils/Help";

const CartTotal = () => {
  const { amount, cartItems, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      {cartItems.length === 0 ? (
        0
      ) : (
        <div className="pt-[3rem] pb-[3rem] container-big">
          <hr />
          <div className="flex justify-between mt-[2rem]">
            <div className="p-[20px] text-[white] bg-[#e67e22] rounded-lg hover:bg-[#d26e16] transition-all delay-100 ease-in-out">
              <Link to="/products">Tiếp tục mua hàng</Link>
            </div>
            <div className="">
              <button className="text-[#738136] p-[20px] bg-[#e7edd7] hover:bg-[#aab966] rounded-lg hover:text-white transition-all delay-100 ease-in-out">
                Xóa giỏ hàng
              </button>
            </div>
          </div>
          <div className="flex justify-end pt-[3rem]">
            <article className="pt-[2rem] pb-[2rem] pr-[4rem] pl-[4rem] border">
              <h4>Tổng giá trị đơn: {formatPrice(total)}</h4>
              <h5 className="pb-[10px]"> Phí giao hàng: </h5>
              <hr />
              <button className="pt-[10px] pb-[10px]">Thanh Toán </button>
            </article>
          </div>
        </div>
      )}
    </>
  );
};

export default CartTotal;
