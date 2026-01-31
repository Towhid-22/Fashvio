"use client";
import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const user = useSelector((state) => state.authentication.userInfo);
  const [otp, setOtp] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });

  const handleOtpVerify = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_URL}/api/authentication/otp-verify`, {
        otp: `${otp.otp1}${otp.otp2}${otp.otp3}${otp.otp4}${otp.otp5}${otp.otp6}`,
        email: user?.email,
      })
      .then((res) => {
        console.log(res.data);
        toast.success("OTP Verify Successfull");
        setTimeout(() => {
          router.push("/");
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.response.data.message || "Something went wrong");
      });
  };
  return (
    <div className="max-w-[1580px] mx-auto px-4 my-20">
      <Toaster />
      <div className=" flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-semibold text-center mb-2">
            Verify OTP
          </h1>
          <p className="text-sm text-gray-500 text-center mb-6">
            Enter the 6-digit code sent to your email or phone
          </p>

          <form onSubmit={handleOtpVerify}>
            <div className="flex justify-center gap-2 md:gap-3 mb-6">
              <input
                onChange={(e) => setOtp({ ...otp, otp1: e.target.value })}
                type="text"
                maxLength={1}
                className="size-8 md:size-12 text-center text-sm md:text-lg border rounded md:rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor"
              />
              <input
                onChange={(e) => setOtp({ ...otp, otp2: e.target.value })}
                type="text"
                maxLength={1}
                className="size-8 md:size-12 text-center text-sm md:text-lg border rounded md:rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor"
              />
              <input
                onChange={(e) => setOtp({ ...otp, otp3: e.target.value })}
                type="text"
                maxLength={1}
                className="size-8 md:size-12 text-center text-sm md:text-lg border rounded md:rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor"
              />
              <input
                onChange={(e) => setOtp({ ...otp, otp4: e.target.value })}
                type="text"
                maxLength={1}
                className="size-8 md:size-12 text-center text-sm md:text-lg border rounded md:rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor"
              />
              <input
                onChange={(e) => setOtp({ ...otp, otp5: e.target.value })}
                type="text"
                maxLength={1}
                className="size-8 md:size-12 text-center text-sm md:text-lg border rounded md:rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor"
              />
              <input
                onChange={(e) => setOtp({ ...otp, otp6: e.target.value })}
                type="text"
                maxLength={1}
                className="size-8 md:size-12 text-center text-sm md:text-lg border rounded md:rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primaryColor cursor-pointer text-white py-3 rounded-xl font-medium transition"
            >
              Verify OTP
            </button>
          </form>

          <div className="text-center mt-5">
            <p className="text-sm text-gray-500">Didn’t receive the code?</p>
            <button
              type="button"
              className="text-sm font-medium text-textPrimary hover:underline mt-1 cursor-pointer"
            >
              Resend OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
