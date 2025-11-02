import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="border-b shadow px-4">
      <div className="max-w-[1580px] mx-auto px-4 py-3">
        <ul className="font-lato flex gap-3 text-xl font-semibold text-gray-600">
          <Link href="/dashboard">
            <li className="hover:bg-white py-2 transition-all duration-400 cursor-pointer">
              Dashboard
            </li>
          </Link>
          <Link href="/dashboard/category">
            <li className="hover:bg-white px-4 py-2 transition-all duration-400 cursor-pointer">
              Category
            </li>
          </Link>
          <Link href="/dashboard/subcategory">
            <li className="hover:bg-white px-4 py-2 transition-all duration-400 cursor-pointer">
              Subcategory
            </li>
          </Link>
          <Link href="/dashboard/product">
            <li className="hover:bg-white px-4 py-2 transition-all duration-400 cursor-pointer">
              Product
            </li>
          </Link>
          <Link href="/dashboard/order">
            <li className="hover:bg-white px-4 py-2 transition-all duration-400 cursor-pointer">
              Order
            </li>
          </Link>
          <Link href="/dashboard/user">
            <li className="hover:bg-white px-4 py-2 transition-all duration-400 cursor-pointer">
              User
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
