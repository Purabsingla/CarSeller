import { Breadcrumbs } from "@material-tailwind/react";
import { IoIosArrowForward } from "react-icons/io";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { NavbarDefault } from "../Caro";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

export default function Log() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[300]),
    backgroundColor: purple[300],
    "&:hover": {
      backgroundColor: purple[500],
    },
  }));
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
          className="w-[99vw] bg-some p-6 bg-gradient-to-r from-purple-A700 to-purple-300 rounded-none"
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
            Sign In
          </a>
        </Breadcrumbs>
        <div>
          <div className="min-h-[91vh] w-[99vw] p-10 bg-gradient-to-r from-purple-A700 to-purple-300">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                <div className="w-full lg:w-1/2 py-16 px-12">
                  <h2 className="text-3xl mb-4">Login</h2>
                  <p className="mb-4">
                    Secure gateway . Enter credentials for website access and
                    interaction.
                  </p>
                  <form action="#">
                    <div class="mt-5">
                      <TextField
                        id="standard-basic"
                        label="E mail"
                        variant="standard"
                        color="secondary"
                        className="py-1 px-2 w-full"
                      />
                    </div>
                    <div class="mt-5">
                      <TextField
                        id="standard-basic"
                        label="Password"
                        variant="standard"
                        color="secondary"
                        type="password"
                        className="py-1 px-2 w-full"
                      />
                    </div>

                    <div class="mt-5">
                      <Checkbox {...label} color="secondary" />
                      <span className="text-sm">Remember Me</span>
                    </div>
                    <div className="mt-5">
                      <span className="text-sm">
                        Don't have An Account ,{" "}
                        <span className="text-purple-300 font-semibold cursor-pointer">
                          Sign up
                        </span>
                      </span>
                    </div>
                    <div class="mt-5">
                      <ColorButton
                        // color="secondary"
                        variant="contained"
                        className="w-full"
                      >
                        Sign In
                      </ColorButton>
                    </div>
                  </form>
                </div>
                <div className="image-add-sec w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
