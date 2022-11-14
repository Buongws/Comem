import React from "react";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import PageHero from "../Hero/PageHero";
const InfoProducts = ({ thumbnails }) => {
  const { description } = thumbnails;
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className="pt-[30px]">
      <div className="InfoProducts">
        <div className="container-medium details flex justify-between item-center ">
          <h2 className=" text-[#4c503d] text-[22px]  font-semibold ">THÔNG TIN SẢN PHẨM </h2>
          <button
            className="p-[8px] bg-[#738136] rounded-full text-white ml-[15px]"
            onClick={() => setShowInfo(!showInfo)}
          >
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
        {showInfo && (
          <div className="container-medium content pt-[30px]">
            <div className="pb-[15px]">
              <h3>1. Thành Phần</h3>
              <p>{description[0]}</p>
            </div>
            <hr />
            <div className="pb-[15px]">
              <h3>2. Thông số sản phẩm</h3>
              <p>{description[1]}</p>
            </div>
            <hr />
            <div className="pb-[15px]">
              <h3>3. Tại sao nên sử dụng ? </h3>
              <p>{description[2]}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InfoProducts;

// {
//   description.map((des) => {
//     console.log(des);
//     return (
//       <div>
//         <div>
//           <p>{des}</p>
//         </div>
//       </div>
//     );
//   });
// }
