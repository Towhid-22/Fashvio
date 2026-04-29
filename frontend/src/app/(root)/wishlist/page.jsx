import Breadcrumb from "@/components/common/Breadcrumb";
import Complain from "@/components/complain/Complain";
import React from "react";

const page = () => {
  const wishlist = [
    {
      id: 1,
      name: "Bose Sport Earbuds - Wireless Earphones",
      price: "$999",
      oldPrice: "$1299",
      stock: "IN STOCK",
      image: "https://i.ibb.co/0jqHpnp/gamepad.png",
    },
    {
      id: 2,
      name: "Simple Mobile 5G LTE Galaxy 12 Mini 512GB",
      price: "$2,300.00",
      stock: "IN STOCK",
      image: "https://i.ibb.co/XzW5X8B/monitor.png",
    },
    {
      id: 3,
      name: "Portable Washing Machine",
      price: "$70.00",
      stock: "IN STOCK",
      image: "https://i.ibb.co/XzW5X8B/monitor.png",
    },
    {
      id: 4,
      name: "TOZO T6 True Wireless Earbuds",
      price: "$220.00",
      oldPrice: "$250.00",
      stock: "OUT OF STOCK",
      image: "https://i.ibb.co/0jqHpnp/gamepad.png",
    },
    {
      id: 5,
      name: "Wyze Cam Pan v2 1080p",
      price: "$1,499.99",
      stock: "IN STOCK",
      image: "https://i.ibb.co/XzW5X8B/monitor.png",
    },
  ];
  return (
    <div>
      <Breadcrumb />
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="bg-white border rounded-md overflow-hidden">
          <h2 className="text-xl font-semibold p-4 border-b">Wishlist</h2>

          {/* HEADER */}
          <div className="hidden md:grid grid-cols-4 text-xs font-semibold text-gray-500 bg-gray-100 p-3">
            <span>PRODUCTS</span>
            <span>PRICE</span>
            <span>STOCK STATUS</span>
            <span className="text-right">ACTIONS</span>
          </div>

          {/* ITEMS */}
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-4 items-center gap-4 p-4 border-t"
            >
              {/* PRODUCT */}
              <div className="flex items-center gap-3">
                <img src={item.image} className="w-14 h-14 object-contain" />
                <p className="text-sm text-gray-700">{item.name}</p>
              </div>

              {/* PRICE */}
              <div className="text-sm">
                {item.oldPrice && (
                  <span className="line-through text-gray-400 mr-2">
                    {item.oldPrice}
                  </span>
                )}
                <span className="text-gray-800 font-medium">{item.price}</span>
              </div>

              {/* STOCK */}
              <div
                className={`text-sm font-semibold ${
                  item.stock === "IN STOCK" ? "text-green-600" : "text-red-500"
                }`}
              >
                {item.stock}
              </div>

              {/* ACTIONS */}
              <div className="flex justify-between md:justify-end items-center gap-3">
                <button
                  className={`px-4 py-2 text-xs rounded text-white ${
                    item.stock === "IN STOCK"
                      ? "bg-primaryColor"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  ADD TO CART
                </button>
                <button className="w-7 h-7 flex items-center justify-center border rounded-full text-gray-400">
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
