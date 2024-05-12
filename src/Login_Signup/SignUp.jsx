import { Breadcrumbs } from "@material-tailwind/react";
import { IoIosArrowForward } from "react-icons/io";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { NavbarDefault } from "../Caro";

export default function Login_1() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <NavbarDefault />
      <div class="container">
        <Breadcrumbs
          separator={
            <IoIosArrowForward
              className="h-4 w-4 text-black"
              strokeWidth={2.5}
            />
          }
          className="w-[99vw] bg-some p-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-none"
        >
          <a
            href="#"
            className="text-black transition-all duration-300 hover:text-blue-200"
          >
            home
          </a>
          <a
            href="#"
            className="text-black transition-all duration-300 hover:text-blue-200"
          >
            Sign Up
          </a>
        </Breadcrumbs>
        <div>
          <div className="min-h-[95vh] w-[99vw] p-10 bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                <div className="image-add w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"></div>
                <div className="w-full lg:w-1/2 py-16 px-12">
                  <h2 className="text-3xl mb-4">Register</h2>
                  <p className="mb-4">
                    Create your account. It’s free and only take a minute
                  </p>
                  <form action="#">
                    <div className="grid grid-cols-2 gap-5">
                      <input
                        type="text"
                        placeholder="Firstname"
                        class="border border-gray-400 py-1 px-2"
                      />
                      <input
                        type="text"
                        placeholder="Surname"
                        class="border border-gray-400 py-1 px-2"
                      />
                    </div>
                    <div class="mt-5">
                      <input
                        type="text"
                        placeholder="Email"
                        class="border border-gray-400 py-1 px-2 w-full"
                      />
                    </div>
                    <div class="mt-5">
                      <input
                        type="password"
                        placeholder="Password"
                        class="border border-gray-400 py-1 px-2 w-full"
                      />
                    </div>
                    <div class="mt-5">
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        class="border border-gray-400 py-1 px-2 w-full"
                      />
                    </div>
                    <div class="mt-5">
                      <Checkbox {...label} defaultChecked color="secondary" />
                      <span className="text-sm">
                        I accept the{" "}
                        <a href="#" class="text-purple-500 font-semibold">
                          Terms of Use
                        </a>{" "}
                        &{" "}
                        <a href="#" class="text-purple-500 font-semibold">
                          Privacy Policy
                        </a>
                      </span>
                    </div>
                    <div className="mt-5">
                      <span className="text-sm">
                        Already have An Account ,{" "}
                        <span className="text-purple-500 font-semibold cursor-pointer">
                          Sign in
                        </span>
                      </span>
                    </div>
                    <div class="mt-5">
                      <Button
                        color="secondary"
                        variant="contained"
                        className="w-full"
                      >
                        Register Now
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
