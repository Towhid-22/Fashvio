"use client";
import React, { useState } from "react";
import { products } from "../../../public";
import Link from "next/link";
import Product from "../common/Product";

const FeatureProduct = () => {
  const [menu, setMenu] = useState("All Products");

  // const featureCategory = [
  //   "All Products",
  //   ...new Set(
  //     products.map((product) => product.isFeatured && product.category)
  //   ),
  // ];
  const featureCategory = [
    {
      id: 1,
      name: "All Products",
    },
    {
      id: 2,
      name: "Desktop",
    },
    {
      id: 3,
      name: "Laptop",
    },
    {
      id: 4,
      name: "Tablet",
    },
    {
      id: 5,
      name: "Camera",
    },
    {
      id: 6,
      name: "Power",
    },
  ];

  const handleActiveTab = (name) => {
    setMenu(name);
  };
  const filterFeaturesProducts =
    menu === "All Products"
      ? products.filter((product) => {
          return product.isFeatured;
        })
      : products.filter((product) => {
          return product.isFeatured && product.category === menu;
        });
  return (
    <div className="max-w-[1580px] mx-auto px-4 mt-20">
      <div className="flex justify-between gap-10 mb-5">
        <div className="flex items-baseline gap-10 mb-5">
          <h1 className="font-lato  sm:text-3xl font-semibold text-textPrimary">
            Features Products
          </h1>
          <ul className="hidden xl:flex items-center gap-3">
            {featureCategory.map((category, index) => (
              <li
                onClick={() => handleActiveTab(category.name)}
                key={index}
                className={`font-quicksand text-xl font-semibold cursor-pointer hover:text-primaryColor ${
                  menu === category.name
                    ? "text-primaryColor border-b-4 border-primaryColor"
                    : "text-textPrimary"
                }`}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <Link href="/shop">
          <button className="text-xl bg-primaryColor px-4 py-1 rounded text-white font-lato">
            All Products
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
              <Product key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
