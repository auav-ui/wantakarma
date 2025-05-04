import React from "react";
import NavbarDesktop from "./components/NavbarDesktop";
import NavbarMobile from "./components/NavbarMobile";

export const Navbar = () => {
  return (
    <nav className="h-12 lg:h-16 bg-accents-grey-4 py-3 px-6 lg:px-10 font-tt-squares flex justify-between items-center">
      <img src="/logo.webp" alt="logo" className="h-full" />
      <NavbarDesktop />
      <NavbarMobile />
    </nav>
  );
};
