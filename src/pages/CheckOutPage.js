import React, { useState } from "react";
import { cardCheckOut } from "../assets/image/indexSlide";
import { months } from "../assets/data/month";
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase";
import { validateCheckOutActions } from "../redux/ValidateCheckOut";
import { useNavigate } from "react-router-dom";
const CheckOutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { formErrors } = useSelector((store) => store.validateCheckOut);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    nameCard: "",
    numCard: "",
    yearCard: "",
    CVV: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
    dispatch(validateCheckOutActions.updateFormField({ field: name, value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(validateCheckOutActions.validateForm());

    if (
      formData.username &&
      formData.email &&
      formData.address &&
      formData.city &&
      formData.state &&
      formData.zipCode &&
      formData.nameCard &&
      formData.numCard &&
      formData.yearCard &&
      formData.CVV !== ""
    ) {
      await addDoc(collection(db, "checkOutUser"), {
        username: formData.username,
        email: formData.email,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        nameCard: formData.nameCard,
        numCard: formData.numCard,
        yearCard: formData.yearCard,
        CVV: formData.CVV,
      });
      navigate("/");
      toast.success("Cảm ơn bạn đã tiến hành thanh toán", {
        position: "bottom-left",
      });
    }
  };

  return (
    <>
      <div className="container h-full pt-[70px] pb-[70px]">
        <h2 className="text-center pb-[30px] font-bold text-[#534e4e]">Thanh Toán</h2>

        <form className="p-[20px] w-full outline-none shadow-lg" onSubmit={handleSubmit}>
          <div className="Row flex max-lg:flex-col gap-[20px]">
            <div className="Col flex-1 flex flex-col justify-between">
              <h3 className="font-semibold text-[#534e4e]">Địa chỉ nhận hàng</h3>
              <div className="mt-[15px] mb-[20px]">
                <span className="mb-[15px] mt-[15px] block">Full Name: </span>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className=" outline-none border-2 solid h-[40px] w-full p-[10px] "
                  placeholder="Nguyen van A"
                />
                {formErrors.username && (
                  <div className="text-[red] pt-[5px] pb-[5px]">{formErrors.username}</div>
                )}
              </div>

              <div className="mt-[15px] mb-[20px]">
                <span className="mb-[15px] mt-[15px] block">Email: </span>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className=" outline-none border-2 solid h-[40px] w-full p-[10px]"
                  placeholder="abc@gmail.com"
                ></input>
                {formErrors.email && (
                  <div className="text-[red] pt-[5px] pb-[5px]">{formErrors.email}</div>
                )}
              </div>

              <div className="mt-[15px] mb-[20px]">
                <span className="mb-[15px] mt-[15px] block">Địa chỉ: </span>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className=" outline-none border-2 solid h-[40px] w-full p-[10px]"
                  placeholder="Số nhà - Phường - Xã -Tỉnh"
                ></input>
                {formErrors.address && (
                  <div className="text-[red] pt-[5px] pb-[5px]">{formErrors.address}</div>
                )}
              </div>

              <div className="mt-[15px] mb-[20px]">
                <span className="mb-[15px] mt-[15px] block">Thành Phố: </span>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className=" outline-none border-2 solid h-[40px] w-full p-[10px]"
                  placeholder="Hà Nội ... "
                ></input>
                {formErrors.city && (
                  <div className="text-[red] pt-[5px] pb-[5px]">{formErrors.city}</div>
                )}
              </div>

              <div className="flex">
                <div className="mr-[10px]">
                  <span>Quốc gia: </span>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="outline-none border-2 solid h-[40px] w-[100%] p-[10px]"
                    placeholder="VietNam"
                  ></input>
                  {formErrors.state && (
                    <div className="text-[red] pt-[5px] pb-[5px]">{formErrors.state}</div>
                  )}
                </div>
                <div>
                  <span>zip code: </span>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="outline-none border-2 solid h-[40px] w-[100%] p-[10px]"
                    placeholder="123 456"
                  ></input>
                  {formErrors.zipCode && (
                    <div className="text-[red] pt-[5px] pb-[5px]">{formErrors.zipCode}</div>
                  )}
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
                  type="text"
                  name="nameCard"
                  value={formData.nameCard}
                  onChange={handleChange}
                  className=" outline-none border-2 solid h-[40px] w-full p-[10px]"
                  placeholder="Nguyen Van A"
                ></input>
                {formErrors.nameCard && (
                  <div className="text-[red] pt-[5px] pb-[5px]">{formErrors.nameCard}</div>
                )}
              </div>
              <div className="mt-[15px] mb-[20px]">
                <span className="mb-[15px] mt-[15px] block">Số thẻ tín dụng :</span>
                <input
                  className=" outline-none border-2 solid h-[40px] w-full p-[10px]"
                  type="text"
                  name="numCard"
                  value={formData.numCard}
                  onChange={handleChange}
                  placeholder="1111-2222-3333-4444"
                ></input>
                {formErrors.numCard && (
                  <div className="text-[red] pt-[5px] pb-[5px]">{formErrors.numCard}</div>
                )}
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
                    type="text"
                    name="yearCard"
                    value={formData.yearCard}
                    onChange={handleChange}
                    className="outline-none border-2 solid h-[40px] w-[100%] p-[10px]"
                    placeholder="2022"
                  ></input>
                  {formErrors.yearCard && (
                    <div className="text-[red] pt-[5px] pb-[5px]">{formErrors.yearCard}</div>
                  )}
                </div>
                <div>
                  <span>CVV :</span>
                  <input
                    type="text"
                    name="CVV"
                    value={formData.CVV}
                    onChange={handleChange}
                    className="outline-none border-2 solid h-[40px] w-[100%] p-[10px]"
                    placeholder="1234"
                  ></input>
                  {formErrors.CVV && (
                    <div className="text-[red] pt-[5px] pb-[5px]">{formErrors.CVV}</div>
                  )}
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

//  <form className="p-[20px] w-full outline-none shadow-lg" onSubmit={handleSubmit}>
//           <div className="Row flex max-lg:flex-col gap-[20px]">
//             <div className="Col flex-1 flex flex-col justify-between">
//               <h3 className="font-semibold text-[#534e4e]">Địa chỉ nhận hàng</h3>
//               <div className="mt-[15px] mb-[20px]">
//                 <span className="mb-[15px] mt-[15px] block">Full Name: </span>
//                 <input
//                   name="username"
//                   value={formData.username}
//                   className=" outline-none border-2 solid h-[40px] w-full p-[10px] "
//                   type="text"
//                   placeholder="Nguyen van A"
//                 />
//                 {formErrors.username && <div className="text-[red]">{formErrors.username}</div>}
//               </div>
//               <p className="text-[red] pt-[5px] pb-[5px]">{formErrors.username}</p>
//               <div className="mt-[15px] mb-[20px]">
//                 <span className="mb-[15px] mt-[15px] block">Email: </span>
//                 <input
//                   name="email"
//                   value={formData.email}
//                   className=" outline-none border-2 solid h-[40px] w-full p-[10px]"
//                   type="text"
//                   placeholder="abc@gmail.com"
//                 ></input>
//               </div>
//               <p className="text-[red] pt-[5px] pb-[5px]">{formErrors.email}</p>
//               <div className="mt-[15px] mb-[20px]">
//                 <span className="mb-[15px] mt-[15px] block">Địa chỉ: </span>
//                 <input
//                   name="address"
//                   value={formData.address}
//                   className=" outline-none border-2 solid h-[40px] w-full p-[10px]"
//                   type="text"
//                   placeholder="Số nhà - Phường - Xã -Tỉnh"
//                 ></input>
//               </div>
//               <p className="text-[red] pt-[5px] pb-[5px]">{formErrors.address}</p>
//               <div className="mt-[15px] mb-[20px]">
//                 <span className="mb-[15px] mt-[15px] block">Thành Phố: </span>
//                 <input
//                   name="city"
//                   value={formData.city}
//                   className=" outline-none border-2 solid h-[40px] w-full p-[10px]"
//                   type="text"
//                   placeholder="Hà Nội ... "
//                 ></input>
//               </div>
//               <p className="text-[red] pt-[5px] pb-[5px]">{formErrors.city}</p>
//               <div className="flex">
//                 <div className="mr-[10px]">
//                   <span>Quốc gia: </span>
//                   <input
//                     name="state"
//                     value={formData.state}
//                     className="outline-none border-2 solid h-[40px] w-[100%] p-[10px]"
//                     type="text"
//                     placeholder="VietNam"
//                   ></input>
//                   <p className="text-[red] pt-[5px] pb-[5px]">{formErrors.state}</p>
//                 </div>
//                 <div>
//                   <span>zip code: </span>
//                   <input
//                     name="zipCode"
//                     value={formData.zipCode}
//                     className="outline-none border-2 solid h-[40px] w-[100%] p-[10px]"
//                     type="text"
//                     placeholder="123 456"
//                   ></input>
//                   <p className="text-[red] pt-[5px] pb-[5px]">{formErrors.zipCode}</p>
//                 </div>
//               </div>
//             </div>
//             <div className="Col flex-1 flex flex-col justify-between">
//               <h3 className="font-semibold text-[#534e4e]">Thanh Toán</h3>
//               <div className="mt-[15px] mb-[20px]">
//                 <span className="mb-[15px] mt-[15px] block">Thẻ chấp nhận: </span>
//                 <img className=" outline-none" src={cardCheckOut} alt="cardCheckout"></img>
//               </div>
//               <div className="mt-[15px] mb-[20px]">
//                 <span className="mb-[15px] mt-[15px] block">Tên chủ thẻ: </span>
//                 <input
//                   name="nameCard"
//                   value={formData.nameCard}
//                   className=" outline-none border-2 solid h-[40px] w-full p-[10px]"
//                   placeholder="Nguyen Van A"
//                   type="text"
//                 ></input>
//                 <p className="text-[red] pt-[5px] pb-[5px]">{formErrors.state}</p>
//               </div>
//               <div className="mt-[15px] mb-[20px]">
//                 <span className="mb-[15px] mt-[15px] block">Số thẻ tín dụng :</span>
//                 <input
//                   name="numCard"
//                   value={formData.NumCard}
//                   className=" outline-none border-2 solid h-[40px] w-full p-[10px]"
//                   type="text"
//                   placeholder="1111-2222-3333-4444"
//                 ></input>
//               </div>
//               <p className="text-[red] pt-[5px] pb-[5px]">{formErrors.NumCard}</p>
//               <div className="mt-[15px] mb-[20px]">
//                 <span className="mb-[15px] mt-[15px] block">Exp month :</span>
//                 <select className="outline-none border-2 solid h-30px w-[100%] p-[10px]">
//                   {months.map((m, index) => {
//                     return <option key={index}>{m}</option>;
//                   })}
//                 </select>
//               </div>
//               <div className="flex">
//                 <div className="mr-[10px]">
//                   <span>Exp year :</span>
//                   <input
//                     name="yearCard"
//                     value={formData.yearCard}
//                     className="outline-none border-2 solid h-[40px] w-[100%] p-[10px]"
//                     type="text"
//                     placeholder="2022"
//                   ></input>
//                   <p className="text-[red] pt-[5px] pb-[5px]">{formErrors.yearCard}</p>
//                 </div>
//                 <div>
//                   <span>CVV :</span>
//                   <input
//                     name="CVV"
//                     value={formData.CVV}
//                     className="outline-none border-2 solid h-[40px] w-[100%] p-[10px]"
//                     type="text"
//                     placeholder="1234"
//                   ></input>
//                   <p className="text-[red] pt-[5px] pb-[5px]">{formErrors.CVV}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <input
//             type="submit"
//             value="Tiến hành thanh toán"
//             className="w-full p-[12px] text-[32px] mt-[30px] cursor-pointer bg-[#27ae60] text-white hover:bg-[#2ecc71]  hover:transition-all ease-linear duration-300"
//           ></input>
//         </form>
