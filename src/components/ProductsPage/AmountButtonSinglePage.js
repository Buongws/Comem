import classNames from "classnames";
import React, { useCallback, useState } from "react";

import { FaPlus, FaMinus } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartSliceAction } from "../../redux/cartSlice";

const AmountButtonSinglePage = ({ id, colors }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  const [mainColor, setMainColor] = useState(colors[0]);

  const handleAddToCart = () => {
    dispatch(cartSliceAction.addToCart({ id, amount, colors: mainColor }));
  };

  const onClickIncreasementButton = useCallback(() => {
    setAmount(amount + 1);
  }, [amount]);

  const onClickDecreasementButton = useCallback(() => {
    if (amount === 1) {
      return;
    }
    setAmount(amount - 1);
  }, [amount]);

  return (
    <div>
      <div className="colors ">
        <span className="mb-[30px]">Màu Sắc : </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                className={` mb-[20px] ${
                  mainColor === color
                    ? `bg-[#738136] cursor-pointer rounded-3xl mr-3  pt-[5px] pb-[5px] pl-[10px] pr-[10px] text-white `
                    : "bg-[#cfcfcf] cursor-pointer rounded-3xl mr-3  pt-[5px] pb-[5px] pl-[10px] pr-[10px] text-white "
                } `}
                onClick={() => setMainColor(color)}
              >
                {color}
              </button>
            );
          })}
        </div>
      </div>
      <main className="grid w-[150px] justify-center grid-cols-3 items-center">
        <button
          type="button"
          className={classNames({
            "cursor-not-allowed": amount === 1,
          })}
          onClick={onClickDecreasementButton}
        >
          <FaMinus />
        </button>
        <h2 className="amount">{amount}</h2>
        <button type="button" onClick={onClickIncreasementButton}>
          <FaPlus />
        </button>
      </main>
      <button onClick={handleAddToCart}>
        <Link to="/cart" className="btn mt-[30px] mb-[30px]">
          Thêm Vào Giỏ
        </Link>
      </button>
    </div>
  );
};

export default AmountButtonSinglePage;
