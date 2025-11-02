import React from "react";
import { IoSearch } from "react-icons/io5";

const page = () => {
  return (
    <div className="max-w-[1580px] mx-auto px-4 mt-15">
      <div className="flex items-center justify-center bg-primaryColor/20 p-4 sm:py-20 rounded">
        <div className="bg-white py-5 px-2 sm:p-5 rounded w-[280px] sm:w-[500px]">
          <h3 className="font-lato font-semibold text-2xl text-center text-textPrimary">
            Product Comparison
          </h3>
          <p className="font-lato text-xl text-center text-textPrimary my-3">
            Search any product
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="Select Product"
              className="w-full py-2 px-4 outline-none border border-gray-300 rounded"
            />
            <IoSearch className="text-xl absolute top-1/2 right-3 -translate-y-1/2" />
          </div>
          <div className="relative mt-3">
            <input
              type="text"
              placeholder="Select Product"
              className="w-full py-2 px-4 outline-none border border-gray-300 rounded"
            />
            <IoSearch className="text-xl absolute top-1/2 right-3 -translate-y-1/2" />
          </div>
          <button className="w-full border-2 border-primaryColor hover:bg-primaryColor hover:text-white rounded mt-3  text-xl py-2 font-quicksand font-semibold transition-all duration-300">View Comparison</button>
        </div>
      </div>
    </div>
  );
};

export default page;
