import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex items-center justify-between w-ful h-16">
      <div className="text-xl font-semibold">
        <a href="/">Timeless</a>
      </div>

      <div className="hidden md:block bg-transparent">
        <ul className="flex flex-col md:flex-row gap-8">
          <li className="text-zinc-200 hover:text-white cursor-pointer">
            <Link smooth={true} duration={500} to="about">
              Tentang Kami
            </Link>
          </li>
          <li className="text-zinc-200 hover:text-white cursor-pointer">
            <Link smooth={true} duration={500} to="services">
              Layanan
            </Link>
          </li>
          <li className="text-zinc-200 hover:text-white cursor-pointer">
            <Link smooth={true} duration={500} to="whychooseus">
              Mengapa Kami
            </Link>
          </li>
        </ul>
      </div>

      <button
        className={`hidden md:block px-4 py-1 bg-black/40 rounded-full hover:text-zinc-200 hover:bg-black/60`}
      >
        <Link smooth={true} duration={500} to="contact">
          Kontak Kami
        </Link>
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
            <li className="text-zinc-200 hover:text-white cursor-pointer">
              <Link smooth={true} duration={500} to="about">
                Tentang Kami
              </Link>
            </li>
            <li className="text-zinc-200 hover:text-white cursor-pointer">
              <Link smooth={true} duration={500} to="services">
                Layanan
              </Link>
            </li>
            <li className="text-zinc-200 hover:text-white cursor-pointer">
              <Link smooth={true} duration={500} to="whychooseus">
                Mengapa Kami
              </Link>
            </li>
            <li>
              <button
                className={`md:block px-6 py-2 text-black bg-white rounded-full hover:text-zinc-200 hover:bg-slate-400`}
              >
                <Link smooth={true} duration={500} to="contact">
                  Kontak Kami
                </Link>
              </button>
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
