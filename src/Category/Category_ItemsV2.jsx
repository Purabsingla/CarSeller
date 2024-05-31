import car_1 from "../assests/Sedan.jpg";
import car_2 from "../assests/Suv.jpg";
import car_3 from "../assests/Convertible.jpg";
import car_4 from "../assests/PickupTruck.jpg";
import car_5 from "../assests/Roadster.jpg";
import car_6 from "../assests/SportsCar.jpg";
import car_7 from "../assests/LuxryCar.jpg";
import car_8 from "../assests/Muscle Car.jpg";
import car_9 from "../assests/Super Car.jpg";
import car_10 from "../assests/HyperCar.jpg";
import { useNavigate } from "react-router";

const images = [
  { src: car_1, text: "Sedan", path: "/Sedan" },
  { src: car_2, text: "Suv", path: "/Suv" },
  { src: car_3, text: "Convertible", path: "/Convertible" },
  { src: car_4, text: "Pickup Truck", path: "/Pickup" },
  { src: car_5, text: "Roadster", path: "/Roadster" },
  { src: car_6, text: "Sports car", path: "/sportscar" },
  { src: car_7, text: "Luxry car", path: "/Luxrycar" },
  { src: car_8, text: "Muscle Car", path: "/musclecar" },
  { src: car_9, text: "Super car", path: "/supercar" },
  { src: car_10, text: "Hyper car", path: "/hypercar" },
];

const Category1 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap justify-center p-4">
      {images.map((img, index) => (
        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <div
            className="relative w-full h-64 overflow-hidden m-2 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
            onClick={() => {
              navigate(img.path);
              console.log(img.path);
            }}
          >
            <img
              src={img.src}
              alt={img.text}
              className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-30 rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 rounded-lg">
              <span className="text-white text-lg ">{img.text}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category1;
