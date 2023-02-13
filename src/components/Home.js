import React from "react";
import HeroImage from "../assets/heroImage.png";
import { HiOutlineArrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-600 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-3 md:flex-row">
        <div className="flex flex-col justify-center  h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-yellow-50">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-400 py-3 max-w-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio fugit
            aperiam nam amet ipsa praesentium, saepe magnam? Laborum consequatur
            similique deleniti! Reiciendis deleniti magni enim similique
            eligendi ullam quo dolorum.
          </p>

          <div>
            {/* use 'group' to group button and icon together  */}
            <button className=" group text-white w-fit px-5 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-300 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-200 ">
                <HiOutlineArrowRight size={20} className="ml-2" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile "
            className="rounded-2xl mx-auto w-2/5"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
