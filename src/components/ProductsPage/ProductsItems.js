import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/Help";
const ProductsItems = ({ image, name, price, id }) => {
  console.log(image, name, price);
  return (
    <section className="">
      <div>
        <img src={image[0]} alt={name} />
        <Link to={`/products/${id}`}></Link>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </div>
    </section>
  );
};

export default ProductsItems;
