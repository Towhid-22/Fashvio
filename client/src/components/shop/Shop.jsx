import React from "react";
import { RiStarFill } from "react-icons/ri";
import { ImCart } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa6";
import { LuArrowRightLeft } from "react-icons/lu";
import { MdRemoveRedEye } from "react-icons/md";
import { products } from "../../../public";

/* <LuArrowRightLeft />; <FaRegHeart /> <MdRemoveRedEye />*/

const Shop = () => {
  return (
    <div className="max-w-[1580px] mx-auto px-4 mt-20">
      <div>
        <div className="flex flex-wrap gap-4 justify-center xl:justify-start cursor-pointer">
          {products.map((product) => (
            <div
              key={product.id}
              className="border w-[280px] rounded p-3 flex flex-col justify-between gap-3 group relative"
            >
              <div className="">
                <div className="w-full flex items-center justify-center">
                  <img src={product.img} alt={product.title} className="w-40" />
                </div>
                <p className="font-quicksand font-bold leading-5 text-textPrimary">
                  {product.title}
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
                  title="Quick View"
                  className="border size-9 rounded-full flex items-center justify-center hover:bg-primaryColor text-textPrimary hover:text-white font-bold transition-all duration-300 cursor-pointer"
                >
                  <MdRemoveRedEye />
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
