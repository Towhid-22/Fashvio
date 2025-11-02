"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
const Sidebar = () => {
  const [sidebarModal, setSidebarModal] = useState(false);
  return (
    <>
      <div className="border-b shadow px-4">
        <div className="max-w-[1580px] mx-auto py-3">
          <div className="flex items-center gap-12 justify-between">
            <Link href="/">
              <img src="/logo.png" alt="logo" />
            </Link>
            <ul className="hidden font-lato md:flex gap-1 font-semibold text-gray-600">
              <Link href="/dashboard">
                <li className="hover:bg-white pr-4 py-2 transition-all duration-400 cursor-pointer">
                  Dashboard
                </li>
              </Link>
              <Link href="/dashboard/category">
                <li className="hover:bg-white pr-4 py-2 transition-all duration-400 cursor-pointer">
                  Category
                </li>
              </Link>
              <Link href="/dashboard/subcategory">
                <li className="hover:bg-white pr-4 py-2 transition-all duration-400 cursor-pointer">
                  Subcategory
                </li>
              </Link>
              <Link href="/dashboard/product">
                <li className="hover:bg-white pr-4 py-2 transition-all duration-400 cursor-pointer">
                  Product
                </li>
              </Link>
              <Link href="/dashboard/order">
                <li className="hover:bg-white pr-4 py-2 transition-all duration-400 cursor-pointer">
                  Order
                </li>
              </Link>
              <Link href="/dashboard/user">
                <li className="hover:bg-white pr-4 py-2 transition-all duration-400 cursor-pointer">
                  User
                </li>
              </Link>
            </ul>
            <button
              onClick={() => setSidebarModal(!sidebarModal)}
              className="border p-2 rounded shadow md:hidden"
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>

        {sidebarModal && (
          <div className="bg-black/20 absolute top-19 left-0 h-screen w-full z-50">
            <ul className="lg:hidden font-lato md:flex gap-1 font-semibold text-gray-600 bg-white w-50 h-screen px-4">
              <Link href="/dashboard">
                <li className="hover:bg-white pr-4 py-2 transition-all duration-400 cursor-pointer">
                  Dashboard
                </li>
              </Link>
              <Link href="/dashboard/category">
                <li className="hover:bg-white pr-4 py-2 transition-all duration-400 cursor-pointer">
                  Category
                </li>
              </Link>
              <Link href="/dashboard/subcategory">
                <li className="hover:bg-white pr-4 py-2 transition-all duration-400 cursor-pointer">
                  Subcategory
                </li>
              </Link>
              <Link href="/dashboard/product">
                <li className="hover:bg-white pr-4 py-2 transition-all duration-400 cursor-pointer">
                  Product
                </li>
              </Link>
              <Link href="/dashboard/order">
                <li className="hover:bg-white pr-4 py-2 transition-all duration-400 cursor-pointer">
                  Order
                </li>
              </Link>
              <Link href="/dashboard/user">
                <li className="hover:bg-white pr-4 py-2 transition-all duration-400 cursor-pointer">
                  User
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
