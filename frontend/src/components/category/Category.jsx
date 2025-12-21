import React from "react";
import { categories } from "../../../public";

const Category = () => {
  return (
    <div className="mx-auto max-w-[1580px] px-4 mt-6">
      <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-7 xl:grid-cols-10 2xl:grid-cols-12 gap-4 place-items-center">
        {categories.map((item) => (
          <div key={item.id} className="shadow p-3 flex flex-col items-center w-30 h-30 justify-center rounded-[5px] cursor-pointer hover:bg-primaryColor/20 transition-all duration-300">
            <img src={item.image} alt={item.name} className="w-12 h-12" />
            <p className="text-textprimaryColor font-quicksand font-semibold mt-1">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
