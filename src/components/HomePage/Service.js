import React from "react";
import { Link } from "react-router-dom";
import { comemSmall, comemBig } from "../../assets/image/indexSlide";

const Service = () => {
  return (
    <main>
      <div className="container grid grid-cols-2 gap-[50px] pt-[60px] max-lg:grid-cols-1 place-items-center">
        <div className="service-text mr-[30px] z-10">
          <h2 className="mb-[30px] font-semibold text-[#4c503d]">
            CHUYỆN CỦA CỎ
          </h2>
          <p className="font-medium mb-[20px] text-[25px]">
            Tôi bắt đầu Ước mơ Xanh của mình, nghiên cứu những sản phẩm thuần
            tuý, tối giản, chỉ tập trung vào mục đính sử dụng của chính nó.
          </p>
          <p className="text-[20px]">
            Nghĩa là nước giặt thì chỉ cần giặt sạch, chứ không cần phải nhiều
            bọt. Nghĩa là dưỡng da dưỡng tóc thì để da tóc khoẻ từ gốc chứ không
            cần cảm giác giả mướt tay từ silicon. Tôi từ chối mọi sản phẩm chứa
            hạt vi nhựa, chỉ dùng cafe xay mịn và muối biển để tẩy tế bào chết.
            Tôi không dùng những hoá chất tẩy rửa mà thay bằng xà bông dầu dừa
            và quả bồ hòn xưa cũ...
          </p>
          <Link to="/about" type="btn" className="btn mt-[20px]">
            XEM THÊM
          </Link>
        </div>

        <article className="img-container relative max-lg:hidden  ">
          <img src={comemBig} alt="nice table" className="main-ing" />
          <img src={comemSmall} alt="nice table" className="accent-img" />
        </article>
      </div>
    </main>
  );
};

export default Service;
