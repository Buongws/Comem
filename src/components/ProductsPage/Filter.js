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
    dispatch(cartFilterActions.updateFiltersText({ text: newSearchInput }));
  };
  const updateCategory = (e) => {
    const newCategory = e.currentTarget.textContent;
    dispatch(cartFilterActions.updateFiltersText({ category: newCategory }));
  };
  const updateBrand = (e) => {
    const newBrand = e.currentTarget.value;
    dispatch(cartFilterActions.updateFiltersText({ brand: newBrand }));
  };
  console.log(
    originalData.reduce(
      (pre, val, i) => {
        const checkExistCategory = pre.findIndex((it) => it.category === val.category);

        const checkIDinFilterSearch = filteredProducts.findIndex((it) => {
          return it.id === originalData[i].id;
        });

        //not exist cate + id not in filter
        if (checkExistCategory === -1 && checkIDinFilterSearch === -1) {
          pre.push({ category: val.category, quantity: 0 });
          return pre;
        }

        //not exist cate + id in filter
        if (checkExistCategory === -1 && checkIDinFilterSearch !== -1) {
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
      [{ category: "All", quantity: originalData.length }]
    )
  );
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

              //not exist cate + id not in filter
              if (checkExistCategory === -1 && checkIDinFilterSearch === -1) {
                pre.push({ category: val.category, quantity: 0 });
                return pre;
              }

              //not exist cate + id in filter
              if (checkExistCategory === -1 && checkIDinFilterSearch !== -1) {
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
            [{ category: "All", quantity: originalData.length }]
          )

          .map((c, index) => {
            return (
              <div key={index}>
                <button
                  key={index}
                  name="category"
                  type="button"
                  className="text-[#738136] leading-[42px]"
                  onClick={updateCategory}
                >
                  {c.category}
                </button>
                <span className="translate-y-[-15%] inline-block text-[12px] text-[#f49e27] ml-[5px]">
                  {c.quantity}
                </span>
              </div>
            );
          })}
      </div>
      {/* Products */}
      <>
        <div className="form-control">
          <h5> Brand </h5>
          <select name="company" value={brand} onChange={updateBrand} className="company">
            {originalData
              .reduce(
                (pre, val, i) => {
                  const checkExistCategory = pre.findIndex((it) => it.brand === val.brand);

                  if (checkExistCategory === -1) {
                    pre.push({ brand: val.brand });
                    return pre;
                  }

                  return pre;
                },
                [{ brand: "All" }]
              )
              .map((c, index) => {
                return <option key={index}>{c.brand}</option>;
              })}
          </select>
        </div>
      </>
    </div>
  );
};

export default Filter;

// value = { text };
// onChange = { updateText };
// .map((i, index) => {
//   return <option key={index}>{i.brand}</option>;
// })
