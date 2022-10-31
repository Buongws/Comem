import React from "react";
import { datas } from "../assets/data/data";

const SingleProducts = () => {
  return (
    <div className="container">
      {datas.map((item) => {
        return (
          <div>
            {/* <p>{item.name}</p>
            <p>{item.max}</p>
            <p>{item.rating}</p>
            <p>{item.price}</p>
            <p>{item.id}</p>
            <p>{item.titleTag}</p>
            <p>{item.image}</p>
            <p>{item.info}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default SingleProducts;
