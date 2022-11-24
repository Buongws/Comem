import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";

import { auth } from "../firebase";
import { storage } from "../firebase";
import { toast } from "react-toastify";
import { db } from "../firebase";

import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [file, setFile] = useState(null);
  // const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + userName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log(downloadURL);
            // update userProfile
            await updateProfile(user, {
              displayName: userName,
              photoURL: downloadURL,
            });

            // Store user data in firestore database
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: userName,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );

      setLoading(false);
      toast.success("Account created");
      navigate("/login");
      console.log(user);
    } catch (error) {
      setLoading(false);
      toast.error("something went wrong");
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
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-[56px] outline-0 p-[10px] border-2 rounded-md"
                  ></input>
                </div>
                <div className="mb-[25px]">
                  <input
                    placeholder="Họ Tên"
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full h-[56px] outline-0 p-[10px] border-2 rounded-md"
                  ></input>
                </div>
                {/* <div className="mb-[25px]">
                 <input
                   placeholder="Số Điện Thoại"
                   type="text"
                   value={phone}
                   onChange={(e) => setPhone(e.target.value)}
                   className="w-full h-[56px] outline-0 p-[10px] border-2 rounded-md"
                 ></input>
               </div> */}
                <div className="mb-[25px]">
                  <input
                    placeholder="Nhập mật khẩu"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-[56px] outline-0 border-2 p-[10px] rounded-md"
                  ></input>
                </div>
                <div className="mb-[25px]">
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="w-full h-[56px] outline-0 border-2 p-[10px] rounded-md"
                  ></input>
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
