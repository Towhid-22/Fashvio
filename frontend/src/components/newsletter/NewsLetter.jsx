"use client";
import React from "react";

const NewsLetter = () => {
  return (
    <div className="mx-auto max-w-[1580px] px-4">
      <div className="flex items-center justify-center gap-2 bg-primaryColor/20 rounded sm:py-15 mt-20">
        <input
          type="email"
          className="w-[250px] sm:w-[500px] border outline-none text-textPrimary bg-white border-gray-300 py-2 px-4 rounded shadow"
          placeholder="Enter Your Email"
        />
        <button className="bg-primaryColor text-white py-2 px-2 sm:px-4 rounded cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
