import React from "react";
import { useSelector } from "react-redux";
import ProductsItems from "./ProductsItems";

const ProductsList = () => {
  const { filteredProducts } = useSelector((store) => store.filter);

  return (
    <div className="pt-[30px] transition-all section-center text-black gap-[30px] grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 max-md:grid-cols-1">
      {filteredProducts.map((item) => {
        return <ProductsItems key={item.id} {...item} />;
      })}
    </div>
  );
};

export default ProductsList;
