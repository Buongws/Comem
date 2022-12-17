import React, { useState } from "react";
import { Link } from "react-router-dom";

import { signInWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";
import { auth, provider } from "../firebase";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrorEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errFile, setErrFile] = useState("");
  const [backError, setBackError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setLoading(true);
    if (email === "") {
      setInterval(() => {
        setErrorEmail("");
      }, 5000);
      return setErrorEmail("Hãy điền email của bạn ");
    }
    if (!email.includes("@")) {
      setInterval(() => {
        setErrorEmail("");
      }, 5000);
      return setErrorEmail("Thiếu kí tự '@' trong email của bạn");
    }
    if (password === "") {
      setInterval(() => {
        setErrPassword("");
      }, 5000);
      return setErrPassword("Hãy điền mật khẩu của bạn");
    } else if (password.length <= 6) {
      setInterval(() => {
        setErrPassword("");
      }, 5000);
      return setErrPassword("Mật khẩu bắt buộc lớn hơn 6 kí tự");
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        toast.success("Đăng nhập thành công", {
          position: "bottom-left",
        });
        navigate("/checkout");
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setInterval(() => {
            // toast.error("");
          }, 5000);
          toast.error("Email đã được sử dụng, vui lòng sử dụng 1 email khác");
        }
        if (error.code === "auth/wrong-password") {
          setInterval(() => {
            // toast.error("");
          }, 5000);
          toast.error("Sai mat khau");
        }
        if (error.code === "auth/user-not-found") {
          setInterval(() => {
            // toast.error("");
          }, 5000);
          toast.error("Tài khoản không tồn tại, vui lòng đăng kí");
        } else if (error.code === AuthErrorCodes.WEAK_PASSWORD) {
          setInterval(() => {
            // toast.error("");
          }, 5000);
          toast.error("Mật khẩu phải có ít nhất 6 kí tự");
        } else {
          toast.error(error);
          console.log(error);
        }
      }
    }
  };
  const handleGoogleButton = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success("Đăng nhập thành công", {
          position: "bottom-left",
        });
        console.log(result);
        // navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="bg-login ">
        {loading ? (
          <div className="flex justify-center items-center text-[#68762b] text-[80px] font-semibold h-full">
            Loading ....
          </div>
        ) : (
          <div className=" container-small flex flex-col justify-center items-center   h-full">
            <h2 className="pb-[2rem]">Đăng Nhập</h2>
            <div>
              <div className="form w-full p-[35px] bg-[#fff] rounded-2xl shadow-2xl">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                  <div className="mb-[25px]">
                    <input
                      placeholder="Email của bạn"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="w-full h-[56px] outline-0 p-[10px] border-2 rounded-md"
                    ></input>
                    {errEmail
                      ? errEmail && (
                          <p className="text-[red] text-center font-semibold pt-[1rem]">
                            {errEmail}
                          </p>
                        )
                      : backError && <p className="error">{backError}</p>}
                  </div>
                  <div className="mb-[25px]">
                    <input
                      placeholder="Nhập mật khẩu"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full h-[56px] outline-0 border-2 p-[10px] rounded-md"
                    ></input>
                    {errPassword
                      ? errPassword && (
                          <p className="text-[red] text-center font-semibold pt-[1rem]">
                            {errPassword}
                          </p>
                        )
                      : backError && <p className="error">{backError}</p>}
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <button
                      type="submit"
                      className="p-[20px] text-white w-[80%] bg-[#738136] text-center hover:bg-[#68762b] rounded-md trasition ease-in-out delay-100 "
                    >
                      Đăng Nhập
                    </button>
                  </div>
                  <div className="flex flex-col justify-center items-center mt-[30px]">
                    <button
                      // onClick={handleGoogleButton}
                      type="submit"
                      className="p-[20px] text-white w-[80%] bg-[#4363c9] text-center hover:bg-[#68762b] rounded-md trasition ease-in-out delay-100 "
                    >
                      Đăng nhập với Google
                    </button>
                  </div>
                  <h5 className="text-[16px] pt-[1.5rem]">
                    Bạn chưa có Tài khoản? Vui lòng đăng ký Tài khoản mới
                    <span className="ml-[5px]">
                      <Link className="text-[#68762b] font-semibold" to="/register">
                        Tại Đây
                      </Link>
                    </span>
                  </h5>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LoginPage;
