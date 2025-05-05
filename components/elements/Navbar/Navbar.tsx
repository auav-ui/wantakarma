import React from "react";
import NavbarDesktop from "./components/NavbarDesktop";
import NavbarMobile from "./components/NavbarMobile";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed inset-0 h-12 lg:h-16 bg-accents-grey-4 py-3 px-6 lg:px-10 font-tt-squares flex justify-between items-center z-[9999]">
      <Link href="/" className="h-full">
        <img src="/logo.webp" alt="logo" className="h-full" />
      </Link>
      <NavbarDesktop />
      <NavbarMobile />
    </nav>
  );
};

export default Navbar;
