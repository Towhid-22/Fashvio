"use client";
import React, { useEffect, useState } from "react";
// import { categories } from "../../../public";
import axios from "axios";
import Link from "next/link";

const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    function categoryList() {
      axios
        .get(`${process.env.NEXT_PUBLIC_URL}/api/category/get-category`)
        .then((res) => {
          setCategories(res.data.data);
        });
    }
    categoryList();
  }, []);
  return (
    <div className="mx-auto max-w-[1580px] px-4 mt-6">
      <h1 className="font-lato  sm:text-3xl font-semibold mb-6 text-textPrimary">
        All Category
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-7 xl:grid-cols-10 2xl:grid-cols-12 gap-4 place-items-center">
        {categories.map((item) => (
          <Link key={item._id} href={`/shop/${item.slug}`}>
            <div className="shadow p-3 flex flex-col items-center w-30 h-30 justify-center rounded-[5px] cursor-pointer hover:bg-primaryColor/20 transition-all duration-300">
              <img src={item.image} alt={item.name} className="w-12 h-12" />
              <p className="text-textprimaryColor font-quicksand font-semibold mt-1">
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
