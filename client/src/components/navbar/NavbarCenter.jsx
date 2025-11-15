"use client";
import React, { useState } from "react";
import { BiGitCompare } from "react-icons/bi";
import { RiHeart3Line } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { LuUser } from "react-icons/lu";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaBars } from "react-icons/fa6";
import { categories } from "../../../public";
import { IoSearch } from "react-icons/io5";

const NavbarCenter = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [search, setSearch] = useState(false);
  return (
    <>
      {/* ======================= for xl device ======================= */}
      <div className="border-b hidden xl:block border-borderColor py-6">
        <div className="mx-auto max-w-[1580px] px-4 md:px-0 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[30px]">
              {/* Logo */}
              <Link href="/">
                <img src="/logo.png" alt="logo" className="cursor-pointer" />
              </Link>
              {/* Search Bar */}
            </div>
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
            {/* Right Section */}
            <div className="flex items-center">
              <Link href="/dashboard">
                <button className="text-primaryColor font-quicksand font-medium leading-6.5 text-sm flex items-center gap-2 shadow py-2 px-4 rounded-[5px] border-2 border-secondaryColorColor/20 cursor-pointer mr-[30px]">
                  {/* Became Vendor <LiaLongArrowAltRightSolid /> */}
                  Dashboard
                </button>
              </Link>
              {/* Icons */}
              <ul className="flex items-center gap-3">
                <li className="font-lato leading-4 text-secondaryColor flex items-center gap-1 cursor-pointer">
                  <Link
                    href="/shop"
                    className="flex items-center justify-center gap-1"
                  >
                    <HiOutlineShoppingBag className="text-2xl text-black" />
                    Shop
                  </Link>
                </li>
                <li className="font-lato leading-4 text-secondaryColor flex items-center gap-1 cursor-pointer">
                  <Link href="/compare" className="flex items-center">
                    <div className="relative">
                      <BiGitCompare className="text-2xl text-black" />
                      <sup className="w-5 h-5 bg-primaryColor rounded-full flex items-center justify-center text-white text-[12px] absolute -top-2.5 -right-2.5">
                        0
                      </sup>
                    </div>
                    Compare
                  </Link>
                </li>
                <li className="font-lato leading-4 text-secondaryColor flex items-center gap-1 cursor-pointer">
                  <Link href="#" className="flex items-center gap-1">
                    <div className="relative">
                      <RiHeart3Line className="text-2xl text-black" />
                      <sup className="w-5 h-5 bg-primaryColor rounded-full flex items-center justify-center text-white text-[12px] absolute -top-2.5 -right-2.5">
                        0
                      </sup>
                    </div>
                    Wishlist
                  </Link>
                </li>
                <li className="font-lato leading-4 text-secondaryColor flex items-center gap-1 cursor-pointer">
                  <Link href="/cart" className="flex items-center gap-1">
                    <div className="relative">
                      <BsCart3 className="text-2xl text-black" />
                      <sup className="w-5 h-5 bg-primaryColor rounded-full flex items-center justify-center text-white text-[12px] absolute -top-2.5 -right-2.5">
                        0
                      </sup>
                    </div>
                    Cart
                  </Link>
                </li>
                <li className="font-lato leading-4 text-secondaryColor  cursor-pointer">
                  <Link
                    href="/account/login"
                    className="flex items-center gap-1"
                  >
                    <LuUser className="te xt-2xl text-black" />
                    Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= for small device ======================= */}
      <div className="xl:hidden">
        <div className="flex items-center gap-[30px] justify-between border-b border-borderColor shadow py-4 px-4">
          <button onClick={() => setSideBarOpen(!sideBarOpen)}>
            <FaBars className="text-xl" />
          </button>
          <Link href="/">
            <img
              src="/logo.png"
              alt="logo"
              className="cursor-pointer w-20 sm:w-30"
            />
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearch(!search)}
              className="text-xl cursor-pointer"
            >
              <IoSearch />
            </button>
            <Link href="/cart" className="flex items-center gap-1 relative">
              <BsCart3 className="text-xl text-black" />
              <sup className="w-4 h-4 bg-primaryColor rounded-full flex items-center justify-center text-white text-[12px] absolute -top-2.5 -right-2.5">
                0
              </sup>
            </Link>
          </div>
        </div>
      </div>

      {search && (
        <div className="w-full xl:hidden border-2 border-primaryColor/40 rounded-[1px] relative">
          <input
            className="placeholder:text-sm placeholder:italic p-3 w-full outline-none text-textprimaryColor"
            type="text"
            placeholder="Search for products..."
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer">
            <IoSearch className="text-xl" />
          </button>
        </div>
      )}

      {/* ======================= sidebar modal ======================= */}
      {sideBarOpen && (
        <div
          onClick={() => setSideBarOpen(false)}
          className="bg-black/20 fixed top-16 left-0 h-screen w-full z-50 "
        >
          <div className="bg-white max-w-[280px] h-screen  px-4">
            <ul
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col w-full gap-5 "
            >
              {categories.map((item) => (
                <li
                  key={item.id}
                  className={`relative group font-quicksand font-semibold text-gray-700 cursor-pointer`}
                >
                  <Link href="/shop">
                    <p className="hover:text-primaryColor transition">
                      {item.name}
                    </p>
                  </Link>

                  {item.subcategory && (
                    <ul className="absolute left-0 top-8 mt-2 w-40 bg-white border border-gray-200 rounded-[5px] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                      {item.subcategory.map((sub) => (
                        <li
                          key={sub.id}
                          className="px-3 py-2 text-sm text-gray-600 hover:bg-primaryColor/10 hover:text-primaryColor transition"
                        >
                          {sub.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarCenter;
