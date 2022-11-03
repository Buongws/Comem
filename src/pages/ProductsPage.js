import React from "react";
import { Filter, ProductsList, Sort } from "./index";
const ProductPage = () => {
  return (
    <section>
      <div className="container-big grid grid-cols-[300px_minmax(900px,_1fr)_100px]">
        <Filter />
        <div>
          <Sort />
          <ProductsList />
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
