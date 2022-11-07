import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartFilterActions } from "../../redux/cartFilter";

const Sort = () => {
  const { filteredProducts, sort } = useSelector((store) => store.filter);

  const dispatch = useDispatch();

  const onSortedChange = (e) => {
    dispatch(cartFilterActions.sortProducts(e.target.value));
  };

  return (
    <section className="">
      <h3 className="text-[20px] font-bold text-[#4c503d] uppercase pb-[15px]">
        Sản Phẩm
      </h3>
      <div className="flex justify-between items-center  pt-[15px] pb-[15px] pl-[24px] pr-[24px] border">
        <div> ● {filteredProducts.length}: Sản phẩm được tìm thấy</div>
        <hr />
        <form>
          <label htmlFor="sort">Sắp xếp theo: </label>
          <select
            name="sort"
            id="sort"
            className="sort-input bg-[#e7edd7] p-[5px] h-[34px] text-[#738136] rounded"
            value={sort}
            onChange={onSortedChange}
          >
            <option value="price-lowest">Giá thấp nhất (lowest) </option>
            <option value="price-highest">Giá cao nhất (highest) </option>
            <option value="a-z">Tên sản phẩm (a-z)</option>
            <option value="z-a">Tên sản phẩm (z-a)</option>
          </select>
        </form>
      </div>
    </section>
  );
};

export default Sort;
