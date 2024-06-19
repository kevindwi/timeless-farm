import React, { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex items-center justify-between w-ful h-16">
      <div className="text-xl font-semibold">
        <a href="#">Rofarm</a>
      </div>

      <div className="hidden md:block bg-transparent">
        <ul className="flex flex-col md:flex-row gap-5">
          <li className="active hover:text-white">
            <a href="#">Home</a>
          </li>
          <li className="text-zinc-200 hover:text-white">
            <a href="#">About</a>
          </li>
          <li className="text-zinc-200 hover:text-white">
            <a href="#">Services</a>
          </li>
          <li className="text-zinc-200 hover:text-white">
            <a href="#">Careers</a>
          </li>
          <li className="text-zinc-200 hover:text-white">
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>

      <button
        className={`hidden md:block px-4 py-1 bg-black/40 rounded-full hover:bg-black/60`}
      >
        Contact Us
      </button>

      {/* Mobile Menu Button */}
      <div
        className="block md:hidden z-20 cursor-pointer"
        onClick={() => setMenu(!menu)}
      >
        {menu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </div>

      {/* Mobile Menu */}
      {menu ? (
        <div className="absolute md:hidden z-10 bg-black top-0 left-0 bottom-0 flex justify-center items-center text-center w-full h-screen ease-in duration-300">
          <ul className="flex flex-col md:flex-row gap-5 text-xl">
            <li className="text-zinc-400 hover:text-white">
              <a href="#">Home</a>
            </li>
            <li className="text-zinc-400 hover:text-white">
              <a href="#">About</a>
            </li>
            <li className="text-zinc-400 hover:text-white">
              <a href="#">Services</a>
            </li>
            <li className="text-zinc-400 hover:text-white">
              <a href="#">Careers</a>
            </li>
            <li className="text-zinc-400 hover:text-white">
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
