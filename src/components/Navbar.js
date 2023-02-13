import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "portfolio",
    },
    {
      id: 3,
      link: "about",
    },
    {
      id: 4,
      link: "project",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-3 text-yellow-200 bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Vanshul Dahiya</h1>
      </div>
      {/* hide menu when it comes to mobile site */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-3 cursor-pointer capitalize font-medium  text-gray-400 hover:scale-110 duration-200 "
          >
            {link}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4  z-10 text-gray-400 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* if nav is true then mobile version  , else don't show */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-5 text-4xl "
            >
              {link}
            </li>
          ))}
        </ul>
      )}

      {/* for mobile version */}
    </div>
  );
};

export default Navbar;
