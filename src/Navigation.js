// Navbar.js
import React, { useState } from "react";
import {
  Navbar,
  MobileNav,
  NavLink,
  IconButton,
} from "@material-tailwind/react";

const CustomNavbarHaiMera = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="relative">
      <Navbar className="fixed top-0 left-0 w-full bg-transparent z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">WebsiteName</div>
          <div className="hidden md:flex space-x-4">
            <NavLink href="#home" className="text-white">
              Home
            </NavLink>
            <NavLink href="#about" className="text-white">
              About Us
            </NavLink>
            <NavLink href="#services" className="text-white">
              Services
            </NavLink>
            <NavLink href="#contact" className="text-white">
              Contact
            </NavLink>
            <input
              type="text"
              placeholder="Search..."
              className="hidden lg:block p-2 rounded-md"
            />
          </div>
          <div className="hidden md:flex space-x-4">
            <button className="bg-orange-500 text-white p-2 rounded-md">
              Cart
            </button>
            <button className="bg-green-500 text-white p-2 rounded-md">
              Login
            </button>
            <button className="bg-blue-500 text-white p-2 rounded-md">
              Sign Up
            </button>
          </div>
          <IconButton
            variant="text"
            className="md:hidden text-white"
            onClick={() => setOpenNav(!openNav)}
          >
            <i className="fas fa-bars"></i>
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="flex flex-col space-y-4">
            <NavLink href="#home" className="text-black">
              Home
            </NavLink>
            <NavLink href="#about" className="text-black">
              About Us
            </NavLink>
            <NavLink href="#services" className="text-black">
              Services
            </NavLink>
            <NavLink href="#contact" className="text-black">
              Contact
            </NavLink>
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded-md"
            />
            <button className="bg-orange-500 text-white p-2 rounded-md">
              Cart
            </button>
            <button className="bg-green-500 text-white p-2 rounded-md">
              Login
            </button>
            <button className="bg-blue-500 text-white p-2 rounded-md">
              Sign Up
            </button>
          </div>
        </MobileNav>
      </Navbar>
      <img
        src="path/to/your/image.jpg"
        alt="Background"
        className="w-full h-screen object-cover"
      />
    </div>
  );
};

export default CustomNavbarHaiMera;
