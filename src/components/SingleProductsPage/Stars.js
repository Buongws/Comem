import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ stars, reviewer }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span className="text-[#ffb900] inline-block" key={index}>
        {stars >= index + 1 ? <BsStarFill /> : stars >= number ? <BsStarHalf /> : <BsStar />}
      </span>
    );
  });
  return (
    <div className="flex items-center flex-wrap  mb-[10px]">
      <div className="stars">Đánh giá : {tempStars}   </div>
      <p className="reviews">
        Xem  
        <span className="inline-block text-[#5bbeec] font-medium text-[15px] cursor-pointer ">
          {reviewer} đánh giá từ khách đã mua hàng
        </span>
      </p>
    </div>
  );
};

export default Stars;
