import something from "../assests/Car_11.jpg";
import { FaAnglesRight } from "react-icons/fa6";

import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

export function BackgroundBlogCard() {
  return (
    <>
      <div className="flex items-center flex-1 m-8 flex-row justify-center">
        <Tilt options={defaultOptions}>
          {" "}
          <div className="card relative w-96 h-144 rounded-lg overflow-hidden cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl mr-7">
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt exercitationem iste, voluptatum, quia explicabo
                laboriosam rem adipisci voluptates cumque, veritatis atque
                nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
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
        </Tilt>

        <div className="card relative w-96 h-144 rounded-lg overflow-hidden cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl mr-7">
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
}
