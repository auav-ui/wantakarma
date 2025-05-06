import OurValuesDesktop from "../components/OurValuesDesktop";
import OurValuesMobile from "../components/OurValuesMobile";

const OurValues = () => {
  return (
    <section className="relative min-h-screen overflow-x-clip">
      <h1 className="text-center text-h5 sm:text-h2 xl:text-h1 font-ethnocentric py-6">
        OUR VALUES
      </h1>
      <OurValuesDesktop />
      <OurValuesMobile />
    </section>
  );
};

export default OurValues;
