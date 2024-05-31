import car from "./assests/Car_Front_1.jpg";
import { motion } from "framer-motion";
import { Button } from "@material-tailwind/react";
// import { useEffect, useState } from "react";
export function CaroContent() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <div className="realtive overflow-auto">
        <img src={car} className="w-screen"></img>
        <motion.div
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={item}
            className="header font-Merriweather absolute 2xl:top-52 text-white 2xl:text-8xl font-semibold xl:text-7xl xl:top-[26%] xl:left-[34.5%] lg:top-[23%] lg:text-6xl md:text-5xl md:top-[18%] sm:top-[15%] sm:text-4xl"
          >
            <h1>A Place To</h1>
          </motion.div>
          <motion.div
            variants={item}
            className="font-Merriweather absolute 2xl:left-[21%] 2xl:top-[42%] text-white 2xl:text-8xl font-semibold xl:text-7xl xl:top-[36%] xl:left-[21.4%] lg:text-6xl lg:top-[32%] lg:left-[23%] md:top-[26%] md:text-5xl md:left-[22.6%] sm:top-[21%] sm:text-4xl sm:left-[24%]"
          >
            <h1>Get Your Dream Car</h1>
          </motion.div>
          <motion.div
            variants={item}
            className="absolute 2xl:top-[60%] 2xl:left-[46.3%] xl:top-[51%] xl:left-[45.4%] lg:top-[45%] lg:left-[44.4%] md:top-[36%] md:left-[43.4%] sm:left-[40%] sm:top-[29%]"
          >
            <Button
              variant="outlined"
              color="blue"
              className="font-semibold border-2"
            >
              View More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
