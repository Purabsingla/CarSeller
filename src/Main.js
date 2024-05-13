import { NavbarDefault } from "./Caro";
import { CaroContent } from "./Caroues";
import New from "./Products/NewProducts";
import InfiniteSlider from "./Products/InfiniteCarousel";
import { BackgroundBlogCard } from "./Footer/Blog";
import { FooterWithSocialLinks } from "./Footer/Footer";
import { motion } from "framer-motion";
import Feature from "./Products/Featured";

const Main = () => {
  {
    /*initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        exit={{opacity:0}} */
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
      >
        <NavbarDefault />
        <CaroContent />
      </motion.div>
      <New />
      <Feature />
      <InfiniteSlider />
      <BackgroundBlogCard />
      <FooterWithSocialLinks />
    </>
  );
};
export default Main;
