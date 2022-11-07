import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/Help";
const ProductsItems = ({ image, name, price, id }) => {
  return (
    <div className="card transition-all border-solid border-[1px] rounded-[10px] hover:shadow-lg  flex flex-col">
      <div className="mb-[10%] overflow-hidden ">
        <img
          src={image[0]}
          alt={name}
          className="hover:scale-[110%] transition 
          delay-75 duration-300  ease-in-out w-full"
        />
      </div>
      <div className="p-[20px] flex flex-1 flex-col justify-between">
        <Link
          to={`/products/${id}`}
          className="text-[18px] text-[#363c05] hover:text-[#738136] font-semibold "
        >
          {name}
        </Link>
        <h2 className="text-[#d35400] font-semibold tracking-[1px]]">
          {formatPrice(price)}
        </h2>
      </div>
    </div>
  );
};

export default ProductsItems;
