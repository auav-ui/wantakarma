import React, { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselButtons";
import useActivitiesCarousel from "embla-carousel-react";

type PropType = {
  slides: number[];
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
          {slides.map((index, idx) => (
            <div
              className="relative flex-shrink-0 flex-grow-0 min-w-[26rem] w-[50vw] px-10"
              key={idx}
            >
              <div
                className={`${
                  selectedIndex === idx || "scale-75"
                } min-h-[13rem] h-[25vw] bg-blue-50 rounded-4xl lg:rounded-[48px] border-8 lg:border-12 border-accents-yellow-3 flex items-center justify-center text-2xl font-semibold text-blue-600 transition duration-300`}
              >
                {index + 1}
              </div>
              <div
                className={`${
                  selectedIndex === idx || "scale-0"
                } absolute w-12 h-12 border-6 border-accents-yellow-3 rounded-full bg-accents-grey-4 left-1/2 -bottom-[7.25rem] md:-bottom-[4.25rem] lg:-bottom-[4.375rem] -translate-x-1/2 translate-y-1/2 transition duration-500`}
              >
                <div className="w-full h-full relative flex justify-center items-center">
                  <h1 className="absolute -bottom-6 font-tt-squares text-h5 text-center block w-96 translate-y-full">
                    12 Agustus 2005
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:absolute flex justify-center space-x-16 md:space-x-[50vw] items-center top-1/2 translate-y-1/2 md:-translate-y-1/2 left-1/2 md:-translate-x-1/2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      <div className="w-full h-2 lg:h-3 bg-accents-yellow-3 my-16" />
      <div className="flex justify-center">
        <h1 className="font-tt-squares text-h2">
          Kontes Robot Terbang Indonesia 2024
        </h1>
      </div>
    </div>
  );
};

export default ActivitiesCarousel;
