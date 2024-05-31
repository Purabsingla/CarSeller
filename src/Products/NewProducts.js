import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import Cards from "./Cards";
import "react-multi-carousel/lib/styles.css";

function New() {
  //Api Connection
  const [Apii, setApi] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/getCarData")
      .then((response) => response.json())
      .then((data) => {
        console.log("Api data is ", data);
        setApi(data.listofuser);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  //Cards Carosels responsive
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="overflow-hidden font-Merriweather flex items-center justify-center py-9">
        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original positin
            transition: {
              duration: 1.2, // Animation duration
            },
          }}
          exit={{
            opacity: 0,
            x: 60,
          }}
          viewport={{ once: false }}
          className="text-6xl font-semibold"
        >
          New Products
        </motion.div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: 90,
        }}
        whileInView={{
          opacity: 1,
          y: 0, // Slide in to its original position
          transition: {
            duration: 1.2, // Animation duration
          },
        }}
        exit={{
          opacity: 0,
          y: 90,
        }}
        viewport={{ once: false }}
      >
        <Carousel
          responsive={responsive}
          className="m-5"
          containerClass="carousel-container"
        >
          {Apii &&
            Apii.map((item) => (
              <motion.div
                initial={{ y: 0 }}
                whileHover={{
                  y: -20,
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                }}
                className="carousel-item"

                // className="flex items-center justify-cente 2xl:pl-7 sm:pl-0 xl:pl-3"
              >
                <Cards
                  name={item.name}
                  discription={item.discription}
                  image={item.image}
                />
              </motion.div>
            ))}
        </Carousel>
      </motion.div>
    </>
  );
}
export default New;
