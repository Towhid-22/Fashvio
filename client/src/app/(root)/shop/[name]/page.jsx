"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { LuHeart } from "react-icons/lu";

const ProductPage = () => {
  const colors = ["black", "blue", "red", "green", "gray", "purple", "#253d4e"];
  const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
  const [color, setColor] = useState("black");
  const [size, setSize] = useState("XS");
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState("/products/monitor.png");

  const productImages = ["desktop", "camera", "laptop", "tv"];

  const handleQuantity = (type) => {
    if (type === "dec") setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    else setQuantity((prev) => prev + 1);
  };

  return (
    <div className="bg-gray-50 pb-20">
      <Breadcrumb />

      <div className="max-w-[1580px] mx-auto mt-8 px-4 lg:px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[45%] flex flex-col gap-4">
            <img
              src={mainImage}
              alt="Main Product"
              className="w-full h-60 sm:h-80 lg:h-[526px] xl:h-[550px] border rounded-lg object-contain p-2 cursor-pointer"
            />
            <div className="flex flex-row gap-4  mt-3">
              {productImages.map((img) => (
                <img
                  key={img}
                  src={`/products/${img}.png`}
                  alt=""
                  className="w-14 sm:w-20 lg:w-24 xl:w-28  border border-primaryColor/30 rounded-lg object-contain p-2 cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setMainImage(`/products/${img}.png`)}
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex flex-col justify-start">
            <h2 className="font-quicksand font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-[36px] leading-8 lg:leading-10 text-textPrimary">
              MSI PRO MP223 E2 21.45" 100Hz Full HD Business Monitor
            </h2>

            <p className="flex items-center gap-3 mt-2 text-sm sm:text-base">
              <FaStar className="text-yellow-400" />
              <span className="text-[#B6B6B6]">(32 Reviews)</span>
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-4">
              <p className="font-quicksand font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-primaryColor">
                $38
              </p>
              <p className="font-quicksand font-semibold text-sm sm:text-base lg:text-lg text-[#fdc040] flex flex-col items-start">
                26% Off
                <del className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#b6b6b6]">
                  $52
                </del>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 mt-3 text-gray-400 font-semibold text-sm sm:text-base">
              <div>
                <p>
                  Category:
                  <span className="text-textPrimary font-bold ml-1">
                    Monitor
                  </span>
                </p>
                <p>
                  Sku:
                  <span className="text-textPrimary font-bold ml-1">
                    monitor-msi-123
                  </span>
                </p>
              </div>
              <div>
                <p>
                  Availability:
                  <span className="text-green-500 font-bold ml-1">
                    In Stock
                  </span>
                </p>
                <p>
                  Brand:
                  <span className="text-textPrimary font-bold ml-1">MSI</span>
                </p>
              </div>
            </div>
            <p className="text-secondaryColor mt-4 text-[16px] sm:text-[17px] leading-6 sm:leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              quasi iusto explicabo id odio nam! Officiis reprehenderit dolores
              ipsum ratione tempora...
            </p>
            <h3 className="text-lg sm:text-xl font-lato font-semibold my-3 text-textPrimary">
              Size:
            </h3>
            <div className="flex gap-3 flex-wrap">
              {sizes.map((item) => (
                <li
                  onClick={() => setSize(item)}
                  key={item}
                  className={`flex items-center justify-center border border-primaryColor 
                    ${size === item ? "bg-primaryColor text-white" : ""} 
                    text-textPrimary transition-all rounded cursor-pointer px-3 py-1 sm:px-4 sm:py-2`}
                >
                  {item}
                </li>
              ))}
            </div>
            <h3 className="text-lg sm:text-xl font-lato font-semibold my-3 text-textPrimary">
              Color:
            </h3>
            <div className="flex gap-3 flex-wrap">
              {colors.map((item) => (
                <div
                  key={item}
                  onClick={() => setColor(item)}
                  className={`w-8 h-8 sm:w-10 sm:h-10 border-4 rounded-full cursor-pointer ${
                    color === item
                      ? "border-primaryColor"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: item }}
                ></div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <div className="border-2 rounded w-[120px] sm:w-[150px] h-10 sm:h-12 flex items-center justify-between px-2">
                <button
                  className="text-xl sm:text-2xl font-bold cursor-pointer text-primaryColor"
                  onClick={() => handleQuantity("dec")}
                >
                  ⎯
                </button>
                <span className="text-lg sm:text-xl">{quantity}</span>
                <button
                  className="text-xl sm:text-2xl font-bold cursor-pointer text-primaryColor"
                  onClick={() => handleQuantity("inc")}
                >
                  ✛
                </button>
              </div>
              <button className="font-lato font-semibold h-10 sm:h-12 uppercase px-4 sm:px-5 text-lg sm:text-xl bg-primaryColor flex items-center gap-2 sm:gap-3 rounded text-white">
                Add to Cart <GrCart className="text-xl sm:text-2xl" />
              </button>
              <button className="border-2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded text-secondaryColor">
                <LuHeart className="text-xl sm:text-2xl text-textPrimary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
