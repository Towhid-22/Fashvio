"use client";
import PriceRange from "@/components/shop/PriceRange";
import Shop from "@/components/shop/Shop";
import ShopCategory from "@/components/shop/ShopCategory";
import React, { useEffect, useState } from "react";
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
import Color from "@/components/shop/Color";
import Size from "@/components/shop/Size";
import Availability from "@/components/shop/Availability";
import PopulrBrand from "@/components/shop/PopulrBrand";
import { useDispatch, useSelector } from "react-redux";
import {
  showingProduct,
  sortProduct,
} from "@/store/features/product/productSlice";
const page = () => {
  const dispatch = useDispatch();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const sortby = [
    {
      id: 1,
      value: "newest",
      label: "Newest",
    },
    {
      id: 2,
      value: "oldest",
      label: "Oldest",
    },
    {
      id: 3,
      value: "low_to_high",
      label: "Low to High",
    },
    {
      id: 4,
      value: "high_to_low",
      label: "High to Low",
    },
    {
      id: 5,
      value: "name_asc",
      label: "A-Z",
    },
    {
      id: 6,
      value: "name_desc",
      label: "Z-A",
    },
  ];
  const [sort, setSort] = useState(sortby[0].value);
  const showing = [
    {
      id: 1,
      value: 10,
      label: 10,
    },
    {
      id: 2,
      value: 20,
      label: 20,
    },
    {
      id: 3,
      value: 30,
      label: 30,
    },
  ];
  const [show, setShow] = useState(showing[0].value);
  useEffect(() => {
    dispatch(showingProduct(show));
    dispatch(sortProduct(sort));
  }, [show, sort]);
  return (
    <>
      <Breadcrumb />
      <div className="max-w-[1580px] mx-auto lg:mt-3 relative">
        <div className="lg:hidden flex items-center justify-between my-2 px-4 xl:px-0">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 border px-2 py-1 rounded"
          >
            <IoFilterSharp />
            Filter
          </button>
          <div className="flex items-center gap-1">
            <p>Sort by:</p>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-[100px] rounded outline-none">
                <SelectValue placeholder="Default" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {sortby.map((item) => (
                    <SelectItem
                      key={item.id}
                      value={item.value}
                      className={`hover:rounded`}
                    >
                      {item.label}
                    </SelectItem>
                  ))}
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
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <p>Showing:</p>
                <Select value={show} onValueChange={setShow}>
                  <SelectTrigger className="w-[100px] rounded outline-none">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {showing.map((item) => (
                        <SelectItem
                          key={item.id}
                          value={item.value}
                          className={`hover:rounded`}
                        >
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-3">
                <p>Sort by:</p>
                <Select value={sort} onValueChange={setSort}>
                  <SelectTrigger className="w-[150px] rounded outline-none">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {sortby.map((item) => (
                        <SelectItem
                          key={item.id}
                          value={item.value}
                          className={`hover:rounded`}
                        >
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Shop />
          </div>
        </div>

        {/* ========================== mobile filter ========================== */}
        {isFilterOpen && (
          <div
            onClick={() => {
              setIsFilterOpen(false);
            }}
            className="bg-black/20 w-full fixed lg:hidden top-14 left-0 z-50 h-screen"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className=" bg-white h-screen lg:hidden w-[250px]  overflow-y-auto px-4"
            >
              <PriceRange />
              <Availability />
              <ShopCategory />
              <Color />
              <Size />
              <PopulrBrand />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default page;
