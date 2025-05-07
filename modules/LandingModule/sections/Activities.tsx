import ActivitiesCarousel from "../components/ActivitiesCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { SlidesProps } from "../interface";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES: SlidesProps[] = [
  {
    image: "/",
    date: "12 Agustus 2024",
    event: "Kontes Robot Terbang Indonesia 2024",
    desc: "Lorem ipsum massa condimentum turpis amet tempus sed adipiscing facilisi id aenean dignissim proin penatibus id tortor commodo metus odio malesuada aliquet sed porta consectetur arcu ullamcorper pellentesque massa pellentesque imperdiet ut at luctus varius tempusfacilisis a sed turpis cursus faucibus facilisi quis.",
  },
  {
    image: "/",
    date: "17 Agustus 1945",
    event: "Proklamasi Kemerdekaan Republik Indonesia ",
    desc: "Ladipiscing facilisi id aenean dignissim proin  turpis amet tempus sed  malesuada aliquet sed porta consectetur arcu ullamcorper penatibus id tortor commodo metus odio orem at luctus varius tempusfacilisis a sed ipsum massa condimentum pellentesque massa pellentesque imperdiet ut turpis cursus faucibus facilisi quis.",
  },
  {
    image: "/",
    date: "12 Agustus 2024",
    event: "Kontes Robot Terbang Indonesia 2024",
    desc: "Lorem ipsum massa condimentum turpis amet tempus sed adipiscing facilisi id aenean dignissim proin penatibus id tortor commodo metus odio malesuada aliquet sed porta consectetur arcu ullamcorper pellentesque massa pellentesque imperdiet ut at luctus varius tempusfacilisis a sed turpis cursus faucibus facilisi quis.",
  },
  {
    image: "/",
    date: "17 Agustus 1945",
    event: "Proklamasi Kemerdekaan Republik Indonesia ",
    desc: "Ladipiscing facilisi id aenean dignissim proin  turpis amet tempus sed  malesuada aliquet sed porta consectetur arcu ullamcorper penatibus id tortor commodo metus odio orem at luctus varius tempusfacilisis a sed ipsum massa condimentum pellentesque massa pellentesque imperdiet ut turpis cursus faucibus facilisi quis.",
  },
];

const Activities = () => {
  return (
    <section className="relative min-h-screen overflow-x-clip pb-6">
      <h1 className="text-center text-h2 xl:text-h1 font-ethnocentric py-6">
        ACTIVITIES
      </h1>
      <ActivitiesCarousel slides={SLIDES} options={OPTIONS} />
      <img
        src="/misc/wing-desktop.webp"
        alt="wing"
        className="absolute top-32 w-full -z-10 max-md:hidden"
      />
      <div className="space-y-10 absolute top-16 md:hidden -z-10">
        <img src="/misc/wing-mobile.webp" alt="wing" />
        <img
          src="/misc/wing-mobile.webp"
          alt="wing"
          className="-scale-y-100 rotate-180"
        />
      </div>
    </section>
  );
};

export default Activities;
