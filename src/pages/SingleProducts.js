import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { datas } from "../assets/data/data";
import { FcCheckmark } from "react-icons/fc";

import Stars from "../components/SingleProductsPage/Stars";
import InfoProducts from "../components/SingleProductsPage/InfoProducts";
import Material from "../components/SingleProductsPage/Material";
import { FcApproval } from "react-icons/fc";
import { formatPrice } from "../utils/Help";
import AddToCart from "../components/SingleProductsPage/AddToCart";
import PageHero from "../components/Hero/PageHero";
import { useSelector } from "react-redux";

const SingleProducts = () => {
  const { id } = useParams();

  const { originalDatas } = useSelector((store) => store.cart);

  const product = originalDatas.find((product) => product.id === id);

  const { name, price, rating, image, titleTag, review, info, thumbnails } = product;

  const [main, setMain] = useState(0);

  return (
    <div>
      <PageHero title={name} product={name} />
      <div className="container-medium grid grid-cols-2 pt-[50px]  max-lg:grid-cols-1">
        <div className="singlePage-left ">
          <section>
            <img src={image[main]} alt="img" className=" w-full block object-cover" />
            <div className="mt-[14px] grid grid-cols-5 gap-4 ">
              {image.map((img, index) => {
                return (
                  <div key={index}>
                    <img
                      src={img}
                      alt="img"
                      onClick={() => setMain(index)}
                      className={`h-[100px] cursor-pointer ease-in-out duration-700 hover:scale-90 ${
                        main === index ? `shadow-2xl border-2 border-solid border-[#de8d1e]` : null
                      } `}
                    />
                  </div>
                );
              })}
            </div>
            <div className="shipping pt-[50px] flex justify-between text-[15px] ">
              <div className="bg-[#f8f9fa] rounded-[7px] p-[15px]   w-full">
                <p>Phí ship</p>
                <ul className="m-0">
                  <li className="text-[#345]">Nội thành Hà Nội - 20.000đ</li>
                  <li className="text-[#345]">Các tỉnh còn lại - 25.000đ</li>
                </ul>
              </div>
              <div className="bg-[#f8f9fa] rounded-[7px] p-[15px] w-full ml-[20px]">
                <p>Thời gian ship dự kiến</p>
                <ul>
                  <li className="text-[#345]">Hà Nội, TP.HCM: 1-2 ngày</li>
                  <li className="text-[#345]">Các tỉnh còn lại: 2-5 ngày</li>
                </ul>
              </div>
            </div>
            <p className="mt-[10px]">
              <span className="font-bold text-[#e67e22]">
                <FcApproval className="inline-block" /> Miễn Phí 
              </span>
              đổi trả sản phẩm lỗi do vận chuyển, sản xuất
            </p>
          </section>
        </div>
        <div className="singlePage-right pl-[15px] max-lg:pl-[0] max-lg:pt-[30px] max-lg:pb-[30px]">
          <section className="content">
            <h2 className="mb-[15px] text-[#4c503d] text-[22px]  font-semibold">{name}</h2>
            <p className="desc mb-[10px] "> {titleTag}</p>
            <Stars stars={rating} reviewer={review} />
            <h5 className="price text-[#4c503d] font-bold text-2xl tracking-[1px] mb-[10px]  ">
              {formatPrice(price)}
            </h5>
            <AddToCart product={product} />

            <div className="info grid grid-cols-2 gap-[5px]">
              {info.map((i, index) => {
                return (
                  <div className="pl-[5px] pr-[5px]" key={index}>
                    <span>
                      <FcCheckmark className="inline-block" />  {i}
                    </span>
                  </div>
                );
              })}
            </div>
            <hr />
          </section>
          <div className="fomo mt-[15px]">
            <div className="bg-[#fef8e3] w-full pt-[5px] pb-[20px] pl-[20px] pr-[20px] ">
              <div className="fomo-item flex items-center mt-[15px]">
                <span className="text-xs pt-[2px] pb-[2px] pr-[5px] pl-[5px] border-solid border-2 border-[#de8d1e] text-[#de8d1e]  whitespace-nowrap">
                  Giảm giá
                </span>
                <p className="ml-[10px]">
                  Giảm giá 55k bọt rửa mặt tơ tằm khi mua kèm sản phẩm khác
                </p>
              </div>
              <div className="fomo-item flex items-center mt-[15px]">
                <span className="text-xs pt-[2px] pb-[2px] pr-[5px] pl-[5px] border-solid border-2 border-[#de8d1e] text-[#de8d1e] whitespace-nowrap">
                  Quà Tặng
                </span>
                <p className="ml-[10px]">Mua 2 chai Nước súc miệng Tặng 1 Xịt thơm miệng</p>
              </div>
              <div className="fomo-item flex items-center mt-[15px]">
                <span className="text-xs pt-[2px] pb-[2px] pr-[5px] pl-[5px] border-solid border-2 border-[#de8d1e] text-[#de8d1e]  whitespace-nowrap">
                  Quà Tặng
                </span>
                <p className="ml-[10px]">Tặng Trà Rau Má Gạo Lứt 125k Cho Đơn Hàng Từ 3 Sản Phẩm</p>
              </div>
              <div className="fomo-item flex items-center mt-[15px]">
                <span className="text-xs pt-[2px] pb-[2px] pr-[5px] pl-[5px] border-solid border-2 border-[#de8d1e] text-[#de8d1e]  whitespace-nowrap">
                  Giảm 60k
                </span>
                <p className="ml-[10px]">Khi mua sữa rửa mặt Rau Má kèm bất kì sản phẩm khác</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InfoProducts thumbnails={thumbnails} />
      <Material thumbnails={thumbnails} />
    </div>
  );
};

export default SingleProducts;
