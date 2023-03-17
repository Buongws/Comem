import React from "react";
import "../../index.css";

import { FaPiggyBank, FaObjectGroup, FaCarAlt, FaBox } from "react-icons/fa";

const ShipCod = () => {
  return (
    <div className="ship bg-[#92a052]">
      <div className="container">
        <div className="grid gap-10 grid-cols-4 max-lg:grid-cols-2 max-lg:gap-0 max-sm:grid-cols-1 pt-[15px] pb-[15px]">
          <div className="footer-content items-center flex border-dashed border-r-2 border-[#7a883f] max-lg:p-[12px] max-sm:border-none ">
            <div className="ship-icon pr-[15px] text-white ">
              <FaCarAlt className="w-[50px] h-[50px] text-white" />
            </div>
            <div className="ship-text">
              <h3 className="text-[#ffcc48] font-bold">Ship COD toàn quốc</h3>
              <p className="text-[14px]">
                Thanh toán khi nhận hàng. Phí ship 20-25k
              </p>
            </div>
          </div>
          <div className="footer-content  border-dashed border-r-2 border-[#7a883f]  items-center flex max-lg:border-none max-lg:p-[12px] ">
            <div className="ship-icon pr-[15px]">
              <FaBox className="w-[50px] h-[50px] text-white" />
            </div>
            <div className="ship-text">
              <h3 className="text-[#ffcc48] font-bold">Miễn phí đổi - trả</h3>
              <p className="text-[14px]">
                Đối với sản phẩm lỗi sản xuất hoặc vận chuyển
              </p>
            </div>
          </div>
          <div className="footer-content   border-dashed border-r-2 border-[#7a883f]  items-center flex max-lg:p-[12px] max-lg:border-dashed max-lg:border-t-2  max-lg:border-[#7a883f] max-sm:border-none">
            <div className="ship-icon pr-[15px]">
              <FaObjectGroup className="w-[50px] h-[50px] text-white" />
            </div>
            <div className="ship-text">
              <h3 className="text-[#ffcc48] font-bold">Ưu đãi thành viên</h3>
              <p className="text-[14px]">
                Đăng ký thành viên nhận nhiều ưu đãi lớn.
              </p>
            </div>
          </div>
          <div className="footer-content  items-center flex max-lg:p-[12px] max-lg:border-dashed max-lg:border-t-2  max-lg:border-[#7a883f] max-sm:border-none">
            <div className="ship-icon pr-[15px]">
              <FaPiggyBank className="w-[50px] h-[50px] text-white" />
            </div>
            <div className="ship-text">
              <h3 className="text-[#ffcc48] font-bold">Ưu đãi combo</h3>
              <p className="text-[14px]">Mua theo combo, càng mua càng rẻ.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipCod;
