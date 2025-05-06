import { motion } from "motion/react";

const OurValuesDesktop = () => {
  return (
    <div className="max-md:hidden relative h-full flex flex-col gap-12 xl:gap-24 my-8 xl:my-16 justify-center items-center">
      <div className="flex items-center z-10 xl:mr-24">
        <motion.div
          initial={{ translateX: "90%" }}
          whileInView={{ translateX: 0 }}
          viewport={{ amount: 0.8 }}
          className="relative flex justify-center items-center rounded-[48px] xl:rounded-[56px] w-72 xl:w-[30rem] h-40 xl:h-60 border-8 xl:border-12 border-accents-yellow-3 font-tt-squares text-4xl xl:text-6xl italic text-accents-yellow-3 overflow-hidden z-10"
        >
          C I T I U S
          <img
            src="/misc/marble.webp"
            alt="bg"
            className="absolute object-cover scale-200 -z-10"
          />
        </motion.div>
        <motion.div
          initial={{ scaleX: "1%", originX: "right" }}
          whileInView={{ scaleX: "160%", originX: "right" }}
          className="bg-gradient-to-br from-accents-grey-1 to-accents-grey-3 w-6 xl:w-16 h-10 border-t-4 border-b-4 border-accents-grey-3"
        />
        <motion.div
          initial={{ scaleX: "1%", originX: "left" }}
          whileInView={{ scaleX: "100%", originX: "left" }}
          viewport={{ amount: 0.8 }}
          className="text-b5 xl:text-b3 px-6 xl:px-12 leading-snug flex justify-center items-center text-center w-96 xl:w-[40rem] h-32 xl:h-48 rounded-4xl xl:rounded-[46px] border-5 xl:border-9 border-accents-yellow-3 bg-accents-grey-4"
        >
          Lorem ipsum massa massa ut nisi interdum aenean nam condimentum cursus
          posuere ultricies vestibulum risus semper posuere accumsan eu vitae
          pharetra ut et in quam.
        </motion.div>
      </div>
      <div className="flex flex-row-reverse items-center z-10 xl:ml-24">
        <motion.div
          initial={{ translateX: "-90%" }}
          whileInView={{ translateX: 0 }}
          viewport={{ amount: 0.8 }}
          className="relative flex justify-center items-center rounded-[48px] xl:rounded-[56px] w-72 xl:w-[30rem] h-40 xl:h-60 border-8 xl:border-12 border-accents-yellow-3 font-tt-squares text-4xl xl:text-6xl italic text-accents-yellow-3 overflow-hidden z-10"
        >
          A L T I U S
          <img
            src="/misc/marble.webp"
            alt="bg"
            className="absolute object-cover scale-200 -z-10"
          />
        </motion.div>
        <motion.div
          initial={{ scaleX: "1%", originX: "left" }}
          whileInView={{ scaleX: "160%", originX: "left" }}
          className="bg-gradient-to-br from-accents-grey-1 to-accents-grey-3 w-6 xl:w-16 h-10 border-t-4 border-b-4 border-accents-grey-3"
        />
        <motion.div
          initial={{ scaleX: "1%", originX: "right" }}
          whileInView={{ scaleX: "100%", originX: "right" }}
          viewport={{ amount: 0.9 }}
          className="text-b5 xl:text-b3 px-6 xl:px-12 leading-snug flex justify-center items-center text-center w-96 xl:w-[40rem] h-32 xl:h-48 rounded-4xl xl:rounded-[46px] border-5 xl:border-9 border-accents-yellow-3 bg-accents-grey-4"
        >
          Lorem ipsum massa massa ut nisi interdum aenean nam condimentum cursus
          posuere ultricies vestibulum risus semper posuere accumsan eu vitae
          pharetra ut et in quam.
        </motion.div>
      </div>
      <div className="flex items-center z-10 xl:mr-24">
        <motion.div
          initial={{ translateX: "90%" }}
          whileInView={{ translateX: 0 }}
          viewport={{ amount: 0.8 }}
          className="relative flex justify-center items-center rounded-[48px] xl:rounded-[56px] w-72 xl:w-[30rem] h-40 xl:h-60 border-8 xl:border-12 border-accents-yellow-3 font-tt-squares text-4xl xl:text-6xl italic text-accents-yellow-3 overflow-hidden z-10"
        >
          F O R T I U S
          <img
            src="/misc/marble.webp"
            alt="bg"
            className="absolute object-cover scale-200 -z-10"
          />
        </motion.div>
        <motion.div
          initial={{ scaleX: "1%", originX: "right" }}
          whileInView={{ scaleX: "160%", originX: "right" }}
          className="bg-gradient-to-br from-accents-grey-1 to-accents-grey-3 w-6 xl:w-16 h-10 border-t-4 border-b-4 border-accents-grey-3"
        />
        <motion.div
          initial={{ scaleX: "1%", originX: "left" }}
          whileInView={{ scaleX: "100%", originX: "left" }}
          viewport={{ amount: 0.9 }}
          className="text-b5 xl:text-b3 px-6 xl:px-12 leading-snug flex justify-center items-center text-center w-96 xl:w-[40rem] h-32 xl:h-48 rounded-4xl xl:rounded-[46px] border-5 xl:border-9 border-accents-yellow-3 bg-accents-grey-4"
        >
          Lorem ipsum massa massa ut nisi interdum aenean nam condimentum cursus
          posuere ultricies vestibulum risus semper posuere accumsan eu vitae
          pharetra ut et in quam.
        </motion.div>
      </div>
      <img
        src="/misc/dash-desktop.webp"
        alt="dash"
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-3/5 scale-125 -z-10"
      />
    </div>
  );
};

export default OurValuesDesktop;
