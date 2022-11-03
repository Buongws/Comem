import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  source1,
  source2,
  source3,
  source4,
  source5,
  source6,
  source7,
  source8,
  source9,
} from "../../assets/image/indexSlide";

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
    <div className="container">
      <h2> Single Item</h2>
      <Slider {...settings} className="pt-[30px] pb-[30px]">
        {material.map((matel) => {
          return (
            <div>
              <div className="resource-grid-top flex flex-col bg-[#66883f] rounded-[20px] p-[20px]">
                <div className="resource-img  h-[200px] mt-[-75px] max-lg:mt-[0px] ">
                  <img
                    src={source1}
                    alt="source"
                    className="bg-cover h-full w-full object-contain"
                  />
                </div>
                <div className="resource-text text-[15.5px] p-[10px] flex-1 flex flex-col justify-between text-center ">
                  <h3 className="text-white font-medium mb-[15px] mt-[15px] cursor-pointer title-resource">
                    Lá Bạc Hà
                  </h3>
                  <p className="m-auto text-white">{matel}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Material;
