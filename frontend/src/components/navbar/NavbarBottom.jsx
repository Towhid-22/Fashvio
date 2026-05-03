"use client";
import React, { useEffect, useState } from "react";
import { categories } from "../../../public";
import Link from "next/link";
import axios from "axios";

const NavbarBottom = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    function getAllCategory() {
      axios
        .get(`${process.env.NEXT_PUBLIC_URL}/api/category/get-category`)
        .then((res) => {
          setCategories(res.data.data);
        });
    }
    getAllCategory();
  }, []);
  return (
    <div className="shadow py-4 hidden xl:block">
      <div className="mx-auto max-w-[1580px] px-4 md:px-0">
        <ul className="flex items-center gap-5">
          {categories.map((item) => (
            <li
              key={item._id}
              className={`relative group font-quicksand font-semibold text-gray-700 cursor-pointer`}
            >
              <Link href="/shop">
                {" "}
                <p className="hover:text-primaryColor transition">
                  {item.name}
                </p>
              </Link>

              {item.subcategory && (
                <ul className="absolute left-0 top-8 mt-2 w-40 bg-white border border-gray-200 rounded-[5px] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  {item.subcategory.map((sub) => (
                    <li
                      key={sub._id}
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
  );
};

export default NavbarBottom;
