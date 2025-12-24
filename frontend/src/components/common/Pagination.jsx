"use client";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import axios from "axios";

const Pagination = ({ itemsPerPage }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    function getAllProducts() {
      axios
        .get(`${process.env.NEXT_PUBLIC_URL}/api/product/get-product`)
        .then((res) => {
          setItems(res.data.data);
        });
    }
    getAllProducts();
  }, []);

  function Items({ currentItems }) {
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 h-full gap-3">
          {currentItems &&
            currentItems.map((item, index) => (
              <div>
                <Product product={item} key={index} />
              </div>
            ))}
        </div>
      </>
    );
  }
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel={<GoArrowRight />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<GoArrowLeft />}
        renderOnZeroPageCount={null}
        className="flex gap-3 my-20 justify-center items-center"
        pageLinkClassName="border border-green-500 text-xl w-[40px] h-[40px] flex items-center justify-center cursor-pointer rounded-full hover:bg-green-500 hover:text-white"
        activeLinkClassName="bg-green-500 text-white"
        previousLinkClassName="border border-green-500 text-xl w-[40px] h-[40px] flex items-center justify-center cursor-pointer rounded-full hover:bg-green-500 hover:text-white"
        nextLinkClassName="border border-green-500 text-xl w-[40px] h-[40px] flex items-center justify-center cursor-pointer rounded-full hover:bg-green-500 hover:text-white"
      />
    </>
  );
};

export default Pagination;
