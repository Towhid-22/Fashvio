import React from "react";
import NavbarTop from "./NavbarTop";
import NavbarCenter from "./NavbarCenter";
import NavbarBottom from "./NavbarBottom";

const Navbar = () => {
  return (
    <div className="bg-white">
      <NavbarTop />
      <NavbarCenter />
      <NavbarBottom />
    </div>
  );
};

export default Navbar;
