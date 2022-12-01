import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartColumms from "./CartColumms";
import { bgEmpty } from "../../assets/image/indexSlide";
import CartItem from "./CartItem";

const CartContent = () => {
  const { cartItems, amount } = useSelector((store) => store.cart);

  return (
    <>
      {cartItems.length === 0 ? (
        <div className=" pt-[3rem] pb-[3rem] flex justify-center items-center flex-col container overflow-hidden">
          <div className="overflow-hidden ">
            <Link to="/">
              <img
                src={bgEmpty}
                alt="img"
                className="h-[500px] w-[600] hover:scale-[110%] transition delay-75 duration-300"
              />
            </Link>
          </div>

          <h4 className="pb-[2rem] pt-[2rem]">Bạn chưa có sản phẩm nào trong giỏ hàng</h4>
          <button className="btn">
            <Link to="/products">Tiếp tục mua hàng</Link>
          </button>
        </div>
      ) : (
        <article className="container-big">
          <CartColumms />
          {cartItems.map((item, index) => {
            return <CartItem key={index} {...item} />;
          })}
        </article>
      )}
    </>
  );
};

export default CartContent;
