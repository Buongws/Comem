import React from "react";

import { FaStore } from "react-icons/fa";
import "../../index.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-site">
        <div className="container">
          <div className="footer-main grid gap-10 grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <div className="footer-content  mr-[15px]">
              <div>
                <h5 className="pb-[5px] uppercase font-bold text-white">Về Cỏ Mềm</h5>
                <ul>
                  <li>
                    <a href="/">Chuyện của Cỏ</a>
                  </li>
                  <li>
                    <a href="/">Về nhà máy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content  mr-[15px]">
              <div>
                <h5 className="pb-[5px] uppercase font-bold text-white">Hoạt động cộng đồng</h5>
                <ul>
                  <li>
                    <a href="/">Xây trường cho trẻ em</a>
                  </li>
                  <li>
                    <a href="/">Đôi bàn tay thơm</a>
                  </li>
                  <li>
                    <a href="/">Chung tay phòng chống COVID</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content  mr-[15px]">
              <div>
                <h5 className="pb-[5px] uppercase font-bold text-white">Hướng Dẫn Mua Hàng</h5>
                <ul>
                  <li>
                    <a href="/">Chính sách mua hàng và thanh toán</a>
                  </li>
                  <li>
                    <a href="/">Chính sách bảo hành</a>
                  </li>
                  <li>
                    <a href="/">Chính sách đổi trả và hoàn tiền</a>
                  </li>
                  <li>
                    <a href="/">Chính sách bảo mật thông tin</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content  mr-[15px]">
              <div>
                <h5 className="pb-[5px] uppercase font-bold text-white">Thông tin liên hệ</h5>
                <ul>
                  <li>
                    <a href="/">cskh@comem.vn</a>
                  </li>
                  <li>
                    <a href="/">1800.999.999</a>
                  </li>
                </ul>

                <div className="box-footer flex bg-[orange] rounded-lg max-w-[225px] ">
                  <div className="store-icon bg-[#626c13] h-[50px] w-[50px] rounded-l-lg flex items-center justify-center ">
                    <FaStore className="w-[28px] h-[28px] text-white" />
                  </div>
                  <div className="flex items-center justify-center font-bold pr-[5px] pl-[5px]">
                    Hệ thống cửa hàng
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
