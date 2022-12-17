import PreviousMap from "postcss/lib/previous-map";
import React from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartFilterActions } from "../../redux/cartFilter";
import { formatPrice } from "../../utils/Help";
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
  const updatePrice = (e) => {
    const newPrice = e.currentTarget.value;

    dispatch(cartFilterActions.updateFiltersText({ price: newPrice }));
  };
  const updateBestSeller = (e) => {
    const newBestSeller = e.target.checked;
    console.log(newBestSeller);

    dispatch(cartFilterActions.updateFiltersText({ bestSeller: newBestSeller }));
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
        <div>
          <h5 className="text-[26px] text-[#738136] font-semibold"> Bộ Lọc</h5>
          <hr />
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
                <div
                  key={index}
                  className="hover:bg-[#ebedef] transition delay-150 duration-300 ease-in-out pl-[15px]"
                >
                  <button
                    key={index}
                    name="category"
                    type="button"
                    className="text-[#738136] leading-[42px] "
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
            <h5 className="text-[26px] text-[#738136] font-semibold"> Thương Hiệu </h5>
            <hr />
            <select
              name="brand"
              value={brand}
              onChange={updateBrand}
              className="p-[15px] hover:bg-[#ebedef] w-full transition delay-150 duration-300 ease-in-out mt-2 mb-3"
            >
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
        {/* Price */}
        <>
          <div className="form-control">
            <h5 className="text-[26px] text-[#738136] font-semibold">Mức Giá</h5>
            <hr />

            <p className="">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updatePrice}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
        </>
        {/* best Seller */}
        <div className="form-control bestSeller m-[15px]">
          <label className="text-[26px] text-[#738136] font-semibold ">Best Seller</label>

          <input
            checked={bestSeller}
            className="ml-[15px] h-[18px] w-[18px]"
            type="checkbox"
            name="bestSeller"
            id="bestSeller"
            onChange={updateBestSeller}
          ></input>
        </div>
      </form>
      {/* Clear */}
      <button
        type="button"
        className="clear-btn btn"
        onClick={() => {
          dispatch(cartFilterActions.clearCart());
        }}
      >
        Clear all filters
      </button>
      <></>
    </div>
  );
};

export default Filter;
