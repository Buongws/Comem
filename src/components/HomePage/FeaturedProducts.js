import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { formatPrice } from "../../utils/Help";
import { Link } from "react-router-dom";

import { datas } from "../../assets/data/data";

const FeaturedProducts = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="title">
        <h2> Feature products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center ">
        <Slider {...settings}>
          {datas
            .filter((data) => data.bestSeller === true)
            .map((item) => {
              return (
                <div
                  className="card border-solid border-[1px] h-[400px] rounded-[10px] hover:shadow-lg ease-in-out

                "
                >
                  <div className="card-top p-[30px]">
                    <img
                      src={item.image[0]}
                      alt={item.name}
                      className=" object-cover"
                    />
                  </div>
                  <div className="card-bot self-start mt-auto">
                    <h2 className="text-[16.5px]">{`${item.name.substring(
                      0,
                      30
                    )}...`}</h2>
                    <button className="button">
                      {formatPrice(item.price)}
                    </button>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
      <Link to="/products" className="btn">
        all product
      </Link>
    </div>
  );
};

export default FeaturedProducts;
