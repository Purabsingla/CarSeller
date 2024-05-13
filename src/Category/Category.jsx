import { Breadcrumbs } from "@material-tailwind/react";
import { IoIosArrowForward } from "react-icons/io";
import Car from "../assests/Category-1.jpg";
import { NavbarDefault } from "../Caro";
function CategoryFront() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${Car})` }}
        className="bg-cover bg-no-repeat h-screen"
      ></div>
      <div className="BreadCrumps absolute top-24 left-3">
        <Breadcrumbs
          separator=<IoIosArrowForward
            className="h-4 w-4 text-black"
            strokeWidth={2.5}
          />
        >
          <a href="#" className="opacity-60">
            Docs
          </a>
          <a href="#" className="opacity-60">
            Components
          </a>
          <a href="#">Breadcrumbs</a>
        </Breadcrumbs>
      </div>
      <div className="absolute top-0 w-[99vw] ">
        <NavbarDefault />
      </div>
      <div className="font-Merriweather font-semibold text-8xl absolute top-[47%] left-[33%] text-white">
        <h1>Categories</h1>
      </div>
    </>
  );
}
export default CategoryFront;
