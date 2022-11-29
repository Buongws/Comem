import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import logo from "../../assets/image/logo_co_mem_1565603099.png";

import { FaShoppingBag, FaUser, FaBars } from "react-icons/fa";

import { userIcon } from "../../assets/image/indexSlide";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "../../index.css";
import { cartSliceAction } from "../../redux/cartSlice";
import { links } from "../../assets/data/links";
import useAuth from "../../custom-hooks/useAuth";

import { signOut } from "firebase/auth";

import { auth } from "../../firebase";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
const Header = () => {
  const headerRef = useRef(null);

  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { opensiderBarContent, quantity, openButtonLogInContent, originalDatas } = useSelector(
    (store) => store.cart
  );

  const onToggleChangeLogIn = () => {
    dispatch(cartSliceAction.toggleButtonLogin(openButtonLogInContent));
  };

  const onToggleChangeSideBar = () => {
    dispatch(cartSliceAction.toggleSideBarOpen(opensiderBarContent));
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Đăng xuất thành công", {
          position: "bottom-left",
        });
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
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
          <div className="header-nav-links max-xl:hidden">
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
            <div className="flex relative mr-[20px] ">
              <img
                onClick={onToggleChangeLogIn}
                className="h-[45px] w-[45px] rounded-full cursor-pointer"
                alt="photoImg"
                src={currentUser && currentUser.photoURL ? currentUser.photoURL : userIcon}
              />
              <div
                onClick={onToggleChangeLogIn}
                className={`block ${
                  openButtonLogInContent
                    ? "absolute top-[145%] left-0 flex flex-col z-20 text-[#738136] bg-white shadow-2xl cursor-pointer"
                    : "hidden"
                }`}
              >
                {currentUser ? (
                  <span
                    className="p-[15px] w-[165px] font-semibold hover:bg-[#b9bea1] transition-all hover:text-white"
                    onClick={logout}
                  >
                    Đăng Xuất
                  </span>
                ) : (
                  <div className="flex flex-col w-[165px] ">
                    <Link
                      className="p-[15px] border-b-[1px] border-dotted font-semibold hover:bg-[#b9bea1] transition-all hover:text-white"
                      to="/login"
                    >
                      Đăng nhập
                    </Link>
                    <Link
                      className="p-[15px] font-semibold hover:bg-[#b9bea1] transition-all hover:text-white"
                      to="/register"
                    >
                      Đăng kí
                    </Link>
                  </div>
                )}
              </div>
              {/* <Link to="/login">
                <button type="button" className="mr-[30px] ">
                  <FaUser className="text-white w-[28px] h-[28px] " />
                </button>
              </Link> */}
              {/* <button type="button">
                <FaUserMinus className="text-white w-[28px] h-[28px] " />
              </button> */}
            </div>
            <button
              className={`hidden max-xl:block ${opensiderBarContent ? "max-lg:block" : "hidden"}`}
              onClick={onToggleChangeSideBar}
            >
              <FaBars className="text-white w-[28px] h-[28px] " />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#626c13] relative max-xl:hidden">
        <ul className="flex items-center justify-start pr-[20px] pl-[20px] max-w-[80%] w-[100%] m-auto">
          {originalDatas
            .reduce((pre, val, i) => {
              const checkExistCategory = pre.findIndex((it) => it.category === val.category);

              if (checkExistCategory === -1) {
                pre.push({ category: val.category });
                return pre;
              }

              return pre;
            }, [])
            .map((c, index) => {
              return (
                <li className="pr-[30px] mb-[1px] mt-[1px]" key={index}>
                  <Link className="nav-links nav-link-ltr" to="/products">
                    {c.category}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
