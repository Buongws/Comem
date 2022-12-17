import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile, AuthErrorCodes } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";

import { auth } from "../firebase";
import { storage } from "../firebase";
import { toast } from "react-toastify";
import { db } from "../firebase";

import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errEmail, setErrorEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errUserName, setErrUserName] = useState("");
  const [errFile, setErrFile] = useState("");
  const [file, setFile] = useState(null);
  const [backError, setBackError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setUser((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const register = async (e) => {
    e.preventDefault();

    const { email, password, username } = user;
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

    if (username === "") {
      setInterval(() => {
        setErrUserName("");
      }, 5000);
      return setErrUserName("Hãy điền họ tên của bạn");
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
    } else if (!file) {
      setInterval(() => {
        setErrFile("");
      }, 5000);
      return setErrFile("Hãy upload ảnh đại diện của bạn");
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        const storageRef = ref(storage, `images/${Date.now() + username}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          (error) => {
            toast.error(error.message);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
              // console.log(downloadURL);
              // update userProfile
              await updateProfile(user, {
                displayName: username,
                photoURL: downloadURL,
              });
              console.log(downloadURL);
              // Store user data in firestore database
              await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                displayName: username,
                email,
                photoURL: downloadURL,
              });
            });
          }
        );

        setLoading(false);

        toast.success("Tài khoản đã được tạo");

        navigate("/login");
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setInterval(() => {
            // toast.error("");
          }, 5000);
          toast.error("Email đã được sử dụng, vui lòng sử dụng 1 email khác");
        } else if (error.code === AuthErrorCodes.WEAK_PASSWORD) {
          setInterval(() => {
            // toast.error("");
          }, 5000);
          toast.error("Mật khẩu phải có ít nhất 6 kí tự");
        } else {
          toast.error("Có gì đó lầm nhẫn");
        }
        toast.error("Có gì đó lầm nhẫn");
      }
      setUser({
        username: "",
        email: "",
        password: "",
        file: null,
      });
    }
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
            <h2 className="pb-[2rem]">Đăng Kí</h2>
            <div className="form w-full p-[35px] bg-[#fff] rounded-2xl shadow-2xl">
              <form onSubmit={register} className="flex flex-col">
                <div className="mb-[25px]">
                  <input
                    placeholder="Email của bạn"
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={onChangeHandle}
                    className="w-full h-[56px] outline-0 p-[10px] border-2 rounded-md"
                  ></input>
                  {errEmail
                    ? errEmail && (
                        <p className="text-[red] text-center font-semibold pt-[1rem]">{errEmail}</p>
                      )
                    : backError && <p className="error">{backError}</p>}
                </div>
                <div className="mb-[25px]">
                  <input
                    placeholder="Họ Tên"
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={onChangeHandle}
                    className="w-full h-[56px] outline-0 p-[10px] border-2 rounded-md"
                  ></input>
                  {errUserName
                    ? errUserName && (
                        <p className="text-[red] text-center font-semibold pt-[1rem]">
                          {errUserName}
                        </p>
                      )
                    : backError && <p className="error">{backError}</p>}
                </div>

                <div className="mb-[25px]">
                  <input
                    placeholder="Nhập mật khẩu"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={onChangeHandle}
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

                <div className="mb-[25px]">
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="w-full h-[56px] outline-0 border-2 p-[10px] rounded-md"
                  ></input>
                  {errFile
                    ? errFile && (
                        <p className="text-[red] text-center font-semibold pt-[1rem]">{errFile}</p>
                      )
                    : backError && <p className="error">{backError}</p>}
                </div>
                <div className="flex flex-col justify-center items-center">
                  <button
                    type="submit"
                    className="p-[20px] text-white w-[80%] bg-[#738136] text-center hover:bg-[#68762b] rounded-md trasition ease-in-out delay-100 "
                  >
                    Đăng Kí
                  </button>

                  <h5 className="text-[16px] pt-[1.5rem]">
                    Bạn đã có tài khoản Đăng nhập
                    <span className="ml-[5px]">
                      <Link className="text-[#68762b] font-semibold" to="/login">
                        Tại Đây
                      </Link>
                    </span>
                    .
                  </h5>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RegisterPage;
