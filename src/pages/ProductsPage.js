import React from "react";
import { Filter, ProductsList, Sort } from "./index";

const ProductPage = () => {
  return (
    <section className="pt-[65px] pb-[65px] container-big">
      <div className=" grid grid-cols-[250px_minmax(900px,_1fr)_100px] max-lg:grid-cols-1">
        <Filter />
        <div className="p-[15px]">
          <Sort />
          <ProductsList />
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
