"use client";
import { AlignRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NavbarMobile = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className="sm:hidden text-b4">
      <button onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
        <AlignRight className={isNavbarOpen ? "text-accents-yellow-3" : ""} />
      </button>
      <div
        className={`${
          isNavbarOpen ? "scale-y-100" : "scale-y-0"
        } absolute w-full px-8 py-4 bg-accents-grey-4 top-12 left-0 right-0 transition origin-top`}
      >
        <div className="grid divide-y divide-text-light-1">
          <Link href="/" className="py-2">
            Home
          </Link>
          <div className="group flex justify-between py-2">
            Profile <ChevronDown className="stroke-3 group-hover" />
          </div>
          <Link href="/" className="py-2">
            Management
          </Link>
          <Link href="/" className="py-2">
            Achievements
          </Link>
          <Link href="/" className="py-2">
            Feeds
          </Link>
          <Link href="/" className="py-2">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
