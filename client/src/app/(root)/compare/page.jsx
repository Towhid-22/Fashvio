import React from "react";
import { IoSearch } from "react-icons/io5";

const page = () => {
  const product = [
    {
      id: 1,
      title: "AMD Ryzen 5 3400G Processor Desktop PC",
      img: "/products/desktop.png",
      price: 24900,
      rating: 4.5,
      category: "Desktop",
      isFeatured: true,
      newArrival: false,
    },
    {
      id: 2,
      title: "MSI MAG 342CQR E2 34 inch UWQHD 180Hz VA Curved Gaming Monitor",
      img: "/products/monitor.png",
      price: 61000,
      rating: 5.0,
      category: "Monitor",
      isFeatured: true,
      newArrival: true,
    },
  ];
  return (
    <div className="max-w-[1580px] mx-auto px-4 mt-15">
      <div className="flex items-center justify-center  p-4 sm:py-20 rounded">
        {/* <div className="bg-white py-5 px-2 sm:p-5 rounded w-[280px] sm:w-[500px]">
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
          <button className="w-full border-2 border-primaryColor hover:bg-primaryColor hover:text-white rounded mt-3  text-xl py-2 font-quicksand font-semibold transition-all duration-300">
            View Comparison
          </button>
        </div> */}
        <div className="flex gap-2">
          <div className="border rounded border-gray-200 md:w-[350px] lg:w-[450px] xl:w-[600px]">
            <div className="relative p-3">
              <input
                type="text"
                placeholder="Select Product"
                className="w-full py-2 px-4 outline-none border border-gray-300 rounded"
              />
              <IoSearch className="text-xl absolute top-1/2 right-6 -translate-y-1/2" />
            </div>
            <div className="flex items-center justify-center w-full mb-5">
              <img
                src="/products/monitor.png"
                alt="monitor"
                className="w-80 object-contain mt-2"
              />
            </div>
            <p className="font-quicksand sm:text-xl font-semibold border-b border-gray-200 py-1 px-3">
              AMD Ryzen 5 3400G Processor <br /> Desktop PC
            </p>
            <p className="border-b border-gray-200 py-2 px-3">Price: 61000</p>
            <p className="border-b border-gray-200 py-2 px-3">Rating: 5.0</p>
            <p className="py-2 px-3">Category: Monitor</p>
          </div>
          <div className="border rounded border-gray-200 md:w-[350px] lg:w-[450px]  xl:w-[600px]">
            <div className="relative p-3">
              <input
                type="text"
                placeholder="Select Product"
                className="w-full py-2 px-4 outline-none border border-gray-300 rounded"
              />
              <IoSearch className="text-xl absolute top-1/2 right-6 -translate-y-1/2" />
            </div>
            <div className="flex items-center justify-center w-full mb-5">
              <img
                src="/products/monitor.png"
                alt="monitor"
                className="w-80 object-contain mt-2"
              />
            </div>
            <p className="font-quicksand sm:text-xl font-semibold border-b border-gray-200 py-1 px-3">
              MSI MAG 342CQR E2 34 inch UWQHD 180Hz VA Curved Gaming Monitor
            </p>
            <p className="border-b border-gray-200 py-2 px-3">Price: 61000</p>
            <p className="border-b border-gray-200 py-2 px-3">Rating: 5.0</p>
            <p className="py-2 px-3">Category: Monitor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
