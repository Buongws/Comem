import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo_co_mem_1565603099.png";

import { links } from "../../assets/data/links";
const Header = () => {
  return (
    <header className="relative top-0 left-0 right-0 bg-[url('/src/assets/image/background.jpg')]">
      <div className="nav-center pt-[10px] pb-[10px]">
        <div className="header-top flex items-center justify-between pr-[20px] pl-[20px] ">
          <div className="header-logo">
            <Link to="/" className="">
              <img className=" w-[200px]" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="header-nav-links">
            <ul className="flex">
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id} className="text-white m-[20px]">
                    <Link to={url}>{text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <Link to="/cart" className="cart-btn flex items-center w-[225px] ">
              cart
              <span className="cart-container flex items-center relative ">
                <i class="ri-shopping-cart-line"></i>
                <span className="cart-value absolute top-[-10px] right-[-18px] w-[16px] h-[16px] flex items-center justify-center bg-orange-300 rounded-full p-[15px] text-xs opacity-50 text-white">
                  15
                </span>
              </span>
            </Link>
          </div>
        </div>
        <div className="header-item"></div>
      </div>
    </header>
  );
};

export default Header;
