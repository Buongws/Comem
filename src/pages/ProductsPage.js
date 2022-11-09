import React from "react";
import { Filter, ProductsList, Sort } from "./index";

import { bgProduct } from "../assets/image/indexSlide";

const ProductPage = () => {
  return (
    <section className="pt-[65px] pb-[65px] container-big">
      <div className="pb-[30px]">
        <img src={bgProduct} alt="bgProdcut" className="w-[80%] my-0 mx-auto " />
      </div>
      <div className=" grid grid-cols-[250px_minmax(900px,_1fr)_100px] max-lg:grid-cols-1">
        <Filter />
        <div className="pb-[15px] pl-[15px] pr-[15px]">
          <Sort />
          <ProductsList />
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
