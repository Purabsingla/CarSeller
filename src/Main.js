import { NavbarDefault } from "./Caro";
import { CaroContent } from "./Caroues";
import New from "./Products/NewProducts";
import InfiniteSlider from "./Products/InfiniteCarousel";
import { BackgroundBlogCard } from "./Footer/Blog";
import { FooterWithSocialLinks } from "./Footer/Footer";
// import { motion } from "framer-motion";
import Feature from "./Products/Featured";
// import CustomNavbarHaiMera from "./Navigation";

const Main = () => {
  {
    /*initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        exit={{opacity:0}} */
  }
  return (
    <>
      <div>
        <CaroContent />
        <New />
        <Feature />
        <InfiniteSlider />
        <BackgroundBlogCard />
        <FooterWithSocialLinks />
        <div>
          <div className="absolute top-[0] w-[99vw]">
            <NavbarDefault />
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
