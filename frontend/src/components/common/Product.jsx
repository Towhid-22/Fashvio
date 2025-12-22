"use client";
import React, { useState } from "react";
import { RiStarFill } from "react-icons/ri";
import { ImCart } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa6";
import { LuArrowRightLeft } from "react-icons/lu";
import { MdRemoveRedEye } from "react-icons/md";

const Product = ({ product }) => {
  const [qucikView, setQucikView] = useState(false);
  const [id, setId] = useState(null);
  const qucikViewBtn = (_id) => {
    setQucikView(!qucikView);
    setId(_id);
  };
  return (
    <div>
      <div
        key={product._id}
        className="border w-[280px] md:w-[241px] h-[370px] rounded p-3 flex flex-col justify-between gap-3 group relative"
      >
        <div className="">
          <div className="w-full flex items-center justify-center">
            <img
              src={product?.image}
              alt={product.name}
              className="size-40 object-contain"
            />
          </div>
          <p className="font-quicksand font-bold leading-5 text-textPrimary">
            {product.name}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <RiStarFill className="text-yellow-400" />
          <span>({product.rating})</span>
        </div>
        <div className="font-quicksand font-bold leading-5 text-textPrimary flex items-center gap-2">
          <p>${product.price}</p>
          <del className="font-normal text-textPrimary/50">$16.00</del>
        </div>
        <div className="w-full">
          <button className="text-primaryColor w-full bg-primaryColor/20 flex items-center justify-center text-xl py-1.5 px-2 font-bold cursor-pointer rounded gap-3">
            <ImCart /> Add
          </button>
        </div>
        <ul className="absolute top-1 right-1 hidden items-center gap-1 group-hover:flex group-hover:flex-col group-hover:gap-1">
          <li
            title="Add to Compare"
            className="border size-9 rounded-full flex items-center justify-center hover:bg-primaryColor text-textPrimary hover:text-white font-bold transition-all duration-300 cursor-pointer"
          >
            <LuArrowRightLeft />
          </li>
          <li
            title="Add to Favorite"
            className="border size-9 rounded-full flex items-center justify-center hover:bg-primaryColor text-textPrimary hover:text-white font-bold transition-all duration-300 cursor-pointer"
          >
            <FaRegHeart />
          </li>
          <li
            onClick={() => qucikViewBtn(product._id)}
            title="Quick View"
            className="border size-9 rounded-full flex items-center justify-center hover:bg-primaryColor text-textPrimary hover:text-white font-bold transition-all duration-300 cursor-pointer"
          >
            <MdRemoveRedEye />
          </li>
        </ul>
      </div>

      {qucikView && product._id === id && (
        <div
          onClick={() => setQucikView(false)}
          className="fixed p-5 inset-0 sm:p-0 md:inset-0 flex items-center justify-center bg-black/50 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] shadow p-5 relative"
          >
            <div
              key={product.id}
              className="w-full h-full rounded p-3 flex flex-col justify-between gap-3 group relative"
            >
              <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="size-40 object-contain"
                />
                <div className="flex flex-col gap-3">
                  <p className="font-quicksand font-bold leading-5 text-textPrimary">
                    {product.name}
                  </p>
                  <div className="flex items-center gap-3">
                    <RiStarFill className="text-yellow-400" />
                    <span>({product.rating})</span>
                  </div>
                  <div className="font-quicksand font-bold leading-5 text-textPrimary flex items-center gap-2">
                    <p>${product.price}</p>
                    <del className="font-normal text-textPrimary/50">
                      $16.00
                    </del>
                  </div>
                  <div className="w-full">
                    <button className="text-primaryColor w-full bg-primaryColor/20 flex items-center justify-center text-xl py-1.5 px-2 font-bold cursor-pointer rounded gap-3">
                      <ImCart /> Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
