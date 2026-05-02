"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Link from "next/link";

const CartPage = () => {
  const [cartList, setCartList] = useState([]);
  const user = useSelector((state) => state.authentication.userInfo);
  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_URL}/api/cart/get-cartbyuserid/${user?._id}`,
        { withCredentials: true },
      )
      .then((res) => {
        setCartList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user?._id]);
  return (
    <>
      <div className="max-w-[1580px] mx-auto px-4 mt-10">
        <h3 className="font-lato font-bold text-2xl text-textPrimary mb-5">
          Shopping Cart
        </h3>

        {cartList.length === 0 ? (
          <p className="font-lato font-semibold text-lg text-textPrimary mb-5">
            Your cart is empty!
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white shadow-sm rounded-md p-4 sm:p-6 col-span-3">
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
                    {cartList.map((item) => (
                      <tr className="border-b hover:bg-gray-50" key={item.id}>
                        <td className="flex items-center gap-3 p-3">
                          <button className="text-gray-500 hover:text-red-500 text-lg border rounded-full size-8 cursor-pointer hover:border-red-400 duration-300">
                            ✕
                          </button>
                          <img
                            src={item?.product?.image}
                            alt={item?.product?.name}
                            className="w-16 h-16 rounded object-cover"
                          />
                          <p className="text-gray-700 font-medium text-sm w-[280px]">
                            {item?.product?.name}
                          </p>
                        </td>

                        <td className="p-3">
                          {/* {item.oldPrice && (
                      <span className="line-through text-gray-400 mr-2">
                        ${item?.product?.price}
                      </span>
                    )} */}
                          <span className="text-gray-700">
                            ${item?.product?.price}
                            {console.log(item?.variant)}
                          </span>
                        </td>

                        <td className="p-3 text-center">
                          <div className="flex items-center justify-center border rounded-md w-24 mx-auto">
                            <button className="px-2 py-1 text-gray-600 hover:text-black">
                              −
                            </button>
                            <span className="w-8 text-center">
                              0{item.quantity}
                            </span>
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
                {cartList.map((item) => (
                  <div
                    key={item.id}
                    className="border rounded-md p-3 flex items-start gap-3"
                  >
                    <img
                      src={item?.product?.image}
                      alt={item?.product?.name}
                      className="w-20 h-20 rounded object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <p className="font-medium text-gray-800 text-sm">
                          {item?.product?.name}
                        </p>
                        <button className="text-gray-500 hover:text-red-500 text-lg">
                          ✕
                        </button>
                      </div>

                      <div className="mt-2 text-sm text-gray-600">
                        <p>
                          Price:
                          <span className="font-semibold text-gray-800">
                            ${item?.product?.price}
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
              <Link href="/shop">
                <button className="bg-primaryColor font-lato px-5 py-3 mt-3 rounded cursor-pointer text-white font-semibold">
                  Return to shop
                </button>
              </Link>
            </div>
            <div className=" font-lato text-textPrimary border rounded-[10px] p-3">
              <h3 className="text-2xl text-textPrimary font-lato  font-bold ">
                Cart Total
              </h3>
              <p className="py-3 border-b border-textPrimary flex justify-between items-center">
                Subtotal <span>$1000</span>
              </p>
              <p className="py-3 border-b border-textPrimary flex justify-between items-center ">
                Tax <span>$10</span>
              </p>
              <p className="py-3 border-b border-textPrimary flex justify-between items-center">
                Shipping Fee <span>Free</span>
              </p>
              <p className="py-3 border-b border-textPrimary flex justify-between items-center">
                Total <span>$1750</span>
              </p>
              <Link href="/checkout">
                <button className="bg-primaryColor font-lato px-5 py-3 mt-3 rounded w-full cursor-pointer text-white">
                  Process to checkout
                </button>
              </Link>
            </div>
          </div>
        )}
        {/* Cart Items */}
      </div>
    </>
  );
};

export default CartPage;
