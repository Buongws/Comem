import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo_co_mem_1565603099.png";
import { FaShoppingBag, FaUser, FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "../../index.css";
import { cartSliceAction } from "../../redux/cartSlice";
import { links } from "../../assets/data/links";

const Header = () => {
  const headerRef = useRef(null);

  // const amount = useSelector((store) => store.cart.amount);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  //       headerRef.current.classList.add("header_shrink");
  //     } else {
  //       headerRef.current.classList.remove("header_shrink");
  //     }
  //   });
  // }, []);

  const { opensiderBarContent, quantity } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const onToggleChangeSideBar = () => {
    console.log(opensiderBarContent);
    dispatch(cartSliceAction.toggleSideBarOpen(opensiderBarContent));
  };
  return (
    <header
      className="relative top-0 left-0 right-0 bg-[url('/src/assets/image/background.jpg')]"
      ref={headerRef}
    >
      <div className="nav-center max-xl:p-[20px] ">
        <div className="header-top flex items-center justify-between pr-[20px] pl-[20px] max-w-[80%] w-[100%] m-auto ">
          <div className="header-logo">
            <Link to="/" className="  flex items-center justify-center">
              <img src={logo} alt="logo" className="w-[165px] h-[60px]" />
            </Link>
          </div>
          <div className="header-nav-links  max-xl:hidden">
            <ul className="flex">
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id} className="text-white ml-[30px] ">
                    <Link to={url} className="nav-links nav-link-ltr ">
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex justify-between items-center">
            <Link to="/cart" className="cart-btn flex items-center mr-[30px] ">
              <span className="cart-container flex items-center relative  ">
                <FaShoppingBag className="text-white w-[28px] h-[28px]" />
                <span className="cart-value absolute top-[-16px] right-[-18px] w-[16px] h-[16px] flex items-center justify-center bg-orange-300 rounded-full p-[15px] text-xs  text-white">
                  {quantity}
                </span>
              </span>
            </Link>
            <Link to="/login">
              <button type="button" className="mr-[30px] ">
                <FaUser className="text-white w-[28px] h-[28px] " />
              </button>
            </Link>
            <button
              className={`hidden max-xl:block ${opensiderBarContent ? "max-lg:block" : "hidden"}`}
              onClick={onToggleChangeSideBar}
            >
              <FaBars className="text-white w-[28px] h-[28px] " />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// max - xl: block
// hidden
