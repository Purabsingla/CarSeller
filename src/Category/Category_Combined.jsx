import CategoryFront from "./Category";
import Category1 from "./Category_ItemsV2";
// import Items from "./Category_Items";
import { FaAnglesRight } from "react-icons/fa6";
import { FooterWithSocialLinks } from "../Footer/Footer";
import something from "../assests/Car_11.jpg";
import { motion } from "framer-motion";
const Category = () => {
  return (
    <>
      <CategoryFront />
      {/* <Items /> */}
      <Category1 />
      <FooterWithSocialLinks />
      <div className="flex flex-col items-center justify-center min-h-screen p-12 bg-gray-100 font-roboto ">
        <div className="card relative w-96 h-144 rounded-lg overflow-hidden cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl">
          <img
            src={something}
            alt="Card Image"
            className=" w-full h-full object-cover transition-opacity duration-300 hover:opacity-30 rounded-lg saturate-200"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 text-white bg-black/0 transition-all delay-250 hover:bg-black/40">
            <h2 className="mb-8 text-2xl font-semibold uppercase card_header">
              Card Heading
            </h2>
            {/* opacity-0 transition-opacity duration-500 hover:opacity-100  */}
            <p className="mb-4 card_text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              exercitationem iste, voluptatum, quia explicabo laboriosam rem
              adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa
              asperiores harum? Dicta odio aut hic.
            </p>
            {/* transition-opacity duration-500 hover:opacity-100 */}
            <a href="#" className="flex items-center text-lg card_link">
              Find out more
              <span className="ml-2">
                <FaAnglesRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Category;
