import { useState, useEffect } from "react";

const Sponsors = () => {
  const [topOffset, setTopOffset] = useState(0);
  const [bottomOffset, setBottomOffset] = useState(0);

  useEffect(() => {
    const animationSpeed = 0.5; // pixels per frame

    // Animation logic
    const animate = () => {
      // Move top image from left to right
      setTopOffset((prevOffset) => {
        // Reset position when image has moved by its full width
        if (prevOffset >= 100) {
          return 0;
        }
        return prevOffset + animationSpeed;
      });

      // Move bottom image from right to left
      setBottomOffset((prevOffset) => {
        // Reset position when image has moved by its full width
        if (prevOffset >= 100) {
          return 0;
        }
        return prevOffset + animationSpeed;
      });
    };

    const animationId = setInterval(animate, 16); // ~60fps

    return () => clearInterval(animationId);
  }, []);

  return (
    <section className="relative overflow-x-clip pb-6">
      <h1 className="text-center text-h2 xl:text-h1 font-ethnocentric md:py-6">
        SPONSORS
      </h1>

      <div className="bg-accents-white-3 py-4 my-6 md:my-12">
        {/* Top row - sliding left to right */}
        <div className="relative overflow-hidden w-full mb-2">
          <div
            className="absolute whitespace-nowrap w-full"
            style={{ transform: `translateX(${topOffset}%)` }}
          >
            <img
              src="/assets/sponsors.webp"
              alt="Sponsors"
              className="inline-block w-auto"
            />
            <img
              src="/assets/sponsors.webp"
              alt="Sponsors"
              className="inline-block w-auto"
            />
          </div>
          <div
            className="absolute whitespace-nowrap w-full"
            style={{ transform: `translateX(${topOffset - 100}%)` }}
          >
            <img
              src="/assets/sponsors.webp"
              alt="Sponsors"
              className="inline-block w-auto"
            />
            <img
              src="/assets/sponsors.webp"
              alt="Sponsors"
              className="inline-block w-auto"
            />
          </div>
          {/* This visible image sets the container height */}
          <img
            src="/assets/sponsors.webp"
            alt=""
            className="invisible w-full"
          />
        </div>

        {/* Bottom row - sliding right to left */}
        <div className="relative overflow-hidden w-full">
          <div
            className="absolute whitespace-nowrap w-full"
            style={{ transform: `translateX(${-bottomOffset}%)` }}
          >
            <img
              src="/assets/sponsors.webp"
              alt="Sponsors"
              className="inline-block w-auto"
            />
            <img
              src="/assets/sponsors.webp"
              alt="Sponsors"
              className="inline-block w-auto"
            />
          </div>
          <div
            className="absolute whitespace-nowrap w-full"
            style={{ transform: `translateX(${100 - bottomOffset}%)` }}
          >
            <img
              src="/assets/sponsors.webp"
              alt="Sponsors"
              className="inline-block w-auto"
            />
            <img
              src="/assets/sponsors.webp"
              alt="Sponsors"
              className="inline-block w-auto"
            />
          </div>
          {/* This visible image sets the container height */}
          <img
            src="/assets/sponsors.webp"
            alt=""
            className="invisible w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
