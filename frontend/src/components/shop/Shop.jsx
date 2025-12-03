import React from "react";
import { products } from "../../../public";
import Product from "../common/Product";
import Pagination from "../common/Pagination";

const Shop = () => {
  return (
    <div className="max-w-[1580px] mx-auto px-1">
      <div className="relative">
        <div className="flex flex-col gap-4 justify-center items-center cursor-pointer">
          <Pagination itemsPerPage={12} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
