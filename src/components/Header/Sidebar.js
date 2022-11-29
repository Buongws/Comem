import React from "react";
import { Link } from "react-router-dom";
import { links } from "../../assets/data/links";
import { BsXLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { HiHome } from "react-icons/hi";
import { cartSliceAction } from "../../redux/cartSlice";
import { bgSideBar } from "../../assets/image/indexSlide";
import { FaShoppingBag, FaUser, FaBars } from "react-icons/fa";
import cn from "classnames";

const Sidebar = () => {
  const { opensiderBarContent, amount } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const onToggleChangeSideBar = () => {
    console.log(opensiderBarContent);
    dispatch(cartSliceAction.toggleSideBarOpen(opensiderBarContent));
  };

  return (
    <div
      className={cn(
        "bg-[black] h-[100vh] w-[40vw] xl:hidden fixed top-0 right-0 translate-x-full z-[99999] transition-transform duration-300",
        {
          "translate-x-0": opensiderBarContent,
        }
      )}
    >
      <div className="bg-[#92a052] w-full h-[100vh] relative border-l-2  shadow-2xl">
        <button
          className="absolute p-[10px] hover:text-[white] transition"
          onClick={onToggleChangeSideBar}
        >
          <BsXLg className="h-[30px] w-[25px]" />
        </button>
        <nav className="h-[100vh]  flex flex-col justify-between items-center">
          <div className="logo">
            <Link to="/" className="" onClick={onToggleChangeSideBar}>
              <img src={bgSideBar} alt="logo" className="" />
            </Link>
          </div>

          <div className="nav-title  ">
            <Link to="/" className="text-[30px] text-[white]" onClick={onToggleChangeSideBar}>
              <HiHome className="inline-block mb-[5px]  " /> Danh Mục
            </Link>
          </div>

          <ul className="flex flex-col">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id} className="text-white  ">
                  <Link
                    to={url}
                    className="nav-links nav-link-ltr "
                    onClick={onToggleChangeSideBar}
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="text-[30px] text-[white] font-semibold">Hỗ Trợ</div>
          <div className="text-[30px] text-[white] font-semibold">Đánh Giá</div>

          <ul>
            <div className="flex justify-between items-center p-[50px]">
              <Link
                to="/cart"
                className="cart-btn flex items-center mr-[30px]"
                onClick={onToggleChangeSideBar}
              >
                <span className="cart-container flex items-center relative  ">
                  <FaShoppingBag className="text-white w-[28px] h-[28px]" />
                  <span className="cart-value absolute top-[-16px] right-[-18px] w-[16px] h-[16px] flex items-center justify-center bg-orange-300 rounded-full p-[15px] text-xs  text-white">
                    {amount}
                  </span>
                </span>
              </Link>
              <button type="button" className="mr-[30px]" onClick={onToggleChangeSideBar}>
                <Link to="/cart">
                  <FaUser className="text-white w-[28px] h-[28px] " />
                </Link>
              </button>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
