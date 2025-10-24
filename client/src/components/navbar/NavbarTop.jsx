"use client";
import React from "react";
import { navbar_top } from "../../../public";

const NavbarTop = () => {
  return (
    <>
      {/* 👇 Hidden on mobile (<640px), visible on sm and above */}
      <div className="hidden lg:flex border-b border-borderColor py-3.5">
        <div className="container flex items-center justify-between">
          <ul className="flex gap-3">
            {navbar_top.map((item) => (
              <li
                key={item.id}
                className={`text-secondaryColor text-[13px] font-lato leading-3.5 pr-3 ${
                  item.id === 4 ? "border-0" : "border-r border-borderColor"
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>

          <p className="text-primaryColor font-bold text-sm font-lato">
            100% Secure delivery without contacting the courier
          </p>

          {/* Right Section */}
          <ul className="flex items-center justify-between gap-3">
            <li className="text-secondaryColor text-[13px] font-lato">
              Need help? Call Us:{" "}
              <span className="text-primaryColor text-[13px] font-lato">
                +1800900122
              </span>
            </li>

            <li>
              <select
                id="language"
                className="text-secondaryColorColor text-[13px] font-lato bg-transparent outline-none"
              >
                <option value="English" defaultValue>
                  English
                </option>
                <option value="Arabic">Arabic</option>
                <option value="Hindi">Hindi</option>
                <option value="Bangla">Bangla</option>
              </select>
            </li>

            <li>
              <select
                id="currency"
                className="text-secondaryColor text-[13px] font-lato bg-transparent outline-none"
              >
                <option value="USD" defaultValue>
                  Dollar
                </option>
                <option value="BDT">Taka</option>
                <option value="INR">INR</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarTop;
