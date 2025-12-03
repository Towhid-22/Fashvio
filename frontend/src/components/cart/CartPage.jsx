"use client";
import React from "react";
import { cart_items } from "../../../public"; // demo data import (replace as needed)
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa6";

const CartPage = () => {
  return (
    <div className="max-w-[1580px] mx-auto px-4 mt-10">
      <h3 className="font-lato font-bold text-2xl text-textPrimary mb-5">
        Shopping Cart
      </h3>

      <div className="bg-white shadow-sm rounded-md p-4 sm:p-6">
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 text-gray-600 uppercase text-xs border-y">
                <th className="p-3 text-left">Products</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-center">Quantity</th>
                <th className="p-3 text-right">Sub-Total</th>
              </tr>
            </thead>

            <tbody>
              {cart_items.map((item) => (
                <tr className="border-b hover:bg-gray-50" key={item.id}>
                  <td className="flex items-center gap-3 p-3">
                    <button className="text-gray-500 hover:text-red-500 text-lg">
                      ✕
                    </button>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <p className="text-gray-700 font-medium text-sm w-[280px]">
                      {item.title}
                    </p>
                  </td>

                  <td className="p-3">
                    {item.oldPrice && (
                      <span className="line-through text-gray-400 mr-2">
                        ${item.oldPrice}
                      </span>
                    )}
                    <span className="text-gray-700">${item.price}</span>
                  </td>

                  <td className="p-3 text-center">
                    <div className="flex items-center justify-center border rounded-md w-24 mx-auto">
                      <button className="px-2 py-1 text-gray-600 hover:text-black">
                        −
                      </button>
                      <span className="w-8 text-center">0{item.quantity}</span>
                      <button className="px-2 py-1 text-gray-600 hover:text-black">
                        +
                      </button>
                    </div>
                  </td>

                  <td className="p-3 text-right font-medium text-gray-700">
                    ${item.price * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {cart_items.map((item) => (
            <div
              key={item.id}
              className="border rounded-md p-3 flex items-start gap-3"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 rounded object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <p className="font-medium text-gray-800 text-sm">
                    {item.title}
                  </p>
                  <button className="text-gray-500 hover:text-red-500 text-lg">
                    ✕
                  </button>
                </div>

                <div className="mt-2 text-sm text-gray-600">
                  <p>
                    Price:
                    <span className="font-semibold text-gray-800">
                      ${item.price}
                    </span>
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button className="px-2 border rounded text-gray-600 hover:text-black">
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button className="px-2 border rounded text-gray-600 hover:text-black">
                      +
                    </button>
                  </div>
                  <p className="mt-2 font-semibold text-gray-800">
                    Subtotal: ${item.price * item.quantity}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
