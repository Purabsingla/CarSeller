import React from "react";
import { useNavigate } from 'react-router-dom';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >

        <svg width="18" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z" fill="#1C274C" />
          <path d="M9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z" fill="#1C274C" />
        </svg>

        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <svg width="18" height="19" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000">

          <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>about</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="about-white" fill="#a1a1a1" transform="translate(42.666667, 42.666667)"> <path d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51168 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.154987,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51168 331.154987,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,384 C119.227947,384 42.6666667,307.43872 42.6666667,213.333333 C42.6666667,119.227947 119.227947,42.6666667 213.333333,42.6666667 C307.44,42.6666667 384,119.227947 384,213.333333 C384,307.43872 307.44,384 213.333333,384 Z M240.04672,128 C240.04672,143.46752 228.785067,154.666667 213.55008,154.666667 C197.698773,154.666667 186.713387,143.46752 186.713387,127.704107 C186.713387,112.5536 197.99616,101.333333 213.55008,101.333333 C228.785067,101.333333 240.04672,112.5536 240.04672,128 Z M192.04672,192 L234.713387,192 L234.713387,320 L192.04672,320 L192.04672,192 Z" id="Shape"> </path> </g> </g> </g>

        </svg>
        <a href="#" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <svg
          width="18"
          height="19"
          viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 3.57143C5.78277 3.57143 4.77634 3.74256 4.09054 3.88071C4.00982 3.89696 3.94486 3.96042 3.93067 4.05126C3.79347 4.92993 3.58824 6.43203 3.58824 7.5C3.58824 8.56797 3.79347 10.0701 3.93067 10.9487C3.94486 11.0396 4.00982 11.103 4.09054 11.1193C4.77634 11.2574 5.78277 11.4286 6.5 11.4286C7.21723 11.4286 8.22366 11.2574 8.90946 11.1193C8.99018 11.103 9.05514 11.0396 9.06933 10.9487C9.20653 10.0701 9.41177 8.56797 9.41177 7.5C9.41177 6.43203 9.20653 4.92993 9.06933 4.05126C9.05514 3.96042 8.99018 3.89696 8.90946 3.88071C8.22366 3.74256 7.21723 3.57143 6.5 3.57143ZM3.77369 2.34087C4.46212 2.20219 5.60739 2 6.5 2C7.39261 2 8.53788 2.20219 9.22631 2.34087C9.9687 2.49041 10.5249 3.08082 10.6389 3.81133C10.7759 4.68826 11 6.29813 11 7.5C11 8.70187 10.7759 10.3117 10.6389 11.1887C10.5249 11.9192 9.9687 12.5096 9.22631 12.6591C8.53788 12.7978 7.39261 13 6.5 13C5.60739 13 4.46212 12.7978 3.77369 12.6591C3.0313 12.5096 2.47513 11.9192 2.36106 11.1887C2.22412 10.3117 2 8.70187 2 7.5C2 6.29813 2.22412 4.68826 2.36106 3.81133C2.47513 3.08082 3.0313 2.49041 3.77369 2.34087Z" fill="#a1a1a1"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 20.4286C16.7828 20.4286 15.7763 20.2574 15.0905 20.1193C15.0098 20.103 14.9449 20.0396 14.9307 19.9487C14.7935 19.0701 14.5882 17.568 14.5882 16.5C14.5882 15.432 14.7935 13.9299 14.9307 13.0513C14.9449 12.9604 15.0098 12.897 15.0905 12.8807C15.7763 12.7426 16.7828 12.5714 17.5 12.5714C18.2172 12.5714 19.2237 12.7426 19.9095 12.8807C19.9902 12.897 20.0551 12.9604 20.0693 13.0513C20.2065 13.9299 20.4118 15.432 20.4118 16.5C20.4118 17.568 20.2065 19.0701 20.0693 19.9487C20.0551 20.0396 19.9902 20.103 19.9095 20.1193C19.2237 20.2574 18.2172 20.4286 17.5 20.4286ZM14.7737 21.6591C15.4621 21.7978 16.6074 22 17.5 22C18.3926 22 19.5379 21.7978 20.2263 21.6591C20.9687 21.5096 21.5249 20.9192 21.6389 20.1887C21.7759 19.3117 22 17.7019 22 16.5C22 15.2981 21.7759 13.6883 21.6389 12.8113C21.5249 12.0808 20.9687 11.4904 20.2263 11.3409C19.5379 11.2022 18.3926 11 17.5 11C16.6074 11 15.4621 11.2022 14.7737 11.3409C14.0313 11.4904 13.4751 12.0808 13.3611 12.8113C13.2241 13.6883 13 15.2981 13 16.5C13 17.7019 13.2241 19.3117 13.3611 20.1887C13.4751 20.9192 14.0313 21.5096 14.7737 21.6591Z" fill="#a1a1a1"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 16.6154C5.73888 16.6154 4.66241 16.7965 3.98316 16.9294C3.90741 16.9443 3.86241 16.9941 3.84775 17.0469C3.71755 17.5158 3.58824 18.0994 3.58824 18.5C3.58824 18.9006 3.71755 19.4842 3.84775 19.9531C3.86241 20.0059 3.90741 20.0557 3.98316 20.0706C4.66241 20.2035 5.73888 20.3846 6.5 20.3846C7.26112 20.3846 8.33759 20.2035 9.01684 20.0706C9.09259 20.0557 9.13759 20.0059 9.15225 19.9531C9.28245 19.4842 9.41177 18.9006 9.41177 18.5C9.41177 18.0994 9.28245 17.5158 9.15225 17.0469C9.13759 16.9941 9.09259 16.9443 9.01684 16.9294C8.33759 16.7965 7.26112 16.6154 6.5 16.6154ZM3.68301 15.3432C4.36186 15.2103 5.57165 15 6.5 15C7.42835 15 8.63814 15.2103 9.31699 15.3432C9.95957 15.4689 10.4966 15.9447 10.6807 16.6079C10.8134 17.0857 11 17.857 11 18.5C11 19.143 10.8134 19.9143 10.6807 20.3921C10.4966 21.0553 9.95957 21.5311 9.31699 21.6568C8.63814 21.7897 7.42835 22 6.5 22C5.57165 22 4.36186 21.7897 3.68301 21.6568C3.04043 21.5311 2.50344 21.0553 2.31929 20.3921C2.18661 19.9143 2 19.143 2 18.5C2 17.857 2.18661 17.0857 2.31929 16.6079C2.50344 15.9447 3.04043 15.4689 3.68301 15.3432Z" fill="#a1a1a1"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 7.38462C16.7389 7.38462 15.6624 7.20353 14.9832 7.07057C14.9074 7.05575 14.8624 7.00592 14.8477 6.95312C14.7176 6.4842 14.5882 5.90057 14.5882 5.5C14.5882 5.09943 14.7176 4.5158 14.8477 4.04688C14.8624 3.99408 14.9074 3.94425 14.9832 3.92943C15.6624 3.79647 16.7389 3.61538 17.5 3.61538C18.2611 3.61538 19.3376 3.79647 20.0168 3.92943C20.0926 3.94425 20.1376 3.99408 20.1523 4.04688C20.2824 4.5158 20.4118 5.09943 20.4118 5.5C20.4118 5.90057 20.2824 6.4842 20.1523 6.95312C20.1376 7.00592 20.0926 7.05575 20.0168 7.07057C19.3376 7.20353 18.2611 7.38462 17.5 7.38462ZM14.683 8.65685C15.3619 8.78973 16.5717 9 17.5 9C18.4283 9 19.6381 8.78973 20.317 8.65685C20.9596 8.53107 21.4966 8.05534 21.6807 7.39214C21.8134 6.91427 22 6.14299 22 5.5C22 4.85701 21.8134 4.08573 21.6807 3.60786C21.4966 2.94466 20.9596 2.46893 20.317 2.34315C19.6381 2.21027 18.4283 2 17.5 2C16.5717 2 15.3619 2.21027 14.683 2.34315C14.0404 2.46893 13.5034 2.94466 13.3193 3.60786C13.1866 4.08573 13 4.85701 13 5.5C13 6.14299 13.1866 6.91427 13.3193 7.39214C13.5034 8.05534 14.0404 8.53107 14.683 8.65685Z" fill="#a1a1a1"></path>
          </g>
        </svg>
        <a href="#" className="flex items-center">
          Category
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <svg
          width="16"
          height="15"
          fill="#a1a1a1" version="1.1" id="XMLID_276_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="#a1a1a1"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier"> <g id="contact-us"><path d="M4,24v-5H0V0h23v19h-9.3L4,24z M2,17h4v3.7l7.3-3.7H21V2H2V17z"></path>
          <rect x="5" y="8" width="3" height="3"></rect> </g> <g> <rect x="10" y="8" width="3" height="3"></rect>
          <rect x="15" y="8" width="3" height="3"></rect>
          </g></g>
        </svg>
        <a href="#" className="flex items-center">
          Contact us
        </a>
      </Typography>
    </ul>
  );
  const navigate = useNavigate();
  return (
    <Navbar className="mx-auto px-4 py-2 lg:px-8 lg:py-4 w-max-screen shadow-none">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >

          Car Canvas
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          <Button variant="text" size="sm" className="hidden lg:inline-block" onClick={()=>navigate('Login')}>
            <span>Log In</span>
          </Button>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span>Sign in</span>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}