"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { setUserInfo } from "@/store/features/auth/authSlice";


const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const pathname = usePathname();
  const path = pathname.split("/");
  const routePath = path[path.length - 1];

  const handleLoginBtn = () => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_URL}/api/authentication/signup`,
        { username, email, password },
        { withCredentials: true },
      )
      .then((res) => {
        console.log(res.data.data);
        dispatch(setUserInfo(res.data.data));
        localStorage.setItem("setUserInfo", JSON.stringify(res.data.data));
        toast.success("Signup Successfully!");
        setTimeout(() => {
          router.push("/otp-verify");
        }, 2000);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
  };

  return (
    <div className="flex items-center justify-center mt-20">
      <Toaster />
      <div className="border p-5 rounded-[5px] shadow">
        <h1 className="font-lato text-2xl font-semibold">Create an Account</h1>
        <div className="mt-6 flex flex-col gap-1 w-[280px] sm:w-[350px] lg:w-[500px]">
          <label htmlFor="username" className="font-quicksand font-bold">
            Username
          </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="username"
            id="username"
            placeholder="Username"
            className="outline-none border w-full border-gray-200 rounded-[5px] p-2"
          />
        </div>
        <div className="mt-4 flex flex-col gap-1">
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
        <div className="mt-4 flex flex-col gap-1">
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
          Already have an account?
          <span className="text-primaryColor font-semibold cursor-pointer ml-1">
            <Link href="/account/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
