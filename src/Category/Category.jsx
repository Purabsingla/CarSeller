import { Breadcrumbs } from "@material-tailwind/react";
import { IoIosArrowForward } from "react-icons/io";
import Car from "../assests/Category-1.jpg";
import { NavbarDefault } from "../Caro";
import { useNavigate } from "react-router";
function CategoryFront() {
  const navigate = useNavigate();
  return (
    <>
      <div className="overflow-hidden">
        <div
          style={{ backgroundImage: `url(${Car})` }}
          className="bg-cover bg-no-repeat bg-center w-screen h-screen "
        />
      </div>
      <div className="BreadCrumps absolute top-24 left-3">
        <Breadcrumbs
          separator=<IoIosArrowForward
            className="h-4 w-4 text-black "
            strokeWidth={2.5}
          />
        >
          <p
            className="opacity-60 font-Merriweather font-semibold text-md transition-all hover:text-green-900"
            onClick={() => navigate("/")}
          >
            Home
          </p>
          <p className="opacity-60 cursor-not-allowed font-Merriweather font-semibold text-md transition-all hover:text-red-500">
            Category
          </p>
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
