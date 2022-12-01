import React, { useState } from "react";
import { cardCheckOut } from "../assets/image/indexSlide";
import { months } from "../assets/data/month";
import { toast } from "react-toastify";
const CheckOutPage = () => {
  const initialValues = {
    username: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    nameCard: "",
    NumCard: "",
    yearCard: "",
    CVV: "",
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handdleSubmitCheckOut = (e) => {
    e.preventDefault();
  };

  const handdleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  return (
    <>
      <div className="container h-full pt-[70px] pb-[70px]">
        <h2 className="text-center pb-[30px] font-bold text-[#534e4e]">Thanh Toán</h2>
        <form className="p-[20px] w-full outline-none shadow-lg" onSubmit={handdleSubmitCheckOut}>
          <div className="Row flex max-lg:flex-col gap-[20px]">
            <div className="Col flex-1 flex flex-col justify-between">
              <h3 className="font-semibold text-[#534e4e]">Địa chỉ nhận hàng</h3>
              <div className="mt-[15px] mb-[20px]">
                <span className="mb-[15px] mt-[15px] block">Full Name: </span>
                <input
                  name="username"
                  onChange={handdleChange}
                  value={formValues.username}
                  className=" outline-none border-2 solid h-[40px] w-full p-[10px] "
                  type="text"
                  placeholder="Nguyen van A"
                />
              </div>
              <div className="mt-[15px] mb-[20px]">
                <span className="mb-[15px] mt-[15px] block">Email: </span>
                <input
                  name="email"
                  onChange={handdleChange}
                  value={formValues.email}
                  className=" outline-none border-2 solid h-[40px] w-full p-[10px]"
                  type="email"
                  placeholder="abc@gmail.com"
                ></input>
              </div>
              <div className="mt-[15px] mb-[20px]">
                <span className="mb-[15px] mt-[15px] block">Địa chỉ: </span>
                <input
                  name="address"
                  onChange={handdleChange}
                  value={formValues.address}
                  className=" outline-none border-2 solid h-[40px] w-full p-[10px]"
                  type="text"
                  placeholder="Số nhà - Phường - Xã -Tỉnh"
                ></input>
              </div>
              <div className="mt-[15px] mb-[20px]">
                <span className="mb-[15px] mt-[15px] block">Thành Phố: </span>
                <input
                  name="city"
                  onChange={handdleChange}
                  value={formValues.city}
                  className=" outline-none border-2 solid h-[40px] w-full p-[10px]"
                  type="text"
                  placeholder="Hà Nội ... "
                ></input>
              </div>
              <div className="flex">
                <div className="mr-[10px]">
                  <span>Quốc gia: </span>
                  <input
                    name="state"
                    onChange={handdleChange}
                    value={formValues.state}
                    className="outline-none border-2 solid h-[40px] w-[100%] p-[10px]"
                    type="text"
                    placeholder="VietNam"
                  ></input>
                </div>
                <div>
                  <span>zip code: </span>
                  <input
                    name="zipCode"
                    onChange={handdleChange}
                    value={formValues.zipCode}
                    className="outline-none border-2 solid h-[40px] w-[100%] p-[10px]"
                    type="text"
                    placeholder="123 456"
                  ></input>
                </div>
              </div>
            </div>
            <div className="Col flex-1 flex flex-col justify-between">
              <h3 className="font-semibold text-[#534e4e]">Thanh Toán</h3>
              <div className="mt-[15px] mb-[20px]">
                <span className="mb-[15px] mt-[15px] block">Thẻ chấp nhận: </span>
                <img className=" outline-none" src={cardCheckOut} alt="cardCheckout"></img>
              </div>
              <div className="mt-[15px] mb-[20px]">
                <span className="mb-[15px] mt-[15px] block">Tên chủ thẻ: </span>
                <input
                  name="nameCard"
                  onChange={handdleChange}
                  value={formValues.nameCard}
                  className=" outline-none border-2 solid h-[40px] w-full p-[10px]"
                  placeholder="Nguyen Van A"
                  type="text"
                ></input>
              </div>
              <div className="mt-[15px] mb-[20px]">
                <span className="mb-[15px] mt-[15px] block">Số thẻ tín dụng :</span>
                <input
                  name="numCard"
                  onChange={handdleChange}
                  value={formValues.NumCard}
                  className=" outline-none border-2 solid h-[40px] w-full p-[10px]"
                  type="number"
                  placeholder="1111-2222-3333-4444"
                ></input>
              </div>
              <div className="mt-[15px] mb-[20px]">
                <span className="mb-[15px] mt-[15px] block">Exp month :</span>
                <select className="outline-none border-2 solid h-30px w-[100%] p-[10px]">
                  {months.map((m, index) => {
                    return <option key={index}>{m}</option>;
                  })}
                </select>
              </div>
              <div className="flex">
                <div className="mr-[10px]">
                  <span>Exp year :</span>
                  <input
                    name="expYear"
                    onChange={handdleChange}
                    value={formValues.yearCard}
                    className="outline-none border-2 solid h-[40px] w-[100%] p-[10px]"
                    type="number"
                    placeholder="2022"
                  ></input>
                </div>
                <div>
                  <span>CVV :</span>
                  <input
                    name="CVV"
                    onChange={handdleChange}
                    value={formValues.CVV}
                    className="outline-none border-2 solid h-[40px] w-[100%] p-[10px]"
                    type="text"
                    placeholder="1234"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="Tiến hành thanh toán"
            className="w-full p-[12px] text-[32px] mt-[30px] cursor-pointer bg-[#27ae60] text-white hover:bg-[#2ecc71]  hover:transition-all ease-linear duration-300"
          ></input>
        </form>
      </div>
    </>
  );
};

export default CheckOutPage;
