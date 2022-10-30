import React from "react";

import { formatPrice } from "../../utils/Help";
import { Link } from "react-router-dom";

import { datas } from "../../assets/data/data";

const FeaturedProducts = () => {
  return (
    <div className="container pt-[60px] text-center ">
      <div className="title ">
        <h2 className="mb-[30px] font-semibold text-[#4c503d]">
          SẢN PHẨM ƯU ĐÃI{" "}
        </h2>
        <div className="underline"></div>
      </div>
      <div className="section-center text-black gap-[30px] grid grid-cols-4 m-auto max-lg:grid-cols-2 max-sm:grid-cols-1 ">
        {datas
          .filter((data) => data.bestSeller === true)
          .map((item) => {
            return (
              <div className="card border-solid border-[1px] rounded-[10px] hover:shadow-lg ease-in-out flex flex-col">
                <div className="pb-[10%]">
                  <img src={item.image[0]} alt={item.name} />
                </div>
                <div className="p-[20px] flex-1 flex flex-col justify-between">
                  <h2 className="text-[16.5px] mb-[15px] font-medium">
                    {`${item.name.substring(0, 45)}...`}
                  </h2>
                  <button className="btn pt-[10px]">
                    {formatPrice(item.price)}
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      <Link to="/products" className="btn mt-[30px]">
        all product
      </Link>
    </div>
  );
};

export default FeaturedProducts;
