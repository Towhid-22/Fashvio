"use client";
import React, { useState } from "react";

const Category = () => {
  return (
    <div className="w-full mx-auto">
      <ul className="flex bg-primaryColor/20 font-quicksand text-xl font-semibold  text-textPrimary">
        <li
          className={`py-2 transition-all duration-400 px-5 cursor-pointer hover:bg-white `}
        >
          All Category
        </li>
        <li
          className={`py-2 transition-all duration-400 px-5 cursor-pointer hover:bg-white `}
        >
          Add-Category
        </li>
        <li
          className={`py-2 transition-all duration-400 px-5 cursor-pointer hover:bg-white `}
        >
          Update-Category
        </li>
        <li
          className={`py-2 transition-all duration-400 px-5 cursor-pointer hover:bg-white `}
        >
          Delete-Category
        </li>
      </ul>
    </div>
  );
};

export default Category;
