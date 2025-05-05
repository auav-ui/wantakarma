"use client";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [cloudPosition, setCloudPosition] = useState<number>(0);

  useEffect(() => {
    const animationSpeed: number = 0.5;
    const cloudWidth: number = 1028;

    let animationFrameId: number | undefined;
    let position: number = 0;

    const animate = (): void => {
      position -= animationSpeed;

      if (position <= -cloudWidth) {
        position = 0;
      }

      setCloudPosition(position);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)] mt-12 lg:mt-16 pr-4 sm:pr-8 lg:pr-16 py-20 2xl:py-36 flex items-center sm:items-end">
      <div className="flex flex-col sm:justify-end items-end gap-4 sm:gap-6 z-10">
        <img src="/logo-landing.webp" alt="logo" className="min-w-80 w-5/12" />
        <h1 className="font-tt-squares max-sm:w-56 text-h6 sm:text-h4 text-right text-accents-yellow-3">
          Part Of Tim Robotika Universitas Indonesia
        </h1>
        <p className="min-w-80 w-3/5 text-right text-b5 sm:text-b4 lg:text-b3 font-light leading-tight">
          Lorem ipsum turpis volutpat magna viverra at dapibus dignissim
          faucibus luctus rutrum in amet amet elit non mauris felis consectetur
          nulla morbi in bibendum vitae metus scelerisque id amet ipsum massa
          tristique dui aenean non enim feugiat.
        </p>
        <Button>
          Our Subteams <ArrowDown className="stroke-3" />
        </Button>
      </div>

      <img
        src="/misc/stars-1.webp"
        alt="stars-1"
        className="max-md:hidden absolute w-[6%] bottom-1/3 left-1/6"
      />
      <img
        src="/misc/stars-2.webp"
        alt="stars-2"
        className="max-md:hidden absolute w-[6%] bottom-1/2 left-1/3 translate-x-full"
      />
      <img
        src="/misc/stars-3.webp"
        alt="stars-3"
        className="max-md:hidden absolute w-[6%] bottom-1/12 left-2/5"
      />
      <img
        src="/misc/stars-4.webp"
        alt="stars-4"
        className="absolute w-24 md:w-[6%] bottom-1/4 md:bottom-0 left-1/6 -translate-y-1/6 -translate-x-1/2"
      />

      <div className="max-md:hidden group absolute w-1/6 bottom-1/12 left-0 translate-x-1/12 z-10">
        <img
          src="/model/drone-white.webp"
          alt="drone"
          className="group-hover:rotate-12 transition ease-out"
        />
      </div>
      <div className="max-md:hidden group absolute w-1/6 bottom-1/3 left-1/6 -translate-y-2/3 translate-x-1/2 z-10">
        <img
          src="/model/wing-white.webp"
          alt="wings"
          className="group-hover:-rotate-12 transition ease-out"
        />
      </div>
      <div className="max-md:hidden group absolute w-1/6 bottom-0 left-1/6 -translate-y-1/6 translate-x-1/3 z-10">
        <img
          src="/model/plane-white.webp"
          alt="plane"
          className="group-hover:rotate-12 transition ease-out"
        />
      </div>

      <div className="absolute top-2 w-full overflow-hidden">
        <div
          className="flex"
          style={{ transform: `translateX(${cloudPosition}px)` }}
        >
          <img
            src="/misc/clouds.webp"
            alt="clouds"
            className="min-w-[1028px] w-full"
          />
          <img
            src="/misc/clouds.webp"
            alt="clouds"
            className="min-w-[1028px] w-full"
          />
        </div>
      </div>
      <img
        src="/misc/trail-yellow.webp"
        alt="trail"
        className="absolute min-w-96 sm:w-full top-16 md:top-0 right-0 -translate-x-1/12 translate-y-1/3 scale-150 sm:scale-125 z-0"
      />
    </section>
  );
};

export default Hero;
