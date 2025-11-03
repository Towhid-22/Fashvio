"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  const [sidebarModal, setSidebarModal] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  const pathItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Category", path: "/dashboard/category" },
    { name: "Subcategory", path: "/dashboard/subcategory" },
    { name: "Product", path: "/dashboard/product" },
    { name: "Order", path: "/dashboard/order" },
    { name: "User", path: "/dashboard/user" },
  ];
  return (
    <>
      <div className="border-b shadow px-4">
        {/* ============================ desktop sidebar modal ============================ */}
        <div className="max-w-[1580px] mx-auto py-3">
          <div className="flex items-center gap-12 justify-between lg:justify-start">
            <Link href="/">
              <img src="/logo.png" alt="logo" className="w-30 md:w-auto" />
            </Link>
            <ul className="hidden font-lato md:flex gap-1 font-semibold text-gray-600">
              {pathItems.map((item) => (
                <Link href={item.path} key={item.path}>
                  <li
                    className={`px-4 py-2 transition-all duration-400 cursor-pointer rounded ${
                      pathname == item.path ? "bg-primaryColor text-white" : ""
                    }`}
                  >
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
            <button
              onClick={() => setSidebarModal(!sidebarModal)}
              className="border p-2 rounded shadow md:hidden"
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>
        {/* ============================ mobile sidebar modal ============================ */}
        {sidebarModal && (
          <div
            onClick={() => setSidebarModal(false)}
            className="bg-black/20 absolute top-19 left-0 h-screen w-full z-50"
          >
            <ul className="lg:hidden font-lato md:flex gap-1 font-semibold text-gray-600 bg-white w-50 h-screen px-4">
              {pathItems.map((item) => (
                <Link href={item.path} key={item.path}>
                  <li
                    onClick={() => setSidebarModal(false)}
                    className={`px-4 py-2 transition-all duration-400 cursor-pointer rounded ${
                      pathname == item.path ? "bg-primaryColor text-white" : ""
                    }`}
                  >
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
