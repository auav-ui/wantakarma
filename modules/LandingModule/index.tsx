"use client";
import { useState } from "react";
import Hero from "./sections/Hero";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Footer from "@/components/elements/Footer/Footer";

const LandingModule = () => {
  const [isLandingShown, setIsLandingShown] = useState<boolean>(false);
  const [isSliding, setIsSliding] = useState<boolean>(false);

  const handleDiveIn = () => {
    setIsSliding(true);
    setTimeout(() => {
      setIsLandingShown(true);
    }, 1200);
  };

  return (
    <main>
      <div
        className={`${
          isSliding ? "-translate-y-full" : "translate-y-0"
        } fixed inset-0 z-[9999] bg-[url('/hero-image.png')] bg-cover bg-center transition duration-800 ease-in`}
      >
        <div className="flex flex-col gap-6 sm:gap-12 justify-center items-center w-full h-full bg-gradient-to-b from-black/95 via-black/80 to-black/95">
          <img
            src="/logo-gradient.webp"
            alt="logo"
            className="min-w-80 w-3/5"
          />
          <Button onClick={handleDiveIn}>
            Dive In <ArrowDown className="stroke-3" />
          </Button>
        </div>
      </div>
      {isLandingShown && (
        <>
          <Hero />
          <Footer />
        </>
      )}
    </main>
  );
};

export default LandingModule;
