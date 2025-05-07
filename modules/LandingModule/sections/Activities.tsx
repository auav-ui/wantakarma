import ActivitiesCarousel from "../components/ActivitiesCarousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Activities = () => {
  return (
    <section className="relative min-h-screen overflow-x-clip">
      <h1 className="text-center text-h2 xl:text-h1 font-ethnocentric py-6">
        ACTIVITIES
      </h1>
      <ActivitiesCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
};

export default Activities;
