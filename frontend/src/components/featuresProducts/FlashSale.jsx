"use client";
import React, { useEffect, useState } from "react";
import { ImCart } from "react-icons/im";
import { RiStarFill } from "react-icons/ri";
import { products } from "../../../public"; // তোমার products ডাটা import করো

const FlashSale = () => {
  // 🎯 Target date for sale end
  const targetDate = new Date("2025-12-31T23:59:59");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // 🕒 Timer Calculation
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 🔥 Filter only Flash Sale products
  const flashSaleProducts = products.filter(
    (product) => product.isFlashSale === true
  );

  return (
    <section className="max-w-[1580px] mx-auto px-4 py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10">
        <h2 className="text-3xl font-bold font-lato text-textPrimary">
          🔥 Flash Sale
        </h2>
        {/* Countdown */}
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          {["Days", "Hours", "Mins", "Secs"].map((label, i) => {
            const value = [
              timeLeft.days,
              timeLeft.hours,
              timeLeft.minutes,
              timeLeft.seconds,
            ][i];
            return (
              <div
                key={label}
                className="bg-primaryColor text-white rounded-lg p-2 text-center w-16"
              >
                <p className="text-xl font-bold">{value}</p>
                <span className="text-xs">{label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Products */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {flashSaleProducts.length > 0 ? (
          flashSaleProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl p-4 flex flex-col gap-3 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-48 object-contain"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  -{product.discount || 30}%
                </span>
              </div>
              <p className="font-quicksand font-semibold text-textPrimary line-clamp-1">
                {product.title}
              </p>
              <div className="flex items-center gap-2">
                <RiStarFill className="text-yellow-400" />
                <span className="text-sm">({product.rating})</span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-lg font-bold text-primaryColor">
                  ${product.price}
                </p>
                <del className="text-textPrimary/50">${product.oldPrice}</del>
              </div>
              <button className="mt-auto bg-primaryColor/20 hover:bg-primaryColor hover:text-white transition-all text-primaryColor font-bold py-2 rounded flex items-center justify-center gap-2">
                <ImCart /> Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No Flash Sale products available right now ⚡
          </p>
        )}
      </div>
    </section>
  );
};

export default FlashSale;
