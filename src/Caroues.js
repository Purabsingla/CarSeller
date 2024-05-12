import car from "./assests/4kimage.jpg";
import { motion } from "framer-motion";
import { Button } from "@material-tailwind/react";
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
            className="header font-Merriweather absolute top-52 text-white text-8xl font-semibold"
          >
            <h1>A Place To</h1>
          </motion.div>
          <motion.div
            variants={item}
            className="font-Merriweather absolute left-80 top-72 text-white text-8xl font-semibold"
          >
            <h1>Get Your Dream Car</h1>
          </motion.div>
          <motion.div variants={item} className="absolute leftt">
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
