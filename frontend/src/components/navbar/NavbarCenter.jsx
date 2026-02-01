"use client";
import React, { use, useEffect, useRef, useState } from "react";
import { BiGitCompare } from "react-icons/bi";
import { RiHeart3Line } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { LuUser } from "react-icons/lu";
import { FaUserEdit } from "react-icons/fa";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaBars } from "react-icons/fa6";
import { categories } from "../../../public";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { GrLogout } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import axios from "axios";
import { setUserInfo } from "@/store/features/auth/authSlice";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";

const NavbarCenter = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.authentication.userInfo);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [productSearch, setProductSearch] = useState([]);
  const [search, setSearch] = useState(false);
  const sidebarRef = useRef(null);
  const searchRef = useRef(null);
  const profileRef = useRef(null);
  const searchProductRef = useRef(null);
  const [profilePopup, setProfilePopup] = useState(false);
  useEffect(() => {
    const handleClickOutside = (e) => {
      const targetedEvent = e.target;
      const sidebar = sidebarRef.current?.contains(targetedEvent);
      const search = searchRef.current?.contains(targetedEvent);
      const profile = profileRef.current?.contains(targetedEvent);
      const search_product = searchProductRef.current?.contains(targetedEvent);
      if (!sidebar && !search && !profile && !search_product) {
        setSideBarOpen(false);
        setSearch(false);
        setProfilePopup(false);
        setProductSearch(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [sideBarOpen, search]);
  const handleLogout = () => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_URL}/api/authentication/logout`,
        {},
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        Cookies.remove("fashvio");
        dispatch(setUserInfo(null));
        toast.success("Logout Successfully!");
        window.location.reload(true);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
  };
  const handleSearchProducts = (e) => {
    e.preventDefault();
    if (e.target.value === "") return setProductSearch([]);
    const search = e.target.value;
    axios
      .get(
        `${process.env.NEXT_PUBLIC_URL}/api/product/search-product?search=${search}`,
      )
      .then((res) => {
        setProductSearch(res.data.data);
      })
      .catch((error) => {
        console.log(error);
        // toast.error(error?.response?.data?.message);
      });
  };

  return (
    <>
      {/* ======================= for xl device ======================= */}
      <div className="border-b hidden xl:block border-borderColor py-3">
        <div className="mx-auto max-w-[1580px] px-4 md:px-0 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[30px]">
              <Toaster />
              {/* Logo */}
              <Link href="/">
                <img src="/logo.png" alt="logo" />
              </Link>
              {/* Search Bar */}
            </div>
            <div className="w-[596px] border-2 border-primaryColor/40 rounded-[5px] relative">
              <input
                onChange={handleSearchProducts}
                className="placeholder:text-sm placeholder:italic p-3 w-full outline-none text-textprimaryColor"
                type="text"
                placeholder="Search for products..."
              />
              <button className="text-sm leading-3.5 font-quicksand font-semibold bg-primaryColor text-white px-[22px] py-[13px] rounded-[3px] absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer">
                Search
              </button>
              {productSearch?.length > 0 && (
                <div
                  ref={searchProductRef}
                  className="absolute top-[50px] left-0 right-0 bg-white shadow-xs p-4 z-50"
                >
                  {productSearch.map((product) => (
                    <Link
                      key={product._id}
                      href={`/shop/${product.slug}`}
                      className="flex items-center gap-3 mb-2 border p-2 rounded"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="size-10"
                      />
                      <div>
                        <h1>{product.name}</h1>
                        <p>৳{product.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center">
              {userData?.role == "admin" ? (
                <Link href="/dashboard">
                  <button className="text-primaryColor font-quicksand font-medium leading-6.5 text-sm flex items-center gap-2 shadow py-2 px-4 rounded-[5px] border-2 border-secondaryColorColor/20 cursor-pointer mr-[30px]">
                    Dashboard
                  </button>
                </Link>
              ) : null}
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
                  {userData ? (
                    <div className="relative" ref={profileRef}>
                      <button
                        onClick={() => setProfilePopup(true)}
                        className="flex items-center justify-center gap-1 text-white font-semibold text-xl cursor-pointer w-8 h-8 rounded-full bg-primaryColor "
                      >
                        {userData?.username?.charAt(0)}
                      </button>
                      {profilePopup && (
                        <div className="shadow-md w-[200px] py-2 rounded absolute right-0 top-13 z-10 bg-primaryColor">
                          <ul>
                            <Link href={"/account/manage-account"}>
                              <li className="text-white text-base flex items-center gap-2  cursor-pointer transition-all duration-300 hover:bg-primaryColor hover:text-white py-1 px-3">
                                <FaUserEdit /> Manage Profile
                              </li>
                            </Link>
                            <li className="text-white text-base flex items-center gap-2  cursor-pointer transition-all duration-300 hover:bg-primaryColor hover:text-white py-1 px-3">
                              <HiShoppingBag /> My Orders
                            </li>
                            <li className="text-white text-base  flex items-center gap-2   cursor-pointer transition-all duration-300 hover:bg-primaryColor hover:text-white py-1 px-3">
                              <FaRegHeart /> My Wish List
                            </li>
                            <li
                              onClick={handleLogout}
                              className="text-white text-base  flex items-center gap-2   cursor-pointer transition-all duration-300 hover:bg-primaryColor hover:text-white py-1 px-3"
                            >
                              <GrLogout /> Logout
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href="/account/login"
                      className="flex items-center gap-1"
                    >
                      <LuUser className="te xt-2xl text-black" />
                      Account
                    </Link>
                  )}
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
            <h3 className="text-xl font-bold text-primaryColor font-quicksand tracking-wider">
              Fashvio
            </h3>
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

      <div className="px-4">
        <div
          ref={searchRef}
          className={`w-full xl:hidden border-2 border-primaryColor/40 rounded  relative px-2 transition-all duration-300 ease-in-out ${
            search ? "max-h-[50px] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <input
            className="placeholder:text-sm placeholder:italic p-1 w-full outline-none text-textprimaryColor"
            type="text"
            placeholder="Search for products..."
          />
          <button className="absolute right-2  top-1/2 -translate-y-1/2 cursor-pointer">
            <IoSearch className="text-xl" />
          </button>
        </div>
      </div>

      {/* ======================= sidebar modal ======================= */}
      <div
        ref={sidebarRef}
        onClick={() => setSideBarOpen(false)}
        className={`fixed top-16 left-0 h-screen w-full bg-black/20 z-50 transition-opacity duration-300 ease-in-out 
    ${sideBarOpen ? "opacity-100 visible" : "opacity-0 invisible"}
  `}
      >
        <div
          className={`
      bg-white max-w-[280px] h-screen -mt-5 px-4 transition-transform duration-300 ease-in-out
      ${sideBarOpen ? "translate-x-0" : "-translate-x-full"}
    `}
        >
          <ul className="flex flex-col w-full gap-5 mt-4">
            {categories.map((item) => (
              <li
                key={item.id}
                className="relative group font-quicksand font-semibold text-gray-700 cursor-pointer"
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

      {/* ======================= manage profile ======================= */}
    </>
  );
};

export default NavbarCenter;
