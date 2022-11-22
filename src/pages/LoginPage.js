import React from "react";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <>
      <div className="bg-login ">
        <div className=" container-small flex flex-col justify-center items-center   h-full">
          <h2 className="pb-[2rem]">Đăng Nhập</h2>
          <div className="form w-full p-[35px] bg-[#fff] rounded-2xl shadow-2xl">
            <form method="POST" className="flex flex-col">
              <div className="mb-[25px]">
                <input
                  placeholder="Email của bạn"
                  type="email"
                  className="w-full h-[56px] outline-0 p-[10px] border-2 rounded-md"
                ></input>
              </div>
              <div className="mb-[25px]">
                <input
                  placeholder="Nhập mật khẩu"
                  type="password"
                  className="w-full h-[56px] outline-0 border-2 p-[10px] rounded-md"
                ></input>
              </div>
              <div className="flex flex-col justify-center items-center">
                <button className="p-[20px] text-white w-[80%] bg-[#738136] text-center hover:bg-[#68762b] rounded-md trasition ease-in-out delay-100 ">
                  Đăng Nhập
                </button>

                <div className="p-[1rem]">Hoặc</div>

                <button className="p-[20px] w-[80%] text-center bg-[#3b5999] hover:bg-[#68762b] rounded-md trasition ease-in-out delay-100 text-white">
                  Đăng Nhập với facebook
                </button>

                <h5 className="text-[16px] pt-[1.5rem]">
                  Bạn chưa có Tài khoản? Vui lòng đăng ký Tài khoản mới{" "}
                  <span>
                    <Link className="text-[#68762b] font-semibold" to="/register">
                      Tại Đây
                    </Link>
                  </span>
                  .
                </h5>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
