import React from "react";
import { useParams } from "react-router-dom";
import { datas } from "../assets/data/data";

const SingleProducts = () => {
  const { id } = useParams();
  const product = datas.find((product) => product.id === id);

  const { name, price, rating, category, brand, max } = product;

  return (
    <div className="container">
      <div className="singlePage-left"></div>
      <div className="singlePage-right"></div>
    </div>
  );
};

export default SingleProducts;
