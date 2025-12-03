"use client";
import React, { useState } from "react";
import { FaEdit, FaPlus } from "react-icons/fa";
import { RiDeleteBinLine, RiCloseLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";

const DashboardProducts = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  // Example product data
  const products = [
    {
      id: 1,
      name: "Gaming PC",
      category: "Desktop",
      price: 1200,
      date: "01 Nov 2025",
    },
    {
      id: 2,
      name: "Office Laptop",
      category: "Laptop",
      price: 800,
      date: "15 Oct 2025",
    },
  ];

  return (
    <div className="max-w-[1580px] mx-auto px-4 py-5">
      {/* Header + Search + Add Product */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
        <div className="flex items-center gap-2">
          <label htmlFor="search" className="text-textPrimary/70 font-semibold">
            Search:
          </label>
          <div className="relative">
            <input
              id="search"
              type="text"
              placeholder="Search products..."
              className="border rounded px-3 py-2 outline-none w-[200px] sm:w-[300px]"
            />
            <IoIosSearch className="absolute right-2 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
          </div>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-primaryColor text-white px-4 py-2 rounded font-semibold"
        >
          <FaPlus /> Add Product
        </button>
      </div>

      {/* Desktop/Tablet Table */}
      <table className="w-full hidden md:block border border-gray-200 rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-3">Product Name</th>
            <th className="text-left p-3">Category</th>
            <th className="text-left p-3">Price</th>
            <th className="text-left p-3">Date</th>
            <th className="text-left p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="p-3">{p.name}</td>
              <td className="p-3">{p.category}</td>
              <td className="p-3">${p.price}</td>
              <td className="p-3">{p.date}</td>
              <td className="p-3 flex gap-2">
                <button
                  onClick={() => setShowEditModal(true)}
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  <FaEdit />
                </button>
                <button className="bg-red-500 text-white p-2 rounded">
                  <RiDeleteBinLine />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Product Cards */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded p-4 shadow flex flex-col gap-2"
          >
            <p className="font-semibold text-lg">{p.name}</p>
            <p>Category: {p.category}</p>
            <p>Price: ${p.price}</p>
            <p>Date: {p.date}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setShowEditModal(true)}
                className="bg-blue-500 text-white p-2 rounded"
              >
                <FaEdit />
              </button>
              <button className="bg-red-500 text-white p-2 rounded">
                <RiDeleteBinLine />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div
          onClick={() => setShowAddModal(false)}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded w-full max-w-[500px] p-5 shadow relative"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Add Product</h3>
              <button onClick={() => setShowAddModal(false)}>
                <RiCloseLine className="text-2xl" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Product Name"
              className="border rounded w-full p-2 mb-3 outline-none"
            />
            <input
              type="text"
              placeholder="Category"
              className="border rounded w-full p-2 mb-3 outline-none"
            />
            <input
              type="number"
              placeholder="Price"
              className="border rounded w-full p-2 mb-3 outline-none"
            />
            <button className="bg-primaryColor text-white w-full p-2 rounded">
              Add
            </button>
          </div>
        </div>
      )}

      {/* Edit Product Modal */}
      {showEditModal && (
        <div
          onClick={() => setShowEditModal(false)}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded w-full max-w-[500px] p-5 shadow relative"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Edit Product</h3>
              <button onClick={() => setShowEditModal(false)}>
                <RiCloseLine className="text-2xl" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Product Name"
              className="border rounded w-full p-2 mb-3 outline-none"
            />
            <input
              type="text"
              placeholder="Category"
              className="border rounded w-full p-2 mb-3 outline-none"
            />
            <input
              type="number"
              placeholder="Price"
              className="border rounded w-full p-2 mb-3 outline-none"
            />
            <button className="bg-blue-500 text-white w-full p-2 rounded">
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardProducts;
