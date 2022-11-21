import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { datas } from "../../assets/data/data";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/Help";

const Material = ({ thumbnails }) => {
  const { material } = thumbnails;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  return (
    <div className="container-medium pt-[30px]">
      <h2 className=" text-[#4c503d] text-[22px]  font-semibold">SẢN PHẨM LIÊN QUAN</h2>

      <div className="section-center text-black gap-[30px] grid grid-cols-4 m-auto max-lg:grid-cols-2 max-sm:grid-cols-1 pt-[40px] pb-[40px]">
        {datas.slice(0, 4).map((item, index) => {
          return (
            <div
              key={index}
              className="card border-solid border-[1px] rounded-[10px] hover:shadow-lg  ease-in-out flex flex-col"
            >
              <div className="pb-[10%] overflow-hidden">
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="hover:scale-[110%] transition delay-75 duration-300  ease-in-out w-full"
                />
              </div>
              <div className="p-[20px] flex-1 flex flex-col justify-between">
                <h2 className="text-[16.5px] mb-[15px] font-medium">
                  {`${item.name.substring(0, 100)}...`}
                </h2>
                <Link to={`/products/${item.id}`} className="btn pt-[10px] text-center">
                  {formatPrice(item.price)}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Material;
