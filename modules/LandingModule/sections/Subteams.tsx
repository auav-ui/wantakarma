const Subteams = () => {
  return (
    <section className="overflow-x-clip pb-12">
      <h1 className="text-center text-h2 xl:text-h1 font-ethnocentric py-6">
        OUR SUBTEAMS
      </h1>
      <div className="flex justify-center relative">
        <div className="grid max-md:grid-rows-3 md:grid-cols-3 gap-4 xl:gap-24 md:py-16 xl:py-40 z-10">
          <div className="relative flex justify-center w-56 h-56 xl:w-80 xl:h-80 group">
            <div className="w-full h-full max-md:scale-75 p-10 bg-accents-yellow-3 rounded-[64px] md:group-hover:scale-[80%] origin-top transition z-10">
              <img
                src="/subteams/vishmakarma.png"
                alt="vishmakarma"
                className="object-contain"
              />
            </div>
            <p className="absolute bottom-0 md:-translate-y-16 max-md:bottom-2 scale-50 text-h2 font-tt-squares md:group-hover:translate-y-0 md:group-hover:scale-100 transition">
              VISHMAKARMA
            </p>
          </div>
          <div className="relative flex justify-center w-56 h-56 xl:w-80 xl:h-80 group">
            <div className="w-full h-full max-md:scale-75 p-10 bg-accents-yellow-3 rounded-[64px] md:group-hover:scale-[80%] origin-top transition z-10">
              <img
                src="/subteams/vishmakarma.png"
                alt="vishmakarma"
                className="object-contain"
              />
            </div>
            <p className="absolute bottom-0 md:-translate-y-16 max-md:bottom-2 scale-50 text-h2 font-tt-squares md:group-hover:translate-y-0 md:group-hover:scale-100 transition">
              ANTASENA
            </p>
          </div>
          <div className="relative flex justify-center w-56 h-56 xl:w-80 xl:h-80 group">
            <div className="w-full h-full max-md:scale-75 p-10 bg-accents-yellow-3 rounded-[64px] md:group-hover:scale-[80%] origin-top transition z-10">
              <img
                src="/subteams/vishmakarma.png"
                alt="vishmakarma"
                className="object-contain"
              />
            </div>
            <p className="absolute bottom-0 md:-translate-y-16 max-md:bottom-2 scale-50 text-h2 font-tt-squares md:group-hover:translate-y-0 md:group-hover:scale-100 transition">
              WANDERFALKE
            </p>
          </div>
        </div>
        <img
          src="/misc/race-flag.webp"
          alt="flag"
          className="absolute max-md:min-w-[40rem] md:w-2/3 right-0 top-0 md:translate-x-1/4 translate-y-1/6 md:-translate-y-1/3"
        />
        <img
          src="/misc/race-flag.webp"
          alt="flag"
          className="absolute max-md:min-w-[40rem] md:w-2/3 left-0 bottom-0 -translate-y-1/6 md:-translate-x-1/4 md:translate-y-1/3 rotate-180"
        />
      </div>
    </section>
  );
};

export default Subteams;
