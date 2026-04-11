"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "@/store/features/auth/authSlice";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Login = () => {
  const user = useSelector((state) => state.authentication.userInfo);
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLoginBtn = async () => {
    if (email == "") {
      return setEmailError("Email is required");
    }
    if (password == "") {
      return setPasswordError("Password is required");
    }
    axios
      .post(
        `${process.env.NEXT_PUBLIC_URL}/api/authentication/login`,
        { email, password },
        { withCredentials: true },
      )
      .then((res) => {
        dispatch(setUserInfo(res.data.data));
        localStorage.setItem("setUserInfo", JSON.stringify(res.data.data));
        toast.success("Login Successful!");
        setTimeout(() => {
          router.push("/");
        }, 2000);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message || "Something went wrong");
      });
  };

  return (
    <div className="flex items-center justify-center mt-20">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="border p-3 sm:p-5 rounded-[5px] shadow">
        <h1 className="font-lato text-2xl font-semibold">Login Your Account</h1>
        <div className="mt-6 flex flex-col gap-1 w-[280px] sm:w-[350px] lg:w-[500px]">
          <label htmlFor="email" className="font-quicksand font-bold">
            Email
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            type="email"
            id="email"
            placeholder="Email"
            className="outline-none border border-gray-200 rounded-[5px] p-2 w-full"
          />
          {emailError ? <p className="text-red-500">{emailError}</p> : null}
        </div>
        <div className="mt-4 flex flex-col gap-1 w-[280px] sm:w-[350px] lg:w-[500px]">
          <label htmlFor="password" className="font-quicksand font-bold">
            Password
          </label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
            type="password"
            id="password"
            placeholder="Password"
            className="outline-none border border-gray-200 rounded-[5px] p-2 w-full"
          />
          {passwordError ? (
            <p className="text-red-500">{passwordError}</p>
          ) : null}
        </div>
        <button
          onClick={handleLoginBtn}
          className="w-full bg-primaryColor text-white mt-6 py-2 rounded-[5px] font-semibold font-quicksand text-xl cursor-pointer"
        >
          Login
        </button>
        <p className="mt-4 text-sm text-gray-500 font-lato">
          Don't have an account?
          <span className="text-primaryColor font-semibold cursor-pointer ml-1">
            <Link href="/account/signup">SignUp</Link>
          </span>
        </p>
        <p className="text-center font-bold my-3 text-xl text-gray-500">OR</p>
        <button className="w-full bg-white border border-gray-200 py-2 rounded-[5px] font-semibold font-quicksand text-xl cursor-pointer flex items-center justify-center gap-3">
          <FcGoogle className="text-4xl" /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
