import React from "react";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div className="page-100 flex justify-center text-center items-center">
      <section>
        <h1 className="text-[#4c503d]">404</h1>
        <h3 className="p-[30px]">
          Đường dẫn này hiện không tồn tại. Nhấn nút dưới đây để về lại trang
          chủ.
        </h3>
        <Link className="btn" to="/">
          Trở về
        </Link>
      </section>
    </div>
  );
};

export default Errorpage;
