"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginBtn = () => {
    console.log(email);
    console.log(password);
  };

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="border p-5 rounded-[5px] shadow">
        <h1 className="font-lato text-2xl font-semibold">Login Your Account</h1>
        <div className="mt-6 flex flex-col gap-1 w-[350px]">
          <label htmlFor="email" className="font-quicksand font-bold">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="Email"
            className="outline-none border border-gray-200 rounded-[5px] p-2"
          />
        </div>
        <div className="mt-4 flex flex-col gap-1 w-[350px]">
          <label htmlFor="password" className="font-quicksand font-bold">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            placeholder="Password"
            className="outline-none border border-gray-200 rounded-[5px] p-2"
          />
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
            <Link href="/signup">SignUp</Link>
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
