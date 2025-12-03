"use client";
import React, { useEffect, useState } from "react";
import NavbarTop from "./NavbarTop";
import NavbarCenter from "./NavbarCenter";
import NavbarBottom from "./NavbarBottom";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setIsSticky(true) : setIsSticky(false);
    });
  }, []);
  return (
    <div className={`${isSticky && "fixed top-0 left-0 w-full z-50"} bg-white`}>
      {/* <NavbarTop /> */}
      <NavbarCenter />
      <NavbarBottom />
    </div>
  );
};

export default Navbar;
