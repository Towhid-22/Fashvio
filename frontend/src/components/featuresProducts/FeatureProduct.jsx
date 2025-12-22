"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Product from "../common/Product";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";

const FeatureProduct = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  function categoryList() {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/api/category/get-category`)
      .then((res) => {
        setCategories(res.data.data);
      });
  }
  function featureProduct() {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/api/product/get-featured-product`)
      .then((res) => {
        setProducts(res.data.data);
        setLoading(false);
      });
  }
  useEffect(() => {
    categoryList();
    featureProduct();
  }, []);

  const [menu, setMenu] = useState("All Products");
  const handleActiveTab = (name) => {
    setMenu(name);
  };
  const filterFeaturesProducts =
    menu == "All Products"
      ? products
      : products.filter((product) => product.category.name === menu);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-[1580px] mx-auto px-4 mt-20">
      <div className="flex justify-between gap-10 mb-5">
        <div className="flex items-baseline gap-10 mb-5">
          <h1 className="font-lato  sm:text-3xl font-semibold text-textPrimary">
            Features Products
          </h1>
          <ul className="hidden xl:flex items-center gap-3">
            {categories.map((items, index) => (
              <li
                onClick={() => handleActiveTab(items.name)}
                key={index}
                className={`font-quicksand text-xl font-semibold cursor-pointer hover:text-primaryColor ${
                  menu === items.name
                    ? "text-primaryColor border-b-4 border-primaryColor"
                    : "text-textPrimary"
                }`}
              >
                {items.name}
              </li>
            ))}
          </ul>
        </div>
        <Link href="/shop">
          <button className="text-xl bg-primaryColor px-4 py-1 rounded text-white font-lato">
            Browse All Products
          </button>
        </Link>
      </div>
      <div>
        <div className="flex flex-wrap gap-4 justify-center xl:justify-start cursor-pointer">
          {filterFeaturesProducts.length === 0 ? (
            <h1 className="font-quicksand text-2xl font-semibold text-textPrimary">
              No Features product found
            </h1>
          ) : (
            filterFeaturesProducts.map((product) => (
              <Product key={product._id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
