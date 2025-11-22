"use client";
import PriceRange from "@/components/shop/PriceRange";
import Shop from "@/components/shop/Shop";
import ShopCategory from "@/components/shop/ShopCategory";
import React, { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Breadcrumb from "@/components/common/Breadcrumb";
import Pagination from "@/components/common/Pagination";
import Color from "@/components/shop/Color";
import Size from "@/components/shop/Size";
import Availability from "@/components/shop/Availability";
import PopulrBrand from "@/components/shop/PopulrBrand";
const page = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <>
      <Breadcrumb />
      <div className="max-w-[1580px] mx-auto lg:mt-3 relative">
        <div className="lg:hidden flex items-center justify-between my-2 px-4 xl:px-0">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 border px-2 py-1 rounded "
          >
            <IoFilterSharp />
            Filter
          </button>
          <div className="flex items-center gap-1">
            <p>Sort by:</p>
            <Select>
              <SelectTrigger className="w-[100px] rounded outline-none">
                <SelectValue placeholder="Default" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="newest" className={`hover:rounded`}>
                    Newest
                  </SelectItem>
                  <SelectItem value="Oldest">Oldest</SelectItem>
                  <SelectItem value="low">Low to High</SelectItem>
                  <SelectItem value="high">High to Low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="hidden lg:block w-full lg:w-[20%]">
            <PriceRange />
            <Availability />
            <ShopCategory />
            <Color />
            <Size />
            <PopulrBrand />
          </div>
          <div className="w-full lg:w-[85%]">
            <Shop />
          </div>
        </div>

        {/* ========================== mobile filter ========================== */}
        {isFilterOpen && (
          <div
            onClick={() => {
              setIsFilterOpen(false);
            }}
            className=" bg-black/20 w-full h-screen fixed lg:hidden top-14 left-0 z-50"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className=" bg-white h-screen lg:hidden w-[250px]"
            >
              <PriceRange />
              <ShopCategory />
              <Color />
              <Size />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default page;
