import React from "react";
import { BiGitCompare } from "react-icons/bi";
import { RiHeart3Line } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { LuUser } from "react-icons/lu";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Link from "next/link";

const NavbarCenter = () => {
  return (
    <div className="border-b border-borderColor py-6">
      <div className="mx-auto max-w-[1580px] px-4 ">
        <div className="flex items-center justify-between">
          <div className="flex itecms-center gap-[30px]">
            {/* Logo */}
            <Link href="/">
              <img src="/logo.png" alt="logo" className="cursor-pointer" />
            </Link>
            {/* Search Bar */}
            <div className="w-[596px] border-2 border-primaryColor/40 rounded-[5px] relative">
              <input
                className="placeholder:text-sm placeholder:italic p-3 w-full outline-none text-textprimaryColor"
                type="text"
                placeholder="Search for products..."
              />
              <button className="text-sm leading-3.5 font-quicksand font-semibold bg-primaryColor text-white px-[22px] py-[13px] rounded-[3px] absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer">
                Search
              </button>
            </div>
          </div>
          {/* Right Section */}
          <div className="flex items-center">
            <button className="text-primaryColor font-quicksand font-medium leading-6.5 text-sm flex items-center gap-2 shadow py-2 px-4 rounded-[5px] border-2 border-secondaryColorColor/20 cursor-pointer mr-[30px]">
              Became Vendor <LiaLongArrowAltRightSolid />
            </button>
            {/* Icons */}
            <ul className="flex items-center gap-3">
              <li className="font-lato leading-4 text-secondaryColor flex items-center gap-1 cursor-pointer">
                <Link href="/compare" className="flex items-center justify-center">
                  <div className="relative">
                    <BiGitCompare className="text-2xl text-black" />
                    <sup className="w-5 h-5 bg-primaryColor rounded-full flex items-center justify-center text-white text-[12px] absolute top-[-10px] right-[-10px]">
                      0
                    </sup>
                  </div>
                  Compare
                </Link>
              </li>
              <li className="font-lato leading-4 text-secondaryColor flex items-center gap-1 cursor-pointer">
                <div className="relative">
                  <RiHeart3Line className="text-2xl text-black" />
                  <sup className="w-5 h-5 bg-primaryColor rounded-full flex items-center justify-center text-white text-[12px] absolute top-[-10px] right-[-10px]">
                    0
                  </sup>
                </div>
                Wishlist
              </li>
              <li className="font-lato leading-4 text-secondaryColor flex items-center gap-1 cursor-pointer">
                <div className="relative">
                  <BsCart3 className="text-2xl text-black" />
                  <sup className="w-5 h-5 bg-primaryColor rounded-full flex items-center justify-center text-white text-[12px] absolute top-[-10px] right-[-10px]">
                    0
                  </sup>
                </div>
                Cart
              </li>
              <li className="font-lato leading-4 text-secondaryColor  cursor-pointer">
                <Link href="/account/login" className="flex items-center gap-1">
                  <LuUser className="te xt-2xl text-black" />
                  Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarCenter;
