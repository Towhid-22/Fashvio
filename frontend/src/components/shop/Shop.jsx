import React from "react";
import { products } from "../../../public";
import Product from "../common/Product";
import Pagination from "../common/Pagination";
import { useSelector } from "react-redux";

const Shop = () => {
  const showProduct = useSelector((state) => state.product.showingProduct);
  return (
    <div className="max-w-[1580px] mx-auto px-1">
      <div className="relative">
        <div className="flex flex-col gap-4 justify-center items-center cursor-pointer">
          <Pagination itemsPerPage={showProduct} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
