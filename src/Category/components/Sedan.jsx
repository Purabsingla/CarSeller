import { useState } from "react";
const cars = [
  { src: "https://via.placeholder.com/150", text: "Sedan 1", price: 20000 },
  {
    src: "https://via.placeholder.com/150",
    text: "Sports Car 1",
    price: 50000,
  },
  { src: "https://via.placeholder.com/150", text: "Sedan 2", price: 25000 },
  {
    src: "https://via.placeholder.com/150",
    text: "Sports Car 2",
    price: 60000,
  },
  // Add more cars as needed
];
const Sedan = () => {
  const [sortOrder, setSortOrder] = useState("low-to-high");
  const sortedCars = cars.sort((a, b) => {
    return sortOrder === "low-to-high" ? a.price - b.price : b.price - a.price;
  });

  return (
    <>
      <div className="p-4">
        <div className="flex justify-end mb-4">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
        <div className="flex flex-wrap justify-center items-center flex-col ">
          {sortedCars.map((car, index) => (
            <div
              key={index}
              className="flex w-full max-w-6xl h-60 p-4 m-2 bg-white rounded-lg shadow-lg"
            >
              <div className="w-1/3">
                <img
                  src={car.src}
                  alt={car.text}
                  className="w-full h-full object-cover rounded-lg transition hover:opacity-50"
                />
              </div>
              <div className="w-2/3 pl-4">
                <h2 className="text-xl font-semibold">{car.text}</h2>
                <p className="text-gray-600">${car.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Sedan;
