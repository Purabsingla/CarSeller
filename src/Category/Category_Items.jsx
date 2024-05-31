import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { FaAngleDoubleDown } from "react-icons/fa";

const Items = () => {
  const categories = ["Muscle Car", "Sports Car", "SUV", "Sedan"];

  const brandsByCategory = {
    "Muscle Car": ["Chevrolet", "Ford", "Dodge"],
    "Sports Car": ["Porsche", "BMW", "Chevrolet"],
    SUV: ["Jeep", "Toyota"],
    Sedan: ["Toyota", "Honda"],
    Truck: ["Ford", "Chevrolet"],
  };
  const cars = [
    {
      id: 1,
      name: "Chevrolet Camaro",
      category: "Muscle Car",
      brand: "Chevrolet",
      price: 50000,
      isNew: true,
    },
    {
      id: 2,
      name: "Ford Mustang",
      category: "Muscle Car",
      brand: "Ford",
      price: 75000,
      isNew: false,
    },
    {
      id: 3,
      name: "Porsche 911",
      category: "Sports Car",
      brand: "Porsche",
      price: 150000,
      isNew: true,
    },
    {
      id: 4,
      name: "BMW M3",
      category: "Sports Car",
      brand: "BMW",
      price: 100000,
      isNew: false,
    },
    {
      id: 5,
      name: "Jeep Wrangler",
      category: "SUV",
      brand: "Jeep",
      price: 40000,
      isNew: true,
    },
    {
      id: 6,
      name: "Toyota RAV4",
      category: "SUV",
      brand: "Toyota",
      price: 35000,
      isNew: false,
    },
    {
      id: 7,
      name: "Toyota Camry",
      category: "Sedan",
      brand: "Toyota",
      price: 30000,
      isNew: true,
    },
    {
      id: 8,
      name: "Honda Accord",
      category: "Sedan",
      brand: "Honda",
      price: 28000,
      isNew: false,
    },
    {
      id: 9,
      name: "Dodge Challenger",
      category: "Muscle Car",
      brand: "Dodge",
      price: 55000,
      isNew: true,
    },
    {
      id: 10,
      name: "Chevrolet Silverado",
      category: "Truck",
      brand: "Chevrolet",
      price: 45000,
      isNew: false,
    },
    {
      id: 11,
      name: "Ford F-150",
      category: "Truck",
      brand: "Ford",
      price: 60000,
      isNew: true,
    },
    {
      id: 12,
      name: "Toyota Supra",
      category: "Sports Car",
      brand: "Toyota",
      price: 80000,
      isNew: true,
    },
    {
      id: 13,
      name: "Jeep Grand Cherokee",
      category: "SUV",
      brand: "Jeep",
      price: 55000,
      isNew: false,
    },
    {
      id: 14,
      name: "Chevrolet Corvette",
      category: "Sports Car",
      brand: "Chevrolet",
      price: 120000,
      isNew: false,
    },
    {
      id: 15,
      name: "Dodge Charger",
      category: "Muscle Car",
      brand: "Dodge",
      price: 70000,
      isNew: false,
    },
    {
      id: 16,
      name: "Honda Civic",
      category: "Sedan",
      brand: "Honda",
      price: 25000,
      isNew: true,
    },
    {
      id: 17,
      name: "BMW X5",
      category: "SUV",
      brand: "BMW",
      price: 70000,
      isNew: false,
    },
    {
      id: 18,
      name: "Toyota Tacoma",
      category: "Truck",
      brand: "Toyota",
      price: 35000,
      isNew: true,
    },
    {
      id: 19,
      name: "Ford Explorer",
      category: "SUV",
      brand: "Ford",
      price: 45000,
      isNew: true,
    },
    {
      id: 20,
      name: "Porsche Cayenne",
      category: "SUV",
      brand: "Porsche",
      price: 90000,
      isNew: false,
    },
    {
      id: 21,
      name: "Dodge Viper",
      category: "Muscle Car",
      brand: "Dodge",
      price: 49000,
      isNew: true,
    },
    // Add more cards here
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [isNew, setIsNew] = useState("");
  const [sortByPrice, setSortByPrice] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedBrand("All");
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  const handleNewChange = (event) => {
    setIsNew(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSortByPrice(event.target.value);
  };

  let filteredCars = cars.filter((car) => {
    return (
      (selectedCategory === "All" || car.category === selectedCategory) &&
      (selectedBrand === "All" || car.brand === selectedBrand) &&
      (isNew === "" || car.isNew === (isNew === "yes"))
    ); // Filter based on new
  });

  if (sortByPrice === "lowToHigh") {
    filteredCars = filteredCars.sort((a, b) => a.price - b.price);
  } else if (sortByPrice === "highToLow") {
    filteredCars = filteredCars.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <div className="category-page flex justify-center mt-8 mx-4 mb-4">
        <div className="category-navigation w-1/4 pr-4">
          <Accordion expanded={true}>
            <AccordionSummary expandIcon={<FaAngleDoubleDown />}>
              <Typography>Car Category</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography onClick={() => handleCategoryChange("All")}>
                All
              </Typography>
            </AccordionDetails>
          </Accordion>
          {categories.map((category, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<FaAngleDoubleDown />}>
                <Typography>{category}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography onClick={() => handleCategoryChange(category)}>
                  {category}
                </Typography>
                <ul>
                  {brandsByCategory[category].map((brand, index) => (
                    <li key={index} onClick={() => handleBrandChange(brand)}>
                      {brand}
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <div className="card-display w-3/4 pl-4">
          <div className="filter-options mb-4 flex justify-between">
            <FormControl variant="outlined" className="mr-4">
              <InputLabel>New</InputLabel>
              <Select
                value={isNew}
                onChange={handleNewChange}
                label="New"
                sx={{ width: 150 }}
              >
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel>Price</InputLabel>
              <Select
                value={sortByPrice}
                onChange={handlePriceChange}
                label="Price"
                sx={{ width: 150 }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="lowToHigh">Low to High</MenuItem>
                <MenuItem value="highToLow">High to Low</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="cards grid grid-cols-3 gap-4">
            {filteredCars.map((car) => (
              <div key={car.id} className="card border rounded p-4">
                <h3 className="font-semibold">{car.name}</h3>
                <p>Category: {car.category}</p>
                <p>Brand: {car.brand}</p>
                <p>Price: ${car.price}</p>
                <p>New: {car.isNew ? "Yes" : "No"}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="Box flex flex-row p-4">
        <div className="Item-types w-72 bg-red-A200 mr-2">hello</div>
        <div className="Items w-[78vw] bg-yellow-900 ml-2">hellllllo</div>
      </div> */}
    </>
  );
};
export default Items;
