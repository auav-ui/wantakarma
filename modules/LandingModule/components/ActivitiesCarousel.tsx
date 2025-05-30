import React, { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselButtons";
import useActivitiesCarousel from "embla-carousel-react";
import { SlidesProps } from "../interface";

type PropType = {
  slides: SlidesProps[];
  options?: EmblaOptionsType;
};

const ActivitiesCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useActivitiesCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="max-w-full md:py-12">
      <div className="relative" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, idx) => (
            <div
              className="relative flex-shrink-0 flex-grow-0 min-w-[26rem] max-w-[40rem] w-[50vw] px-10"
              key={idx}
            >
              <div
                className={`${
                  selectedIndex === idx || "scale-75 opacity-50"
                } min-h-[13rem] max-h-[20rem] h-[25vw] bg-blue-50 rounded-4xl lg:rounded-[48px] border-8 lg:border-12 border-accents-yellow-3 flex items-center justify-center text-2xl font-semibold text-blue-600 transition duration-300`}
              >
                {idx + 1}
              </div>
              <div
                className={`${
                  selectedIndex === idx || "scale-0"
                } absolute w-12 h-12 border-6 border-accents-yellow-3 rounded-full bg-accents-grey-4 left-1/2 -bottom-[7.25rem] md:-bottom-[4.25rem] lg:-bottom-[4.375rem] -translate-x-1/2 translate-y-1/2 transition duration-500`}
              >
                <div className="w-full h-full relative flex justify-center items-center">
                  <h1 className="absolute -bottom-4 md:-bottom-6 font-tt-squares text-b3 md:text-h5 text-center block w-96 translate-y-full">
                    {slide.date}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:absolute flex justify-center space-x-16 md:space-x-[50vw] lg:space-x-[42rem] items-center top-1/2 translate-y-1/2 md:-translate-y-1/2 left-1/2 md:-translate-x-1/2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      <div className="w-full h-2 lg:h-3 bg-accents-yellow-3 my-16" />
      <div className="relative flex flex-col items-center">
        <div className="w-72 md:w-[32rem] max-md:mb-8 mt-4">
          <h1 className="text-center font-tt-squares text-h4 md:text-h2 py-2">
            {slides[selectedIndex].event}
          </h1>
          <p className="text-center text-b5 md:text-b4">
            {slides[selectedIndex].desc}
          </p>
        </div>
        <img
          src="/misc/spinner.webp"
          alt="spinner"
          className="md:absolute md:translate-x-[32rem] w-40 md:w-96 animate-spin"
        />
        <img
          src="/misc/spinner.webp"
          alt="spinner"
          className="max-md:hidden absolute -translate-x-[32rem] w-96 animate-spin"
        />
      </div>
    </div>
  );
};

export default ActivitiesCarousel;
