import PreviousMap from "postcss/lib/previous-map";
import React from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartFilterActions } from "../../redux/cartFilter";

const Filter = () => {
  const { originalData, filteredProducts, filters } = useSelector((store) => store.filter);

  const { text, category, brand, colors, min_price, max_price, price, bestSeller } = filters;

  const dispatch = useDispatch();

  const updateText = (e) => {
    const newSearchInput = e.currentTarget.value;
    dispatch(cartFilterActions.updateFiltersText({ category, text: newSearchInput }));
  };
  const updateCategory = (e) => {
    const newCategory = e.currentTarget.textContent;
    dispatch(cartFilterActions.updateFiltersText({ category: newCategory, text }));
  };

  return (
    <div>
      <h3 className="text-[20px] font-bold text-[#4c503d] uppercase pb-[15px]">
        DANH MỤC SẢN PHẨM
      </h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-[10px]">
          <input
            type="text"
            name="text"
            placeholder="Tìm sản phẩm..."
            className="bg-[#f1f5f8] p-[10px] rounded-lg"
            value={text}
            onChange={updateText}
          ></input>
        </div>
      </form>
      {/* CATEGORY */}
      <div>
        {originalData
          .reduce(
            (pre, val, i) => {
              const checkExistCategory = pre.findIndex((it) => it.category === val.category);

              const checkIDinFilterSearch = filteredProducts.findIndex((it) => {
                return it.id === originalData[i].id;
              });

              console.log(checkIDinFilterSearch);

              //not exist cate + id not in filter
              if (checkExistCategory === -1 && checkIDinFilterSearch === -1) {
                pre.push({ category: val.category, quantity: 0 });
                return pre;
              }

              //not exist cate + id in filter
              if (checkExistCategory === -1 && checkIDinFilterSearch !== -1) {
                console.log("alo");
                pre.push({ category: val.category, quantity: 1 });
                return pre;
              }

              //exist cate +  in filter
              if (checkExistCategory !== -1 && checkIDinFilterSearch !== -1) {
                pre[checkExistCategory].quantity += 1;
                return pre;
              }

              return pre;
            },
            [{ category: "Tất Cả", quantity: originalData.length }]
          )

          .map((c, index) => {
            return (
              <div key={index}>
                <button
                  key={index}
                  name="category"
                  type="button"
                  className="text-[black] leading-[42px]"
                  onClick={updateCategory}
                >
                  {c.category}
                </button>
                <span>{c.quantity}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Filter;

// value = { text };
// onChange = { updateText };
