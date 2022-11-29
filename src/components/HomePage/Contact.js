import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo_co_mem_1565603099.png";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Contact = () => {
  return (
    <main className=" bg-[#738136] border-b-[2px] divide-slate-200">
      <div className="container pt-[30px] pb-[30px] flex items-center justify-between max-lg:flex-wrap">
        <div>
          <form
            action="https://formspree.io/f/xeqdrdna"
            method="POST"
            className="w-[90vw] max-w-[500px] pt-[30px] "
            required
          >
            <input
              type="email"
              className="w-[60%] mr-[5%] p-[15px] rounded-xl "
              placeholder="Đăng kí email để nhận ưu đãi"
              name="_replyto"
            />
            <button type="submit" className="btn" name="fname">
              Đăng kí
            </button>
          </form>
        </div>
        <div className="header-logo">
          <Link to="/" className=" w-[165px] h-[60px] flex items-center justify-center">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="text-white text-center font-[500]">
          <span>
            MỸ PHẨM THIÊN NHIÊN <br /> LÀNH VÀ THẬT
          </span>
        </div>
        <div className="flex content-between cursor-pointer ">
          <FaFacebookSquare className="h-[42px] w-[42px] text-white" />
          <FaTwitterSquare className="h-[42px] w-[42px] text-white" />
          <FaInstagramSquare className="h-[42px] w-[42px] text-white" />
          <FaYoutubeSquare className="h-[42px] w-[42px] text-white" />
        </div>
      </div>
    </main>
  );
};

export default Contact;
