import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo_co_mem_1565603099.png";
import { FaShoppingBag, FaUser } from "react-icons/fa";
import "../../index.css";

import { links } from "../../assets/data/links";

const Header = () => {
  return (
    <header className="relative top-0 left-0 right-0 bg-[url('/src/assets/image/background.jpg')]">
      <div className="nav-center">
        <div className="header-top flex items-center justify-between pr-[20px] pl-[20px] max-w-[80%] w-[100%] m-auto">
          <div className="header-logo">
            <Link
              to="/"
              className=" w-[200px] h-[150px] flex items-center justify-center"
            >
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="header-nav-links">
            <ul className="flex">
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id} className="text-white m-[20px]">
                    <Link to={url} className="nav-links nav-link-ltr">
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
                  15
                </span>
              </span>
            </Link>
            <button type="button" className="mr-[30px] ">
              <FaUser className="text-white w-[28px] h-[28px]" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
