"use client";
import { useState } from "react";
import Hero from "./sections/Hero";
import Footer from "@/components/elements/Footer/Footer";
import Slider from "./sections/Slider";

const LandingModule = () => {
  const [isLandingShown, setIsLandingShown] = useState<boolean>(true);
  // const [isSliding, setIsSliding] = useState<boolean>(false);

  // const handleDiveIn = () => {
  //   setIsSliding(true);
  //   setTimeout(() => {
  //     setIsLandingShown(true);
  //   }, 1200);
  // };

  return (
    <main>
      {/* <Slider isSliding={isSliding} handleDiveIn={handleDiveIn} /> */}
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
