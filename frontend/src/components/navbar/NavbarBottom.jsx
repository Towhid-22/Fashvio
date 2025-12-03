import React from "react";
import { MdWindow } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { nav_items } from "../../../public";
import { ImHeadphones } from "react-icons/im";
import { categories } from "../../../public";
import Link from "next/link";

const NavbarBottom = () => {
  return (
    // <div className="container">
    //   <div className="flex items-center justify-between">
    //     <div className="inline-block">
    //       <button className="font-quicksand text-white bg-primaryColor text-base leading-11 font-bold rounded-[4px] flex items-center gap-2 py-1 px-6 cursor-pointer">
    //         <MdWindow />
    //         Browse All Categories
    //         <IoIosArrowDown />
    //       </button>
    //     </div>
    //     <ul className="flex items-center gap-8">
    //       {nav_items.map((item) => (
    //         <li
    //           key={item.id}
    //           className="font-quicksand font-bold text-textprimaryColor leading-17.5 cursor-pointer"
    //         >
    //           {item.name}
    //         </li>
    //       ))}
    //     </ul>
    //     <div className="flex items-center gap-3">
    //       <ImHeadphones className="text-[35px]" />
    //       <div>
    //         <p className="text-primaryColor font-quicksand font-bold leading-6.5 text-[26px]">
    //           1900888123
    //         </p>
    //         <p className="font-lato leading-3 text-[12px] text-secondary tracking-[0.9px]">
    //           24/7 Support Center
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="shadow py-4 hidden xl:block">
      <div className="mx-auto max-w-[1580px] px-4 md:px-0">
        <ul className="flex items-center gap-5">
          {categories.map((item) => (
            <li
              key={item.id}
              className={`relative group font-quicksand font-semibold text-gray-700 cursor-pointer`}
            >
              <Link href="/shop">
                {" "}
                <p className="hover:text-primaryColor transition">
                  {item.name}
                </p>
              </Link>

              {item.subcategory && (
                <ul className="absolute left-0 top-8 mt-2 w-40 bg-white border border-gray-200 rounded-[5px] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  {item.subcategory.map((sub) => (
                    <li
                      key={sub.id}
                      className="px-3 py-2 text-sm text-gray-600 hover:bg-primaryColor/10 hover:text-primaryColor transition"
                    >
                      {sub.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarBottom;
