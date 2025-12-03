"use client";
import React, { useState } from "react";
import { PiDesktopTowerLight } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine, RiCloseLargeFill } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FiUploadCloud } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
const Subcategory = () => {
  const [subCategoryEditModal, setSubCategoryEditModal] = useState(false);
  const [createSubCategoryModal, setCreateSubCategoryModal] = useState(false);

  return (
    <>
      <div className="max-w-[1580px] mx-auto px-4">
        {/*  ====================== Search and add category button for desktop ======================= */}
        <div className="hidden sm:flex py-3 items-center gap-5 justify-between">
          <div>
            <label
              htmlFor="sort"
              className="text-textPrimary/60 font-lato pr-2"
            >
              Showing:
            </label>
            <select
              id="sort"
              className="appearance-none border-2 border-gray-200 rounded w-20 py-1 px-4 text-gray-700 leading-tight"
            >
              <option>10</option>
              <option>30</option>
              <option>50</option>
            </select>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search here"
              className="w-[200px] lg:w-[500px] outline-none border p-2 rounded"
            />
            <IoIosSearch className="text-2xl absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer" />
          </div>
          <button
            onClick={() => setCreateSubCategoryModal(true)}
            className="flex items-center gap-2 border py-2 px-3 rounded cursor-pointer text-primaryColor border-primaryColor font-semibold font-quicksand"
          >
            <FaPlus /> Add New
          </button>
        </div>
        {/*  ====================== Search and add category button for mobile ======================= */}
        <div>
          <div className="flex py-1 sm:hidden items-center gap-2 justify-between mt-2">
            <div>
              <label
                htmlFor="sort"
                className="text-textPrimary/60 font-lato pr-2 text-sm"
              >
                Showing:
              </label>
              <select
                id="sort"
                className="appearance-none border-2 border-gray-200 rounded w-15 py-1 px-4 text-gray-700 leading-tight"
              >
                <option>10</option>
                <option>30</option>
                <option>50</option>
              </select>
            </div>
            <button
              onClick={() => setCreateSubCategoryModal(true)}
              className="flex items-center gap-2 border py-1 px-2 rounded cursor-pointer text-primaryColor border-primaryColor font-semibold font-quicksand"
            >
              <FaPlus /> Add New
            </button>
          </div>
          <div className="relative sm:hidden w-full">
            <input
              type="text"
              placeholder="Search here"
              className="w-full my-3 outline-none border p-2 rounded"
            />
            <IoIosSearch className="text-2xl absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer" />
          </div>
        </div>

        {/*  ====================== Category table for tablet and desktop ======================= */}
        <table className="w-full hidden md:block">
          <thead className="border">
            <tr>
              <th className="w-[400px] text-left p-3">Sub-Category</th>
              <th className="w-[400px] text-left p-3">Category</th>
              <th className="w-[400px] text-left p-3">Date</th>
              <th className="w-[450px] text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3">Gaming PC</td>
              <td className="p-3">Desktop</td>
              <td className="p-3">01 Nov 2025</td>
              <td className="p-3">
                <div className="flex gap-2">
                  <button
                    onClick={() => setSubCategoryEditModal(true)}
                    className="bg-primaryColor text-white p-2 rounded text-2xl cursor-pointer"
                  >
                    <FaEdit />
                  </button>
                  <button className="bg-red-500 text-white p-2 rounded text-2xl cursor-pointer">
                    <RiDeleteBinLine />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/*  ====================== Edit Category Modal ======================= */}
      {subCategoryEditModal && (
        <div
          onClick={() => setSubCategoryEditModal(false)}
          className="fixed p-5 inset-0 sm:p-0 md:inset-0 flex items-center justify-center bg-black/50 z-50"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-white border rounded w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] shadow p-5 relative"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold">Edit Sub-Category</h3>
              <button
                className="cursor-pointer border p-1 rounded"
                onClick={() => setSubCategoryEditModal(false)}
              >
                <RiCloseLargeFill className="text-2xl" />
              </button>
            </div>

            <div>
              <label htmlFor="category" className="font-semibold text-xl">
                Sub-Category
              </label>
              <input
                type="text"
                id="category"
                className="border rounded px-4 py-3 outline-none w-full mt-3"
                placeholder="Edit Sub-Category"
              />
            </div>

            <div className="flex flex-col mt-3 gap-3">
              <label htmlFor="category" className="font-semibold text-xl">
                Category
              </label>
              <div className="relative">
                <select
                  id="category"
                  className="w-full rounded border p-2 outline-none appearance-none px-4"
                >
                  <option value="desktop">Desktop</option>
                  <option value="laptop">Laptop</option>
                </select>
                <IoIosArrowDown className="absolute top-1/2 right-2 text-textPrimary/70 -translate-y-1/2 text-xl" />
              </div>
            </div>
            <button className="bg-primaryColor font-quicksand font-semibold text-white p-3 rounded mt-4 cursor-pointer w-full">
              Update Category
            </button>
          </div>
        </div>
      )}

      {/*  ====================== Create Sub-Category Modal ======================= */}
      {createSubCategoryModal && (
        <div
          onClick={() => setCreateSubCategoryModal(false)}
          className="fixed p-5 flex items-center justify-center inset-0 sm:p-0 md:inset-0  bg-black/50 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white border rounded w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] shadow p-5 relative"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold">Add Sub-Category</h3>
              <button
                className="cursor-pointer border p-1 rounded"
                onClick={() => setCreateSubCategoryModal(false)}
              >
                <RiCloseLargeFill className="text-2xl" />
              </button>
            </div>

            <div>
              <label htmlFor="sub-category" className="font-semibold text-xl">
                Sub-Category Name
              </label>
              <input
                type="text"
                id="sub-category"
                className="border rounded px-4 py-3 outline-none w-full mt-3"
                placeholder="Enter category name"
              />
            </div>

            <div className="flex flex-col mt-3 gap-3">
              <label htmlFor="category" className="font-semibold text-xl">
                Category
              </label>
              <div className="relative">
                <select
                  id="category"
                  className="w-full rounded border p-2 outline-none appearance-none px-4"
                >
                  <option value="desktop">Desktop</option>
                  <option value="laptop">Laptop</option>
                </select>
                <IoIosArrowDown className="absolute top-1/2 right-2 text-textPrimary/70 -translate-y-1/2 text-xl" />
              </div>
            </div>

            <button className="bg-primaryColor font-quicksand font-semibold text-white p-3 rounded mt-4 cursor-pointer w-full">
              Create Category
            </button>
          </div>
        </div>
      )}
      {/*  ====================== Category items for mobile ======================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-4 place-content-center px-4 sm:px-7 py-2 justify-center">
        <div className="flex flex-col gap-2 w-[290px] border rounded p-5 shadow">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-xl uppercase">Sub-Category:</h3>
            <p className="text-xl">Gaming PC</p>
          </div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-xl uppercase">Image:</h3>
            <PiDesktopTowerLight className="text-3xl" />
          </div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-xl uppercase">Date:</h3>
            <p className="text-xl">01 Nov 2025</p>
          </div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-xl uppercase">Actions:</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setSubCategoryEditModal(true)}
                className="bg-primaryColor text-white p-1 rounded text-2xl cursor-pointer"
              >
                <FaEdit />
              </button>
              <button className="bg-red-500 text-white p-1 rounded text-2xl cursor-pointer">
                <RiDeleteBinLine />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subcategory;
